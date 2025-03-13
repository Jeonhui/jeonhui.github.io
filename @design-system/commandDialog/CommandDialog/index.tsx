"use client"

import React from "react"
import { Command } from "cmdk"
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog"
import { clsx } from "clsx"
import * as styles from "./styles.css"
import SearchIcon from "../../assets/icon/SearchIcon"
import CommandDialogData from "../CommandDialogData"
import { useRouter } from "next/navigation"

type CommandDialogProps = {
  data: CommandDialogData
  open: boolean
  show?: boolean
  onOpenChange: (open: boolean) => void
}

const CommandDialog = ({
  data,
  open,
  show,
  onOpenChange,
}: CommandDialogProps) => {
  const router = useRouter()

  const itemOnClickHandler = (link: string) => {
    router.push(link)
  }

  return (
    <Command.Dialog
      contentClassName={clsx(styles.commandDialog, {
        [styles.commandDialogInvisible]: (show === undefined && !open) || !show,
        [styles.commandDialogVisible]: (show === undefined && open) || show,
      })}
      overlayClassName={clsx(styles.commandDialogOverlay, {
        [styles.commandDialogOverlayInvisible]:
          (show === undefined && !open) || !show,
        [styles.commandDialogOverlayVisible]:
          (show === undefined && open) || show,
      })}
      open={open}
      onOpenChange={onOpenChange}
    >
      {/*"icon": "",*/}
      {/*"tag": "",*/}
      {/*"link": "/application/trigger-math",*/}
      {/*"keywords": []*/}
      <DialogTitle hidden={true} />
      <DialogDescription hidden={true} />
      <div cmdk-input-container="true">
        <SearchIcon cmdk-input-icon="true" />
        <Command.Input placeholder={"검색"} />
      </div>
      <div cmdk-result="true">
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          {data.groups.map((group, idx) => (
            <Command.Group key={idx} heading={group.header}>
              {group.items.map((item, idx) => (
                <Command.Item
                  key={idx}
                  keywords={item.keywords}
                  onSelect={() => item.link && itemOnClickHandler(item.link)}
                >
                  {item.name}
                </Command.Item>
              ))}
            </Command.Group>
          ))}
        </Command.List>
      </div>
    </Command.Dialog>
  )
}

export default CommandDialog
