import { useState } from 'react'
import {useLocalStorage} from './hooks/useLocalStorage.js'
import './App.css'
import LeftNav from './LeftNav'
import Header from './Header'
import Content from './Content.jsx'

export default function App() {
  
  return (
    <>
      <div className='left'></div>
      <div></div>
      <Header></Header>
      <LeftNav></LeftNav>
      <Content></Content>
    </>
  )
}