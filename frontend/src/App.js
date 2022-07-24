import React from 'react'
import { About, Contact, Home, Shortner, Tech,  Img, Youtube, Nav, Main, bg } from './files'
import { Routes, Route } from 'react-router-dom'
import { AppContainer, GlobalStyle } from './app.style'
function App() {
  return (
    <AppContainer bg={bg}>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
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