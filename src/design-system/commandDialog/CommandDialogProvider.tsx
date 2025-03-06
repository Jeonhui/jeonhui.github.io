"use client"

import React, { ReactNode, useEffect, useRef, useState } from "react"
import CommandDialogContext from "./context/CommandDialogContext"
import CommandDialog from "./CommandDialog"
import CommandDialogData from "./CommandDialogData"

type CommandDialogProviderProps = {
  children: ReactNode
  data: CommandDialogData
}

const CommandDialogProvider = ({
  children,
  data,
}: CommandDialogProviderProps) => {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  const isListenerRegistered = useRef(false)

  const onOpenChangeHandler = (value: boolean | null = null) => {
    setOpen((prev) => {
      const next = value ?? !prev
      if (next) {
        setTimeout(() => setShow(true), 10)
      } else {
        setShow(false)
        setTimeout(() => setOpen(false), 300)
      }
      return true
    })
  }

  useEffect(() => {
    const down = (keyboardEvent: KeyboardEvent) => {
      if (
        keyboardEvent.key === "k" &&
        (keyboardEvent.metaKey || keyboardEvent.ctrlKey)
      ) {
        keyboardEvent.preventDefault()
        onOpenChangeHandler()
      }
    }

    if (!isListenerRegistered.current) {
      document.addEventListener("keydown", down)
      isListenerRegistered.current = true
    }

    return () => {
      document.removeEventListener("keydown", down)
      isListenerRegistered.current = false
    }
  }, [])

  return (
    <CommandDialogContext.Provider
      value={{
        openCommandDialog: () => onOpenChangeHandler(true),
      }}
    >
      {children}
      <CommandDialog
        data={data}
        open={open}
        show={show}
        onOpenChange={onOpenChangeHandler}
      />
    </CommandDialogContext.Provider>
  )
}

export default CommandDialogProvider
