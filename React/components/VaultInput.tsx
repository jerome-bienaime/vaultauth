/** @jsxImportSource theme-ui */
import { Case, VaultInput } from '../../lib'
import {
  Box,
  Button,
  Container,
  Grid,
  Input,
} from 'theme-ui'
import { FiDelete } from 'react-icons/fi'

interface VaultInputProps {
  guess: VaultInput
  current?: Case[]
  onCancelClick?: () => any
}

export default function VaultInputComponent(
  props: VaultInputProps
) {
  function handleDeleteClick() {
    if (props.onCancelClick) {
      props.onCancelClick()
    }
  }
  return (
    <Container>
      <Grid
        className='vaultInput-container'
        columns={5}
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
                  disabled
                  value={
                    props.current &&
                    props.current[index]
                      ? props.current[index]
                      : ''
                  }
                  name={`guess-${index}`}
                />
              </Box>
            )
          })}
        <Button
          type='button'
          variant='secondary'
          onClick={handleDeleteClick}
        >
          <FiDelete />
        </Button>
      </Grid>
    </Container>
  )
}
