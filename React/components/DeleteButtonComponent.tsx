import React from 'react'
import { FiDelete } from 'react-icons/fi'
import { Button } from 'theme-ui'

interface DeleteButtonComponentProps {
  onDeleteClick: (handleSubmitProps: any) => any
  component?: JSX.Element | React.ReactNode
}

export default function DeleteButtonComponent(
  props: DeleteButtonComponentProps
) {
  if (props.component) {
    return (
      <div onClick={props.onDeleteClick}>
        {props.component}
      </div>
    )
  }

  return (
    <Button
      type='button'
      variant='secondary'
      onClick={props.onDeleteClick}
    >
      <FiDelete />
    </Button>
  )
}
