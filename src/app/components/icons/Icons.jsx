/* eslint-disable react/prop-types */
export const MapPin = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-map-pin ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
      <path d='M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z' />
    </svg>
  )
}

export const ChevronDown = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-chevron-compact-down ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M4 11l8 3l8 -3' />
    </svg>
  )
}

export const Close = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-x ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M18 6l-12 12' /><path d='M6 6l12 12' />
    </svg>
  )
}

export const ChevronPrev = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-chevron-left ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M15 6l-6 6l6 6' />
    </svg>
  )
}

export const Apple = () => {
  return (
    <svg
      version='1.1'
      height='20'
      width='20'
      id='Capa_1'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      x='0px'
      y='0px'
      viewBox='0 0 22.773 22.773'
      style={{ enableBackground: 'new 0 0 22.773 22.773' }}
      xmlSpace='preserve'
    >
      <g>
        <g>
          <path d='M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z' />
          <path d='M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z' />
        </g>
      </g>
    </svg>
  )
}

export const AtSign = ({ className }) => {
  return (
    <svg viewBox='0 0 32 32' className={className}>
      <g id='Layer_3' data-name='Layer 3'>
        <path d='m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z' />
      </g>
    </svg>
  )
}

// eslint-disable-next-line react/prop-types
export const Calendar = ({ width, height }) => {
  return (
    <svg
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width={width} height={height}
    >
      <image x='0px' y='0px' width={width} height={height} xlinkHref='data:img/png;base64,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' />
    </svg>
  )
}

export const Check = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-check ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M5 12l5 5l10 -10' />
    </svg>
  )
}

export const EyeOff = ({ className }) => {
  return (
    <svg viewBox='0 0 640 512' className={`w-auto h-4 ${className}`}>
      <path d='M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z' />
    </svg>
  )
}

export const EyePassword = ({ className }) => {
  return (
    <svg viewBox='0 0 576 512' height='1em' className={className}>
      <path d='M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z' />
    </svg>
  )
}

export const Google = () => {
  return (
    <svg
      version='1.1'
      width='20'
      id='Layer_1'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      x='0px'
      y='0px'
      viewBox='0 0 512 512'
      style={{ enableBackground: 'new 0 0 512 512' }}
      xmlSpace='preserve'
    >
      <path style={{ fill: '#FBBB00' }} d='M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256 c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456 C103.821,274.792,107.225,292.797,113.47,309.408z' />
      <path style={{ fill: '#518EF8' }} d='M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451 c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535 c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z' />
      <path style={{ fill: '#28B446' }} d='M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512 c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771 c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z' />
      <path style={{ fill: '#F14336' }} d='M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012 c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0 C318.115,0,375.068,22.126,419.404,58.936z' />
    </svg>
  )
}

export const Lock = () => {
  return (
    <svg height='20' viewBox='-64 0 512 512' width='20'>
      <path d='m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0' />
      <path d='m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0' />
    </svg>
  )
}

export const Lupa = ({ width, height }) => {
  return (
    <svg
      width={width} height={height}
    >
      <image x='0px' y='0px' width={width} height={height} xlinkHref='data:img/png;base64,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' />
    </svg>
  )
}

