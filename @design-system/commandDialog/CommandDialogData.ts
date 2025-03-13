type CommandDialogItem = {
  icon: string
  name: string
  tag?: string
  link?: string
  keywords?: string[]
}

type CommandDialogGroup = {
  header: string
  items: CommandDialogItem[]
}

type CommandDialogData = {
  groups: CommandDialogGroup[]
}

export default CommandDialogData
