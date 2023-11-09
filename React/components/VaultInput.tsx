import React from 'react'
import { VaultInput } from '../../lib'

interface VaultInputProps {
  guess: VaultInput
}
export default function VaultInput(
  props: VaultInputProps
) {
  return (
    <div className='vaultInput-container'>
      {Array(props.guess.length)
        .fill(0)
        .map((_: number, index: number) => {
          return (
            <div
              key={index}
              className='vaultInput-item'
            >
              <input
                type='text'
                role="input"
                className="vaultInput-input"
                name={`guess-${index}`}
              />
            </div>
          )
        })}
    </div>
  )
}