export const MailIcon = ({ className, height, width }) => {
  return (
    <svg
      className={className}
      width={width} height={height}
    >
      <image x='0px' y='0px' width={width} height={height} xlinkHref='data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAiCAMAAAAqN3oYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACBFBMVEVnueHF3P2yx+WxxuRruuJruuJgrtVgrtVnueFpueFdrdSp0vWLu93J3v7F3P3F3P3F3P3F3P3F3P2xxuTF3P3F3P2xxuSyx+XF3P3F3P2xxuSxxuTE3P3Q4/3d6f3b6f3a6P3J3/3F3P3F3P3B2PixxuRruuJqueFisNhgrtVfrtVtu+NquuJdrdSu0/ZtuuJbrdSKu920x+XK3f6v0/doueFpuuJbrNSJuty3x+WxxuTF3P3K3v6q0vVsuuKGud3I3v6s0vZsu+JpueHL3v6w1PdtuuOMu922x+XI3f5rueKr0/VqueJcrdSGudy3x+ayxuTJ3v5tu+JpueKIutyy1feNvN62yOWt0/a1x+VquuGr0vWs0vWJut2zx+W4yObJ3f5crNRarNSJvN61x+Ta5/663PVuu+OSxenH2/u0yefU5f3c6f3f6/7B3vdaq9OXx+rL3//C2fuzyOewxePU5v3c6v3b6f3i7P7A3vdcrNOUxurM3//G3f7D2/vG3P3V5f283PZaq9KTxenD2vvF2/3V5v273PVuvONlt+Fnt+BertdbrNOQxOi0yOfg6/7N4/qez+6Bw+d1ud+Dv+Ku0vTJ3v/D2vrE2/3e6v3i6/7J3v3K3v+zyObb6P3K3/3D2fra6P3J3/3F3f60yejW5v3E2/vF3P7C2fqzyefG3f3///+X3wX5AAAAJnRSTlMAAAAATvGFAw31RY7G7P78/eBxrwXa9jAv2/VbDGqboaGhoZ99II4OpTMAAAABYktHRKvJAWcoAAAAB3RJTUUH6AQaEBYPbOYpQgAAAfNJREFUOMud0flbEkEcBvChMrtP7b7sWAt3CSiD5ruWiWYUmkIlaodaWiHm0eZ0bVKhHZbdZIeaZZb+le2Ci7vMsEDvj7PP53ln30FoUR7HSvH+A8wszkdLlnI5EesytLyEz4kIK9BK20E+B2J3ONGqQ4dLj2RNXO6jGK0GsewYnyURjjuxSqD8RIUnG2K1uxURJ1BZdTIbIlSfwhoBr+10cUbicqgdGoHKMz4+A6mpPVunJ1Bf5g+YEuFcomOegHieC5gQ+4UGnEpADPr5tERwNGKaQH2wycMmyrrzQk9AbNZtoCc1tQ2YTcB7scTDIK5Ll3E6AmIV56OI4LhSl55AS9DvSyGtbifGJgRabKUBA2m7eg2bE2jvuO7TEeHGzVAG0hnuusV5NGLt7umFvtuSGbnTT8jde8mW+w8eAsiPjMZABiKKIKTrsdKjEOuTp+XqsRwNSWnI4FBcKD3Pnr94OfxKeN07AAkzIrGJJgh58/bd+w8fP8W0L/LnEIuMRsIkmS9fybfvMd2do2MSTTr7iT7jE4Zd5B8jSbJGu1XYIMjkT+P6v6JTcz1obeLkt7GDJiBPz22N1sW3iqQKmqgbqGY9Kiik/4NN4M/fGQlv2IgsmzbPDtGCRdQ33bJ1AbJYtm3fsZPOrqLddPbs3bfwf8g/WOWIQaxiD7MAAAAASUVORK5CYII=' />
    </svg>
  )
}

export const PhoneIcon = ({ height, width }) => {
  return (
    <svg
      width={width} height={height}
    >
      <image x='0px' y='0px' width={width} height={height} xlinkHref='data:img/png;base64,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' />
    </svg>
  )
}

export const PreventDental = ({ height, width }) => {
  return (
    <svg
      width={width} height={height}
      className='drop-shadow-lg'
    >
      <image x='0px' y='0px' width={width} height={height} xlinkHref='data:img/png;base64,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' />
    </svg>
  )
}

export const SearchIcon = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24' fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-search ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
      <path d='M21 21l-6 -6' />
    </svg>
  )
}

export const Star = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-star ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z' />
    </svg>
  )
}

export const UserIcon = ({ className }) => {
  return (
    <svg viewBox='0 0 448 512' className={className}>
      <path d='M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z' />
    </svg>
  )
}

export const UserPlus = ({ width, height }) => {
  return (
    <svg
      width={width} height={height}
    >
      <image x='0px' y='0px' width={width} height={height} xlinkHref='data:img/png;base64,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' />
    </svg>
  )
}

export const ChevronDownSmall = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-chevron-down ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 9l6 6l6 -6' />
    </svg>
  )
}

export const CalendarMonth = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-calendar-month ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z' />
      <path d='M16 3v4' />
      <path d='M8 3v4' />
      <path d='M4 11h16' />
      <path d='M7 14h.013' />
      <path d='M10.01 14h.005' />
      <path d='M13.01 14h.005' />
      <path d='M16.015 14h.005' />
      <path d='M13.015 17h.005' />
      <path d='M7.01 17h.005' />
      <path d='M10.01 17h.005' />
    </svg>
  )
}

export const Send = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-send-2 ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z' />
      <path d='M6.5 12h14.5' />
    </svg>
  )
}

export const UserSquare = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-user-square ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M9 10a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
      <path d='M6 21v-1a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v1' />
      <path d='M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z' />
    </svg>
  )
}

export const School = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-school ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M22 9l-10 -4l-10 4l10 4l10 -4v6' />
      <path d='M6 10.6v5.4a6 3 0 0 0 12 0v-5.4' />
    </svg>
  )
}

