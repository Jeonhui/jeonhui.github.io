import type { SimpleIcon } from "simple-icons"

type Props = { icon: SimpleIcon; className?: string; title?: string }

// Monochrome brand mark from simple-icons; colour comes from currentColor.
const BrandIcon = ({ icon, className = "h-3.5 w-3.5", title }: Props) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    role={title ? "img" : undefined}
    aria-hidden={title ? undefined : true}
    aria-label={title}
  >
    <path d={icon.path} />
  </svg>
)

export default BrandIcon
