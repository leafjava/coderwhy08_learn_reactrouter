import React, { PureComponent } from 'react'
import {Route,Routes, Link,NavLink} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import "./style.css"

export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <div className='header'>
          <span>Header</span>
          <div className='nav'>
            {/* <NavLink to="/home" style={({isActive}) => ({color:isActive ? "red" :''})}>首页</NavLink>
            <NavLink to="/about" style={({isActive}) => ({color:isActive ? "red" :''})}>关于</NavLink> */}

            {/* <NavLink to="/home" className={({isActive}) => isActive ? "link-active":""}>首页</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "link-active":""}>关于</NavLink> */}

            <Link to="/home">首页</Link>
            <Link to="/about">关于</Link>
          </div>
          <hr/>
        </div>
        <div className='content'>
          {/* 映射关系:path => Component */}

          <Routes>
            {/* <Route path='/' element={<Home/>}></Route> */}
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
          </Routes>
        </div>
        <div className='footer'>
          <hr/>
          Footer
        </div>
      </div>
    )
  }
}

export default App