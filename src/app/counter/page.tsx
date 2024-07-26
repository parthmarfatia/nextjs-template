'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../../redux/reducer/counterSlice';
import { RootState } from '../../redux/store';
import PokemonList from './PokemonList';

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div className="flex flex-col items-center mt-4">
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          className="border border-gray-300 p-2 rounded mb-2"
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(incrementByAmount(incrementAmount))}
        >
          Increment by Amount
        </button>
      </div>
      <PokemonList />
    </div>
  );
};

export default Counter;
