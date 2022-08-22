import React from 'react'
import styles from './styles.module.css'

export const TransparentCanvas = ({
  elementRef,
  rColor,
  gColor,
  bColor,
  width,
  height,
  onMouse,
  leaveMouse,
  onTouch,
  className
}) => {
  const canvasRef = React.createRef(null)

  React.useEffect(() => {
    if (canvasRef.current && elementRef.current && elementRef) {
      const interval = setInterval(() => {
        const ctx = canvasRef?.current?.getContext('2d')
        ctx?.drawImage(
          elementRef.current,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        )
        let frame =
          ctx &&
          ctx.getImageData(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          )
        let data = frame && frame.data.length / 4
        for (let i = 0; i < data; i++) {
          let r = frame.data[i * 4 + 0]
          let g = frame.data[i * 4 + 1]
          let b = frame.data[i * 4 + 2]
          if (g > gColor && r < rColor) frame.data[i * 4 + 3] = 0
        }
        ctx && ctx.putImageData(frame, 0, 0)
      }, 10)
      return () => clearInterval(interval)
    }
  })

  return (
    <canvas
      onMouseOver={
        onMouse ? elementRef.current && elementRef.current.pause() : null
      }
      onMouseOut={
        leaveMouse ? elementRef.current && elementRef.current.play() : null
      }
      onClick={onTouch ? onTouch : null}
      ref={canvasRef}
      width={width}
      height={height}
      className={className ? className : ''}
    />
  )
}