export const Language = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-language ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M4 5h7' />
      <path d='M9 3v2c0 4.418 -2.239 8 -5 8' />
      <path d='M5 9c0 2.144 2.952 3.908 6.7 4' />
      <path d='M12 20l4 -9l4 9' />
      <path d='M19.1 18h-6.2' />
    </svg>
  )
}

export const Share = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-share ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
      <path d='M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
      <path d='M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
      <path d='M8.7 10.7l6.6 -3.4' />
      <path d='M8.7 13.3l6.6 3.4' />
    </svg>
  )
}

export const Facebook = ({ className }) => {
  return (
    <svg viewBox='0 0 14 14' className={className}>
      <path fill='currentColor' d='M0 12.923V1.077A1.077 1.077 0 0 1 1.077 0h11.846A1.077 1.077 0 0 1 14 1.077v11.846A1.077 1.077 0 0 1 12.923 14h-3.23V8.895h.764a.657.657 0 0 0 .657-.657V7.41a.655.655 0 0 0-.657-.657h-.722V5.74c0-.905.41-.905.819-.905h.527a.592.592 0 0 0 .464-.193a.625.625 0 0 0 .194-.464v-.796a.67.67 0 0 0-.647-.69H9.854a2.498 2.498 0 0 0-2.574 2.8v1.26h-.69a.657.657 0 0 0-.667.657v.83a.657.657 0 0 0 .668.656h.689V14H1.077A1.077 1.077 0 0 1 0 12.923' />
    </svg>
  )
}

export const Instagram = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram ${className}`}
    >
      <path d='M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z' />
      <path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
      <path d='M16.5 7.5l0 .01' />
    </svg>
  )
}

export const BrandX = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-brand-x ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M4 4l11.733 16h4.267l-11.733 -16z' />
      <path d='M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772' />
    </svg>
  )
}

export const Building = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-building-skyscraper ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M3 21l18 0' />
      <path d='M5 21v-14l8 -4v18' />
      <path d='M19 21v-10l-6 -4' />
      <path d='M9 9l0 .01' />
      <path d='M9 12l0 .01' />
      <path d='M9 15l0 .01' />
      <path d='M9 18l0 .01' />
    </svg>
  )
}

export const SpeakerPhone = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-speakerphone ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M18 8a3 3 0 0 1 0 6' />
      <path d='M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5' />
      <path d='M12 8h0l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8' />
    </svg>
  )
}

export const Phone = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-phone ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2' />
    </svg>
  )
}

export const Tooth = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-dental ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 5.5c-1.074 -.586 -2.583 -1.5 -4 -1.5c-2.1 0 -4 1.247 -4 5c0 4.899 1.056 8.41 2.671 10.537c.573 .756 1.97 .521 2.567 -.236c.398 -.505 .819 -1.439 1.262 -2.801c.292 -.771 .892 -1.504 1.5 -1.5c.602 0 1.21 .737 1.5 1.5c.443 1.362 .864 2.295 1.262 2.8c.597 .759 2 .993 2.567 .237c1.615 -2.127 2.671 -5.637 2.671 -10.537c0 -3.74 -1.908 -5 -4 -5c-1.423 0 -2.92 .911 -4 1.5z' />
      <path d='M12 5.5l3 1.5' />
    </svg>
  )
}

export const IonSocialFacebook = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      className={className}
    >
      <path d='M288 192v-38.1c0-17.2 3.8-25.9 30.5-25.9H352V64h-55.9c-68.5 0-91.1 31.4-91.1 85.3V192h-45v64h45v192h83V256h56.4l7.6-64h-64z' fill='CURRENTCOLOR' />
    </svg>
  )
}

export const IonLogoInstagram = ({ className }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className={className}>
      <path fill='CURRENTCOLOR' d='M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34zm0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32' />
      <path fill='CURRENTCOLOR' d='M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28M256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112' />
    </svg>
  )
}

export const IonLogoTiktok = ({ className }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className={className}>
      <path fill='CURRENTCOLOR' d='M412.19 118.66a109.27 109.27 0 0 1-9.45-5.5a132.87 132.87 0 0 1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69c0 .52-.05 1-.08 1.56c0 .23 0 .47-.05.71v.18a70 70 0 0 1-35.22 55.56a68.8 68.8 0 0 1-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0 1 21.41 3.39l.1-83.94a153.14 153.14 0 0 0-118 34.52a161.79 161.79 0 0 0-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24c-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.53 167.53 0 0 0 115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34c7.66-.31 33.32 0 62.46-13.81c32.32-15.31 50.72-38.12 50.72-38.12a158.46 158.46 0 0 0 27.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61' />
    </svg>
  )
}

export const IonSocialYoutubeOutline = ({ className }) => {
  return (
    <svg viewBox='0 0 512 512' className={className}>
      <path d='M265 96c65.3 0 118.7 1.1 168.1 3.3h1.4c23.1 0 42 22 42 49.1v1.1l.1 1.1c2.3 34 3.4 69.3 3.4 104.9.1 35.6-1.1 70.9-3.4 104.9l-.1 1.1v1.1c0 13.8-4.7 26.6-13.4 36.1-7.8 8.6-18 13.4-28.6 13.4h-1.6c-52.9 2.5-108.8 3.8-166.4 3.8h-10.6.1-10.9c-57.8 0-113.7-1.3-166.2-3.7h-1.6c-10.6 0-20.7-4.8-28.5-13.4-8.6-9.5-13.4-22.3-13.4-36.1v-1.1l-.1-1.1c-2.4-34.1-3.5-69.4-3.3-104.7v-.2c-.1-35.3 1-70.5 3.3-104.6l.1-1.1v-1.1c0-27.2 18.8-49.3 41.9-49.3h1.4c49.5-2.3 102.9-3.3 168.2-3.3H265m0-32.2h-18c-57.6 0-114.2.8-169.6 3.3-40.8 0-73.9 36.3-73.9 81.3C1 184.4-.1 220 0 255.7c-.1 35.7.9 71.3 3.4 107 0 45 33.1 81.6 73.9 81.6 54.8 2.6 110.7 3.8 167.8 3.8h21.6c57.1 0 113-1.2 167.9-3.8 40.9 0 74-36.6 74-81.6 2.4-35.7 3.5-71.4 3.4-107.1.1-35.7-1-71.3-3.4-107.1 0-45-33.1-81.1-74-81.1C379.2 64.8 322.7 64 265 64z' fill='CURRENTCOLOR' />
      <path d='M207 353.8V157.4l145 98.2-145 98.2z' fill='CURRENTCOLOR' />
    </svg>
  )
}

export const BellIcon = ({ className }) => {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' className={`icon icon-tabler icons-tabler-filled icon-tabler-bell ${className}`}>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z' />
      <path d='M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z' />
    </svg>
  )
}

export const PhotoIcon = ({ className }) => {
  return (
    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className={`icon icon-tabler icons-tabler-outline icon-tabler-photo ${className}`}>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M15 8h.01' />
      <path d='M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z' />
      <path d='M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5' />
      <path d='M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3' />
    </svg>
  )
}

export const ImageIcon = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-photo ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M15 8h.01' />
      <path d='M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z' />
      <path d='M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5' />
      <path d='M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3' />
    </svg>
  )
}

export const SunIcon = ({ className }) => {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' className={`icon icon-tabler icons-tabler-filled icon-tabler-sun ${className}`}>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z' />
      <path d='M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z' />
      <path d='M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z' />
      <path d='M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z' />
      <path d='M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z' />
      <path d='M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z' />
      <path d='M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z' />
      <path d='M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z' />
      <path d='M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z' />
    </svg>
  )
}

export const MoonIcon = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='currentColor'
      className={`icon icon-tabler icons-tabler-filled icon-tabler-moon ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z' />
    </svg>
  )
}

