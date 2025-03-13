import * as styles from "./tocItemStyles.css"
import { clsx } from "clsx"

type TocItemValue = {
  id: string
  type: string
  value: string
}

type TocItemProps = {
  value: TocItemValue
  isActive: boolean
}

const TocItem = ({ value, isActive, ...props }: TocItemProps) => {
  return (
    <a
      className={clsx(styles.tocItem)}
      href={"#" + value.id}
      data-active={isActive}
      {...props}
    >
      {value.value}
    </a>
  )
}

export type { TocItemValue }

export default TocItem
