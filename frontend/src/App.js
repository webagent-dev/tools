import React, { useState, useEffect }  from 'react'
import { About, Contact, Home, Shortner, Tech,  Img, Youtube, Nav, Main, bg, Mainnav } from './files'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AppContainer, GlobalStyle, NavWrapper } from './app.style'
function App() {
  const [mainNav, setMainNav ] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      setMainNav(true)
    } else {
      setMainNav(false)
    }
      
  }, [location])
  return (
    <AppContainer bg={bg}>
      <GlobalStyle />
      <NavWrapper>
        <Nav />
        { !mainNav && <Mainnav />}
      </NavWrapper>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/image_compressor' element={<Img /> } />
        <Route  path='/url_shortner' element={<Shortner /> }/>
        <Route   path='/youtube_downloader' element={<Youtube /> }/>
        <Route  path='/about_me' element={<About /> } />
        <Route  path='/contact_me' element={<Contact /> }/>
      </Routes>
    </AppContainer>
  )
}

export default App