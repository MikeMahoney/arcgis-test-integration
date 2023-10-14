import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

export const defaultTheme = {
  colors: {
    lightGrey: '#f5f7fa',
    grey: '#e1e1e1',
    darkGrey: '#4e4e4e',
    blueGrey: '#c4d3e2',
    veryLightBlue: '#f2f7ff',
    lightBlue: '#a0c1f5',
    darkBlue: '#76a8f4',
    orange: '#f79b55',
    lightOrange: '#fff9f5',
    purple: '#c7b7ff',
    lightPurple: '#f9f7ff',
    yellow: '#fed55c',
    lightYellow: '#fdf9ef',
    oliveGreen: '#556B2F',
    darkSeaGreen: '#8FBC8F'
  },
  fontSize: {
    title: '28px',
    subTitle: '18px',
    default: '14px'
  }
}

interface ITheme {
  children: ReactNode
}

const Theme: React.FC<ITheme> = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}

export default Theme
