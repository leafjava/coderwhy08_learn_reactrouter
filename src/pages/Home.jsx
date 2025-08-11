import React, { PureComponent } from 'react'
import {Route,Routes, Link,NavLink, Navigate, Outlet, useNavigate} from 'react-router-dom'
import { withRouter } from '../hoc'

export class Home extends PureComponent {
  // const navigate = useNavigate()

  // function navigateTo(path){
  //   console.log(path)
  //   navigate(path)
  // }
  navigateTo(path){
    console.log(path)
    // console.log(this.props.router)
    const {navigate} = this.props.router
    navigate(path)
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <div className='home-nav'>
          <Link to="/home/recommend">推荐</Link>
          <Link to="/home/ranking">排行榜</Link>
          <button onClick={e => this.navigateTo("/home/songmenu")}>歌单</button>
        </div>

        {/* 占位的组件 */}
        <Outlet/>

      </div>
    )
  }
}

// 高阶组件:函数
// function withRouter(WrapperComponent){
//   // class NewComponent extends PureComponent {
//   //   render(){
//   //     return <wrapperComponent  {...this.props} router={navigate}/>
//   //   }
//   // }

//   // return <NewComponent/>
//   return function(props){
//     const navigate = useNavigate()

//     const router = { navigate }
//     return <WrapperComponent {...props} router={router}/>
//   }
// }

export default withRouter(Home)