export const SettingsIcon = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-settings ${className}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z' />
      <path d='M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
    </svg>
  )
}

export const Home = ({ className }) => {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' className={`icon icon-tabler icons-tabler-filled icon-tabler-home ${className}`}><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z' /></svg>
  )
}

export const SettingsFilled = ({ className }) => {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' className={`icon icon-tabler icons-tabler-filled icon-tabler-settings ${className}`}>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z' />
    </svg>
  )
}

export const PinFilled = ({ className }) => {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' className={`icon icon-tabler icons-tabler-filled icon-tabler-map-pin ${className}`}>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z' />
    </svg>
  )
}

export const PhotoFilled = ({ className }) => {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' className={`icon icon-tabler icons-tabler-filled icon-tabler-photo ${className}`}>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M8.813 11.612c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.986 4.986l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-1.292 -1.293l.292 -.293l.106 -.095c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.674 4.675a4 4 0 0 1 -3.775 3.599l-.206 .005h-12a4 4 0 0 1 -3.98 -3.603l6.687 -6.69l.106 -.095zm9.187 -9.612a4 4 0 0 1 3.995 3.8l.005 .2v9.585l-3.293 -3.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-.307 .306l-2.293 -2.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-5.307 5.306v-9.585a4 4 0 0 1 3.8 -3.995l.2 -.005h12zm-2.99 5l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z' />
    </svg>
  )
}

export const UserFilled = ({ className }) => {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' className={`icon icon-tabler icons-tabler-filled icon-tabler-user ${className}`}>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z' />
      <path d='M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z' />
    </svg>
  )
}
