import { styled } from 'stitches.config'

const Zoom = styled('div', {
  width: '100%',
  height: '100vh',
  position: 'relative',
  overflow: 'hidden',
  position: 'fixed',
  top: '0', left: '0',
  iframe: {
    position: 'absolute',
    width: '100%', 
    height: '100vh',
    top: '0', left: '0', right: '0', bottom: '0',
    overflow: 'hidden',
  }
})

export function ZoomOverlay(overlays) {
  return (
    <Zoom>
      <iframe
        allow="microphone; camera"
        src="" frameborder="0"></iframe>
    </Zoom>
  )
}