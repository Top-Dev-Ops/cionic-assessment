import { useContext } from 'react'
import Image from 'next/image'
import Control from '../components/control'
import { DataContext } from "../context/context"

export default function Home() {
  const {
    data: { color, leg, upperLeg, lowerLeg },
    message: { status, message },
    updateData,
    submitData
  } = useContext(DataContext)

  return (
    <div className="w-full md:w-[38rem] bg-cyan-50 p-2">
      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-gray-700">
        <div className="flex flex-col">
          <h1 className="bg-black text-white text-center py-2">
            1. Select your color:
          </h1>
          <div className="flex p-2">
            <Control
              active={color === 'Graphite'}
              element={<div className={`bg-gray-700 rounded-full ${color === 'Graphite' ? 'w-12 h-12 ease-linear duration-300' : 'w-6 h-6'}`} />}
              label="Graphite"
              onClick={() => updateData('color', 'Graphite')}
            />
            <Control
              active={color === 'Blue'}
              element={<div className={`bg-blue-700 rounded-full ${color === 'Blue' ? 'w-12 h-12 ease-linear duration-300' : 'w-6 h-6'}`} />}
              label="Blue"
              onClick={() => updateData('color', 'Blue')}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="bg-black text-white text-center py-2">
            2. Select which leg:
          </h1>
          <div className="flex p-2">
            <Control
              active={leg === 'Left'}
              element={(
                <div className={`rounded-full w-12 h-12 text-3xl font-semibold inline-flex justify-center items-center ${leg === 'Left' ? 'border border-gray-700 ease-linear duration-300' : ''}`}>
                  L
                </div>
              )}
              label="Left"
              onClick={() => updateData('leg', 'Left')}
            />
            <Control
              active={leg === 'Right'}
              element={(
                <div className={`rounded-full w-12 h-12 text-3xl font-semibold inline-flex justify-center items-center ${leg === 'Right' ? 'border border-gray-700 ease-linear duration-300' : ''}`}>
                  R
                </div>
              )}
              label="Right"
              onClick={() => updateData('leg', 'Right')}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="bg-black text-white text-center py-2">
            3. Input your size:
          </h1>
          <div className="text-center my-4 p-2">
            <label htmlFor="upperLeg" className="text-sm">Upper Leg (inches)</label>
            <input
              id="upperLeg"
              type="number"
              step="0.01"
              min="0"
              max="60"
              placeholder="inches"
              value={upperLeg}
              onChange={e => updateData('upperLeg', e.target.value)}
              className="p-2 text-center border border-gray-300 w-full my-1"
            />
            <label htmlFor="lowerLeg" className="text-sm">Lower Leg (inches)</label>
            <input
              id="lowerLeg"
              type="number"
              step="0.01"
              min="0"
              max="60"
              placeholder="inches"
              value={lowerLeg}
              onChange={e => updateData('lowerLeg', e.target.value)}
              className="p-2 text-center border border-gray-300 w-full my-1"
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          className="bg-yellow-200 py-2 px-8 text-black font-bold hover:opacity-80"
          onClick={submitData}
        >
          Add to Cart
        </button>
        {status && (
          <div className={`flex justify-center items-center gap-2 font-semibold text-sm mt-2 ${status === 200 ? 'text-green-700' : 'text-red-700'}`}>
            {status === 200 ? (
              <Image
                width={18}
                height={18}
                src="/success.svg"
              />
            ) : (
              <Image
                width={18}
                height={18}
                src="/error.svg"
              />
            )}
            {message}
          </div>
        )}
      </div>
    </div>
  )
}
