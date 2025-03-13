import { createContext } from "react"

type CommandDialogContextProps = {
  openCommandDialog: () => void
}

const CommandDialogContext = createContext<
  CommandDialogContextProps | undefined
>(undefined)

export type { CommandDialogContextProps }
export default CommandDialogContext
