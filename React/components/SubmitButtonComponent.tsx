import React from 'react'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import { Button } from 'theme-ui'

interface SubmitButtonComponentProps {
  onSubmitClick: (handleSubmitProps: any) => any
  component?: JSX.Element | React.ReactNode
}

export default function SubmitButtonComponent(
  props: SubmitButtonComponentProps
) {
  if (props.component == null) {
    return (
      <Button
        type='submit'
        onClick={props.onSubmitClick}
      >
        <IoArrowForwardCircleOutline />
      </Button>
    )
  }
  return (
    <div onClick={props.onSubmitClick}>
      {props.component}
    </div>
  )
}
