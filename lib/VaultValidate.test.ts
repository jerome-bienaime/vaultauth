// VaultValidate.test.ts

import type ShuffleArray from './ShuffleArray'
import type VaultInput from './VaultInput'
import VaultValidate from './VaultValidate'

test('should check vaultPass data contained in shuffleArray', () => {
  const shuffleArray: ShuffleArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  const vaultPass: VaultInput = [1, 2, 3, 4]
  const result = VaultValidate({
    shuffleArray,
    vaultPass,
  })

  expect(result).toEqual(true)
})
