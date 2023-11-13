/** @jsxImportSource theme-ui */
import { VaultInput } from '../../lib'
import {
  Box,
  Container,
  Grid,
  Input,
} from 'theme-ui'

interface VaultInputProps {
  guess: VaultInput
}

export default function VaultInputComponent(
  props: VaultInputProps
) {
  return (
    <Container>
      <Grid
        className='vaultInput-container'
        columns={4}
        gap={1}
      >
        {Array(props.guess.length)
          .fill(0)
          .map((_: number, index: number) => {
            return (
              <Box
                key={index}
                className='vaultInput-item'
              >
                <Input
                  type='text'
                  role='input'
                  className='vaultInput-input'
                  name={`guess-${index}`}
                />
              </Box>
            )
          })}
      </Grid>
    </Container>
  )
}
