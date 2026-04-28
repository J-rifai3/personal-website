import { useState } from 'react'

function ImageSlot({ src, alt, className = '', placeholderText }) {
  const [hasError, setHasError] = useState(false)

  if (!src || hasError) {
    return <div className={`image-placeholder ${className}`}>{placeholderText}</div>
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`media-image ${className}`.trim()}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  )
}

export default ImageSlot
