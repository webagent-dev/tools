import React from 'react'
import { About, Contact, Home, Shortner, Tech,  Img, Youtube, Nav } from './files'
import { Routes, Route } from 'react-router-dom'
import { AppContainer, GlobalStyle } from './app.style'
function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </AppContainer>
  )
}

export default App