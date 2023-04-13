import { NodeNextRequest } from 'next/dist/server/base-http/node'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Markdown } from 'components/Markdown'
import { useRouter } from 'next/router'
import { styled } from 'stitches.config'

const Video = styled('div', {
  '.video': {
    '&-single': {
      marginTop: '1em',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      height: '48rem',
      '@mobile': {
        paddingBottom: '1em',
        height: '64rem',
      },
      '&:hover': {
        figcaption: {
          opacity: '1',
        },
      },
      '&.visible': {
        position: 'fixed',
        top: '0', left: '0',
        width: '100%',
        height: '100vh',
        zIndex: '1000',
        marginTop: '0',
        background: 'black',
        figure: {
          display: 'none',
        },
        iframe: {
          display: 'block',
        },
        video: {
          display: 'block',
          objectFit: 'cover',
          width: 'auto',
          width: '100%',
          height: '100%',
        },
        '.video_close': {
          display: 'block',
          position: 'absolute',
          top: '.5em', right: '1em',
          fontSize: '$sans3',
          color: 'white',
          zIndex: '100',
          '@mobile': {
            fontSize: '$sans5',
          },
          '&:hover': {
            cursor: 'pointer',
          },
        },
        figcaption: {
          marginBottom: '0',
          top: '0',
          display: 'none',
        },
        '.controls': {
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '$sans3',
          color: 'white',
          '&:hover': {
            cursor: 'pointer',
          },
          '@mobile': {
            fontSize: '$sans5',
          },
        },
        '.controls_extra': {
          display: 'block',
          position: 'absolute',
          top: '.5em', left: '1.5em',
          fontSize: '$sans3',
          color: 'white',
          '@mobile': {
            fontSize: '$sans5',
            top: '.5em', left: '.75em',
          },
          
          span: {
            display: 'inline-block',
          },
          '.info': {
            marginLeft: '1em',
            '&:hover': {
              cursor: 'pointer',
            },
          },
          '.timecode': {
            fontVariantNumeric: 'tabular-nums',
          },
        },
        '&:hover': {
          '.controls, .video_close, .controls_extra': {
            opacity: '1',
          },
        },
      },
      video: {
        width: '100%',
        display: 'none',
        '&:hover': {
          '.video_close': {
            opacity: '1',
          },
        },
      },
    },
  },
  '.controls, .video_close, .controls_extra': {
    opacity: '0',
    transition: 'opacity .35s ease-in-out',
    position: 'absolute',
  },
  figure: {
    width: '100%',
    backgroundPosition: 'center',
    borderRadius: '.5em',
    position: 'relative',
    objectFit: 'cover',
    flex: '1',
    '@mobile': {
      borderRadius: '1em',
    },
    '&:hover': {
      filter: 'blur(10px)',
      cursor: 'pointer',
    },
    
  },
  figcaption: {
    position: 'absolute',
    top: '.5em',
    bottom: '.5em',
    left: '50%',
    width: 'calc(100% - 1em)',
    transform: 'translateX(-50%)',
    fontSize: '$sans3',
    fontFamily: '$sans',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: 'white',
    opacity: '0',
    transition: 'opacity .35s ease-in-out',
    marginBottom: 'var(--space-1)',
    pointerEvents: 'none',
    '@mobile': {
      opacity: '1',
      fontSize: '$sans4',
      top: '1em',
      bottom: '1em',
    },
    span: {
      // display: 'block',
      '&.artist': {
        '&:first-of-type:after': {
          content: ', ',
        },
      },
      '&.video-single-title': {
        textAlign: 'center',
        maxWidth: '60%',
        margin: '0 auto',
        '@mobile': {
          maxWidth: '80%',
        },
        p: {
          fontSize: '$sans3',
          letterSpacing: '0',
          '@mobile': {
            fontSize: '$sans4',
          },
        },
      },
      '&.video-single-footer': {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        textAlign: 'center',
      },
    },
  },
  iframe: {
    width: '100%',
    height: '100vh',
    position: 'relative',
    zIndex: '40',
    display: 'none',
  },
  '.info-pane': {
    position: 'fixed',
    width: '35%',
    height: '100vh',
    overflowY: 'auto',
    padding: '1em',
    top: '0',
    right: '0',
    background: 'white',
    zIndex: '1000',
    transition: 'transform .5s ease-in-out',
    '@mobile': {
      width: '100%',
      padding: '2em',
    },
    '&:not(.visible)': {
      transform: 'translateX(100%)',
    },
    '.title': {
      fontSize: '$sans1',
      lineHeight: '$sans1',
      letterSpacing: '-0.02em',
      display: 'block',
      textAlign: 'center',
      '@mobile': {
        fontSize: '$sans5',
        lineHeight: '$sans5',
        maxWidth: '100%',
        paddingTop: '0',
      },
    },
    '.close': {
      fontSize: '$sans1',
      lineHeight: '$sans1',
      letterSpacing: '-0.02em',
      position: 'absolute',
      marginTop: '-1.2em',
      '@mobile': {
        fontSize: '$sans5',
        lineHeight: '$sans5',
        maxWidth: '100%',
        marginTop: '-1.1em',
      },
      '&:hover': {
        color: '$lightgrey',
        cursor: 'pointer',
      },
    },
    p: {
      fontSize: '$sans1',
      lineHeight: '$sans1',
      letterSpacing: '-0.02em',
      '@mobile': {
        fontSize: '$sans5',
        lineHeight: '$sans5',
      },
    },
    h2: {
      fontSize: '$sans1',
      lineHeight: '$sans1',
      letterSpacing: '-0.02em',
      padding: '1.2em 0 1.2em 0',
      maxWidth: '80%',
      margin: '0 auto',
      '@mobile': {
        fontSize: '$sans5',
        lineHeight: '$sans5',
        maxWidth: '100%',
      },
    },
    ul: {
      margin: '1.2em 1em 1.2em 4em',
      li: {
        fontSize: '$sans1',
        letterSpacing: '-0.02em',
        '@mobile': {
          fontSize: '$sans5',
          lineHeight: '$sans5',
        },
      },
    },
  },
  // '&:not(.visible)': {
  //   transform: 'translateX(110%)',
  // },
})

