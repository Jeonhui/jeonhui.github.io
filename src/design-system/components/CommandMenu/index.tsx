"use client"
import { Command } from 'cmdk'
import * as styles from './styles.css'

const CommandMenu = () => {
    return (
        <Command label="Command Menu">
            <Command.Input/>
            <Command.List className={styles.input}>
                <Command.Empty>No results found.</Command.Empty>
                <Command.Group heading="Letters">
                    <Command.Item>a0</Command.Item>
                    <Command.Item>b</Command.Item>
                    <Command.Separator />
                    <Command.Item>c</Command.Item>
                </Command.Group>
                <Command.Item>Apple</Command.Item>
            </Command.List>
        </Command>
    )
}

export default CommandMenu