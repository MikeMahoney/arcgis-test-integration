import React from 'react'

interface IStopwatchIcon {
  className?: string
}

export const StopwatchIcon: React.FC<IStopwatchIcon> = ({ className = '' }) => {
  return (
    <svg
      width='18'
      height='20'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g stroke='#242424' strokeWidth='.5' fill='none' fillRule='evenodd'>
        <g strokeLinecap='round' strokeLinejoin='round'>
          <path d='m15.763 3.655-1.357 1.357.7.7 1.357-1.357zM2.466 3.648l-.7.7 1.357 1.357.7-.7z' />
          <path d='M9.111 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z' />
          <path d='m6.111 9 3 3 4-4m-10 3h-2m16 0h-2m-6-6V3m0 16v-2' />
        </g>
        <path strokeLinecap='round' d='M6.611.5h5' />
        <path strokeLinecap='square' d='M9.111 2.4V1' />
      </g>
    </svg>
  )
}