import { ComponentConfig } from './ComponentConfig'

export default function createConfig(
  config: ComponentConfig
) {
  return Object.assign(
    // defaultComponentConfig.ts
    {
      keypadAccess: false,
      submitButton: false,
    },
    config || {}
  )
}
