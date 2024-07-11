
import Web3 from "web3";
import * as bip39 from 'bip39';
import { hdkey } from 'ethereumjs-wallet';
import CryptoJS from 'crypto-js';
import bcrypt from 'bcrypt';
require('dotenv').config();

const web3Address = process.env.MAIN_NET_ADDRESS || 'http://localhost:8545'; // Default address if MAIN_NET_ADDRESS is not set
const web3 = new Web3(web3Address);

const ENCRYPTED_KEY_STORAGE = 'ENCRYPTED_WALLET_KEY';
const PASSWORD_SALT_ROUNDS = 10;


const createWallet = async (password: string): Promise<{ address: string, encryptedKey: string }> => {
  const wallet = web3.eth.accounts.create(web3.utils.randomHex(32));

  const encryptedKey = await encryptPrivateKey(wallet.privateKey, password);

  return { address: wallet.address, encryptedKey };
};


const connectWallet = async (recoveryPhrases: Array<string>, password: string): Promise<{ address: string, encryptedKey: string }> => {
  try {
    const mnemonic = recoveryPhrases.join(' ');
    if (!bip39.validateMnemonic(mnemonic)) {
      throw new Error('Invalid mnemonic phrase');
    }
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const hdWallet = hdkey.fromMasterSeed(seed);
    const wallet = hdWallet.derivePath("m/44'/60'/0'/0/0").getWallet();
    const privateKey = wallet.getPrivateKey().toString('hex');
    const encryptedKey = await encryptPrivateKey(privateKey, password);

    return { address: wallet.getAddressString(), encryptedKey };
  } catch (error) {
    console.error('Error connecting wallet:', error);
    throw error;
  }
};

const encryptPrivateKey = async (privateKey: string, password: string): Promise<string> => {
  const secretPassphrase = await getSecretPassphrase(password); // Retrieve the hashed password from the database

  const encryptedKey = CryptoJS.AES.encrypt(privateKey, secretPassphrase).toString();
  return encryptedKey;
};


const decryptPrivateKey = (encryptedKey: string, password: string): string => {
  const secretPassphrase = getSecretPassphrase(password); // Retrieve the hashed password from the database

  const bytes = CryptoJS.AES.decrypt(encryptedKey, secretPassphrase);
  return bytes.toString(CryptoJS.enc.Utf8);
};

const storeEncryptedKey = (encryptedKey: string): void => {
  localStorage.setItem(ENCRYPTED_KEY_STORAGE, encryptedKey);
};

const getStoredEncryptedKey = (): string | null => {
  return localStorage.getItem(ENCRYPTED_KEY_STORAGE);
};

const signTransaction = async (tx: any, password: string): Promise<any> => {
  const encryptedKey = getStoredEncryptedKey();
  if (!encryptedKey) {
    throw new Error('No wallet connected');
  }

  const privateKey = decryptPrivateKey(encryptedKey, password);
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  const signedTx = await account.signTransaction(tx);
  return web3.eth.sendSignedTransaction(signedTx.rawTransaction);
};

const getSecretPassphrase = async (password: string): Promise<string> => {
  const hash = await hashPassword(password);
  // Simulate checking the hash against stored database value; replace with actual database query
  const verify = true;
  return verify ? hash : Promise.reject(new Error('Invalid password'));
};


const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(PASSWORD_SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export {
  createWallet,
  connectWallet,
  storeEncryptedKey,
  getStoredEncryptedKey,
  signTransaction
};

