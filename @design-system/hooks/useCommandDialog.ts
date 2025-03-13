"use client"

import { useContext } from "react"
import CommandDialogContext, {
  CommandDialogContextProps,
} from "../commandDialog/context/CommandDialogContext"

const useCommandDialog = (): CommandDialogContextProps => {
  const context = useContext(CommandDialogContext)
  if (!context) {
    throw new Error(
      "useCommandDialog must be used within a CommandDialogProvider",
    )
  }
  return context
}

export default useCommandDialog
