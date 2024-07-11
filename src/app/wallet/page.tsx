"use client"
import { useState } from 'react';
import Head from 'next/head';
import { FiSend, FiDownload, FiPlus, FiSettings, FiCopy, FiExternalLink, FiEye, FiEyeOff } from 'react-icons/fi';

export default function Home() {
  const [activeTab, setActiveTab] = useState('tokens');
  const [showBalance, setShowBalance] = useState(true);
  const [assets, setAssets] = useState([
    { name: 'Solana', symbol: 'SOL', amount: 12.5, value: 1250, change: 2.5 },
    { name: 'USD Coin', symbol: 'USDC', amount: 500, value: 500, change: 0 },
    { name: 'Serum', symbol: 'SRM', amount: 100, value: 80, change: -1.2 },
  ]);
  const [nfts, setNfts] = useState([
    { name: 'Degen Ape #1234', collection: 'Degen Ape Academy' },
    { name: 'Solana Monkey #5678', collection: 'SMB' },
  ]);

  const totalBalance = assets.reduce((sum, asset) => sum + asset.value, 0);
  const truncatedAddress = 'BgT...h7Y2';

  return (
    <div className="min-h-screen bg-black text-white flex">
      <Head>
        <title>NeonPurse-Wallet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sidebar */}
      <aside className="w-64 bg-neutral-950 p-4">
        <h1 className="text-2xl font-bold mb-8">NeonPurse</h1>
        <nav className="space-y-2">
          <button className={`w-full text-left p-2 rounded ${activeTab === 'tokens' ? 'bg-neutral-800' : 'hover:bg-neutral-800'}`} onClick={() => setActiveTab('tokens')}>Tokens</button>
          <button className={`w-full text-left p-2 rounded ${activeTab === 'nfts' ? 'bg-neutral-800' : 'hover:bg-neutral-800'}`} onClick={() => setActiveTab('nfts')}>NFTs</button>
          <button className={`w-full text-left p-2 rounded ${activeTab === 'activity' ? 'bg-neutral-800' : 'hover:bg-neutral-800'}`} onClick={() => setActiveTab('activity')}>Activity</button>
        </nav>
        <div className="mt-auto pt-4">
          <button className="w-full text-left p-2 rounded hover:bg-neutral-600 flex items-center">
            <FiSettings className="mr-2" /> Settings
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-xl font-bold">{truncatedAddress}</h2>
            <div className="flex items-center text-sm text-neutral-700">
              <button className="mr-2 hover:text-white"><FiCopy /></button>
              <button className="hover:text-white"><FiExternalLink /></button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-neutral-700 hover:bg-neutral-950 px-4 py-2 rounded-full flex items-center">
              <FiPlus className="mr-2" /> Add Funds
            </button>
            <button className="bg-neutral-800 hover:bg-neutral-950 p-2 rounded-full">
              <FiSend />
            </button>
          </div>
        </header>

        {/* Balance */}
        <div className="bg-neutral-950 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg">Total Balance</h3>
            <button onClick={() => setShowBalance(!showBalance)}>
              {showBalance ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          <p className="text-4xl font-bold">
            {showBalance ? `$${totalBalance.toFixed(2)}` : '••••••'}
          </p>
        </div>

        {/* Tokens */}
        {activeTab === 'tokens' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Tokens</h3>
            <div className="space-y-4">
              {assets.map((asset) => (
                <div key={asset.symbol} className="flex justify-between items-center bg-neutral-950 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 mr-4 flex items-center justify-center font-bold">
                      {asset.symbol.slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-bold">{asset.name}</p>
                      <p className="text-sm text-neutral-700">{asset.amount} {asset.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">${asset.value.toFixed(2)}</p>
                    <p className={`text-sm ${asset.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {asset.change >= 0 ? '+' : ''}{asset.change}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NFTs */}
        {activeTab === 'nfts' && (
          <div>
            <h3 className="text-xl font-bold mb-4">NFTs</h3>
            <div className="grid grid-cols-2 gap-4">
              {nfts.map((nft, index) => (
                <div key={index} className="bg-neutral-950 p-4 rounded-lg">
                  <div className="bg-neutral-800 h-40 rounded-lg mb-2"></div>
                  <p className="font-bold">{nft.name}</p>
                  <p className="text-sm text-neutral-700">{nft.collection}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Activity */}
        {activeTab === 'activity' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
            <div className="bg-neutral-950 rounded-lg p-4">
              <p className="text-center text-neutral-300">No recent activity</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

