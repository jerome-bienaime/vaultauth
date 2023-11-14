# Vault Auth Component

[![publish](https://github.com/jerome-bienaime/vaultauth/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/jerome-bienaime/vaultauth/actions/workflows/npm-publish.yml)

Vault Auth Component is a library for dealing with
vault-fashioned authentication

## Installation

Use a nodejs package manager to install Vault Auth Component.

```bash
# npm
npm i vault-auth-component

# yarn
yarn add vault-auth-component

# pnpm
pnpm add vault-auth-component
```

## Usage

### as a React component

```typescript
/** @jsxImportSource theme-ui */
// my-component.tsx|jsx

import {
  VaultAuthComponent,
  theme
  } from "vault-auth-component";
import { ThemeUIProvider } from "theme-ui";

export default function MyComponent() {
  // handle click each case
  function click(value: Case) {
    console.log(value)
  }
  // Keypad data coming from external ressource
  const shuffleArray = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
  ]

  // User vault pass
  const vaultPass = [1,5,7,9]

  // Use theme-ui under the hood
  return <ThemeUIProvider theme={theme}>
  <VaultAuthComponent
    shuffleArray={shuffleArray}
    onCaseClick={click}
    vaultPass={vaultPass}
  />
  </ThemeUIProvider>
}
```

| args          | status    | description                                 |
| ------------- | --------- | ------------------------------------------- |
| shuffleArray  | mandatory | visual keypad                               |
| vaultPass     | mandatory | user password                               |
| onCaseClick   | optional  | triggered when user click a Case            |
| onDeleteClick | optional  | triggered when user click the Delete Button |

### as a library

```typescript
import { lib } from 'vault-auth-component'

const {
  ShuffleArraySchema,
  ValueInputSchema,
  VaultValidate,
} = lib

/* shuffleArray data validation */
const shuffleArray = ShuffleArraySchema.safeParse(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
)
if (!shuffleArray.success) {
  // throw error
  console.error(shuffleArray.error)
}
// shuffleArray is validated, do anything with it

/* ValueInputSchema data validation */
const valueInput = ValueInputSchema.safeParse([
  1, 2, 3, 4,
])
if (!valueInput.success) {
  //throw error
  console.error(valueInput.error)
}
// valueInput is validated, do anything with it

/* Is vaultPass contained in shuffleArray */
const contained = VaultValidate({
  shuffleArray,
  vaultPass: valueInput,
})
if (!contained) {
  //throw error
  console.error(
    'vaultPass is not contained in shuffleArray'
  )
}

// everything’s fine, do anything with it
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

The repo now has an examples project powered by Storybook. Just run `npm run storybook`, `yarn storybook` or `pnpm run storybook`

## License

[MIT](https://choosealicense.com/licenses/mit/)
