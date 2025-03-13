type CommandDialogItem = {
  icon: string
  type:
    | "project"
    | "resume"
    | "blog"
    | "github"
    | "linkedin"
    | "email"
    | "external"
    | "etc"
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
