import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { User } from './components/User.jsx'
import { Image } from './components/Image.jsx'
import { Header } from './components/Header.jsx'
import { SearchBar } from './components/SearchBar.jsx'
import { HomePage } from './components/HomePage.jsx'

import { ContextProvider } from './contexts/ContextProvider';

import './App.css'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/search/:query" element={<HomePage />} />
          <Route path="/users/:username" element={<User />} />
          <Route path="/images/:image_id" element={<Image />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
    </>
  )
}

