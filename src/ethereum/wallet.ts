import Web3 from "web3";
import * as bip39 from 'bip39';
import { hdkey } from 'ethereumjs-wallet';
import CryptoJS from 'crypto-js';
import bcrypt from 'bcrypt';
import { Passero_One } from "next/font/google";

const web3 = new Web3("wss://ethereum-sepolia-rpc.publicnode.com");
const ENCRYPTED_KEY_STORAGE = 'ENCRYPTED_WALLET_KEY';

const createWallet = (): { address: string, encryptedKey: string } => {
  const wallet = web3.eth.accounts.create(web3.utils.randomHex(32));
  const encryptedKey = encryptPrivateKey(wallet.privateKey, password);
  return { address: wallet.address, encryptedKey };
};

const connectWallet = async (recoveryPhrases: Array<string>): Promise<{ address: string, encryptedKey: string }> => {
  try {
    const mnemonic = recoveryPhrases.join(' ');
    if (!bip39.validateMnemonic(mnemonic)) {
      throw new Error('Invalid mnemonic phrase');
    }
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const hdWallet = hdkey.fromMasterSeed(seed);
    const wallet = hdWallet.derivePath("m/44'/60'/0'/0/0").getWallet();
    const privateKey = wallet.getPrivateKey().toString('hex');
    const account = web3.eth.accounts.privateKeyToAccount('0x' + privateKey);
    const encryptedKey = encryptPrivateKey(account.privateKey, password); // Will be the pass entered by the user on frontend1
    return { address: account.address, encryptedKey };
  } catch (error) {
    console.error('Error connecting wallet:', error);
    throw error;
  }
};

const encryptPrivateKey = (privateKey: string, password: string): string => {
  const secretPassphrase = getSecretPassphrase(password);
  secretPassphrase ? CryptoJS.AES.encrypt(privateKey, secretPassphrase).toString() : throw new Error('Invalid password');

};


const decryptPrivateKey = (encryptedKey: string, password: string): string => {
  const secretPassphrase = getSecretPassphrase(password);
  const bytes = CryptoJS.AES.decrypt(encryptedKey, secretPassphrase);
  return bytes.toString(CryptoJS.enc.Utf8);
};


const storeEncryptedKey = (encryptedKey: string): void => {
  localStorage.setItem(ENCRYPTED_KEY_STORAGE, encryptedKey);
};


const getStoredEncryptedKey = (): string | null => {
  return localStorage.getItem(ENCRYPTED_KEY_STORAGE);
};


const signTransaction = async (tx: any): Promise<any> => {
  const encryptedKey = getStoredEncryptedKey();
  if (!encryptedKey) {
    throw new Error('No wallet connected');
  }
  const privateKey = decryptPrivateKey(encryptedKey);
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  const signedTx = await account.signTransaction(tx);
  return web3.eth.sendSignedTransaction(signedTx.rawTransaction);
};

const getSecretPassphrase = async (password: string): Promise<string> => {
  const hash = await hashPassword(password);
  const verify = await verifyWalletPassword(password, hash);
  return verify ? hash : Promise.reject(new Error('Invalid password'));
};

const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return bcrypt.hashSync(password, salt);
};

const verifyWalletPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};
