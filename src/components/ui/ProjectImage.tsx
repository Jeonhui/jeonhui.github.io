type Props = { src: string; alt: string; sizes: string; className?: string }

// Project screenshots ship at 700, 1000 and 1400px wide (same aspect, 1400×669 at full size).
// The browser picks the smaller file on phones and 1x screens; width/height reserve the space.
const ProjectImage = ({ src, alt, sizes, className = "" }: Props) => {
  const at = (w: number) => src.replace(/\.webp$/, `-${w}.webp`)
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      srcSet={`${at(700)} 700w, ${at(1000)} 1000w, ${src} 1400w`}
      sizes={sizes}
      width={1400}
      height={669}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`h-auto w-full ${className}`}
    />
  )
}

export default ProjectImage
