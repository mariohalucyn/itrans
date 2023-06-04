import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header'
import { ThemeProvider } from 'styled-components'
import { theme } from './assets/themes/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  </React.StrictMode>
)
