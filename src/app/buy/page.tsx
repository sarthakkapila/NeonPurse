"use client"
import Image from 'next/image'
import { useState } from 'react'

export default function SwapInterface() {
  const [isMarket, setIsMarket] = useState(true)
  const [payAmount, setPayAmount] = useState('0.0')
  const [receiveAmount, setReceiveAmount] = useState('0.0')

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Swap</h2>
        <span className="text-gray-400 text-sm">Not connected</span>
      </div>

      <div className="flex mb-4">
        <button
          className={`flex-1 py-2 rounded-l-md ${isMarket ? 'bg-indigo-600' : 'bg-gray-700'}`}
          onClick={() => setIsMarket(true)}
        >
          Market
        </button>
        <button
          className={`flex-1 py-2 rounded-r-md ${!isMarket ? 'bg-indigo-600' : 'bg-gray-700'}`}
          onClick={() => setIsMarket(false)}
        >
          Limit
        </button>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 mb-4">
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span>Pay</span>
            <span className="text-sm text-gray-400">Balance: 0.00</span>
          </div>
          <input
            type="number"
            className="w-full bg-transparent text-right"
            value={payAmount}
            onChange={(e) => setPayAmount(e.target.value)}
          />
        </div>
        <div className="flex justify-center my-2">
          <button className="text-2xl">↑↓</button>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span>Receive</span>
            <span className="text-sm text-gray-400">Balance: 0.00</span>
          </div>
          <div className="flex">
            <input
              type="number"
              className="flex-grow bg-transparent text-right"
              value={receiveAmount}
              onChange={(e) => setReceiveAmount(e.target.value)}
            />
            <select className="bg-gray-700 ml-2 px-2 rounded">
              <option>WMATIC</option>
            </select>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-400 mb-4">
        Slippage: 0.3%
      </div>

      <button className="w-full bg-indigo-600 py-3 rounded-md mb-4">
        Connect Wallet
      </button>

      <div className="text-sm">
        <div className="flex justify-between mb-1">
          <span>Min. Receive:</span>
          <span>0 WMATIC</span>
        </div>
        <div className="flex justify-between mb-1">
          <span>Price Impact:</span>
          <span>0%</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Route:</span>
          <span>-</span>
        </div>
      </div>

      <div className="flex items-center bg-gray-800 p-2 rounded-md">
        <div className="w-8 h-8 bg-blue-500 rounded-full mr-2"></div>
        <div className="flex-grow">
          <div className="font-bold">WMATIC</div>
          <div className="text-sm text-gray-400">W-Matic</div>
        </div>
        <div className="text-right">
          <div>Price 0.51761</div>
          <div className="text-green-500 text-sm">24h +2.38%</div>
        </div>
      </div>
    </div>
  )
}