export function VideoItem({ id, mykey, title, video, artists, placeholder, context, description, embed}) {
  const router = useRouter()
  const people = artists.data
  const isVisible = router.query.slug === id
  const [isActive, setIsActive] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  function toggleVideo() {
    setIsActive(current => !current);

    const iframe = document.querySelector('iframe');
    const video = document.querySelector('video');
    if (iframe) {
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }
    if (video) {
      video.pause();
    }
  }

  function toggleInfo() {
    setIsShown(current => !current);
  }

  function timeStr(time) {
    if (!time || time === Infinity)
      return "00<span class='none'>:</span>00";
    var min = Math.floor(time / 60);
    var sec = Math.floor(time % 60);

    if (sec < 10) sec = "0" + sec;
    if (min < 10) min = "0" + min;

    return [min, sec].join("<span class='none'>:</span>");
  }

  function videoControls() {
    setIsPlaying(current => !current);
    const video = document.querySelector('video');
    const timecode = document.querySelector('.timecode');

    video.ontimeupdate = function () {
      timecode.innerHTML = timeStr(Math.floor(video.currentTime)) + "/" + timeStr(Math.floor(video.duration));
    };

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  }

  return (
    
    <Video>
      <div className={isActive ? 'visible video-single' : 'video-single'} mykey={id}>
        <figure onClick={() => toggleVideo()} style={{ backgroundImage: `url(${placeholder.url})`, backgroundSize: 'cover', }}>
        </figure>
        <figcaption>
          <span className="video-single-title"><Markdown>{title}</Markdown></span>
          <span className="video-single-footer">
            <span>
              {artists &&
                artists.data.map((artist) => (
                  <span key={artist.attributes.firstName} className="artist">{artist.attributes.firstName} {artist.attributes.lastName}</span>
                ))
              }
            </span>
            <span>{context}</span>
          </span>
        </figcaption>
        {video &&
          <video className="video" src={video.url}></video>
        }
        <span className="controls_extra">
          <span className="timecode">00:00/00:00</span> <span className="info" onClick={() => toggleInfo()}>Info</span>
        </span>
        
        <span className="controls playButton" onClick={() => videoControls()}>{isPlaying ? 'Pause' : 'Play'}</span>
        <span className="video_close" onClick={() => toggleVideo()}>Close</span>

        <div className={isShown ? 'info-pane visible' : 'info-pane'}>
          <span className="title">Video</span> <span className="close" onClick={() => toggleInfo()}>Close</span>
          <h2>{title}</h2>
          <Markdown>{description}</Markdown>
        </div>
      </div>
    </Video>
    
  )
}