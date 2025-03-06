import React from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"

type ListProps<T> = {
  values: T[]
  list: (value: T) => React.ReactNode
  keyExtractor?: (value: T) => React.Key
}

const List = <T extends object | string>({
  values,
  list,
  keyExtractor,
  ...props
}: ListProps<T>) => {
  return (
    <ul className={clsx(styles.list)} {...props}>
      {values.map((item, idx) => (
        <li key={keyExtractor ? keyExtractor(item) : idx}>{list(item)}</li>
      ))}
    </ul>
  )
}

export default List
