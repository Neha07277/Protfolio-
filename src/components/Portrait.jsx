export default function Portrait({ className = '', alt = 'Portrait of Neha Pal', imgClassName = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 
        PORTRAIT — drop the real photo here:
        File:                    public/headshot.jpg  (this component loads /headshot.jpg)
        Recommended export:      3:4 portrait crop, minimum 800px tall
      */}
      <img
        src="/headshot.jpg"
        alt={alt}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  )
}