import {
  VaultInput,
  ShuffleArray,
  Case,
} from '../../lib'
import { ComponentConfig } from '../config'

export interface VaultAuthComponentProps {
  shuffleArray: ShuffleArray
  onCaseClick?: (value: Case) => any
  onDeleteClick?: () => any
  onSubmit?: (value: Case[]) => any
  vaultPass: VaultInput
  config?: ComponentConfig
}