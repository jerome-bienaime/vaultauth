import React from 'react'
import { Case } from '../../lib'
import KeyboardEventHandler from 'react-keyboard-event-handler'

interface KeyboardHandlerProps {
  allowedKeys: Case[]
  handleKeyEvent: (key: string) => any
  deleteKeyEvent: () => any
}

export default function KeyboardHandler(
  props: KeyboardHandlerProps
) {
  return (
    <>
      <KeyboardEventHandler
        handleKeys={['del', 'backspace']}
        onKeyEvent={(key, e) =>
          props.deleteKeyEvent()
        }
      />
      <KeyboardEventHandler
        handleKeys={props.allowedKeys as string[]}
        onKeyEvent={(key, e) =>
          props.handleKeyEvent(key)
        }
      />
    </>
  )
}
