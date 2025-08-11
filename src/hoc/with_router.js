import {useLocation, useNavigate, useParams, useSearchParams} from 'react-router-dom'
function withRouter(WrapperComponent){
  // class NewComponent extends PureComponent {
  //   render(){
  //     return <wrapperComponent  {...this.props} router={navigate}/>
  //   }
  // }

  // return <NewComponent/>
  return function(props){

    // 1.导航
    const navigate = useNavigate()

    // 2.动态路由的参数: /detail/:id
    const params = useParams()

    // 3.查询字符串的参数: /user?name=why&age=18
    const location = useLocation()
    const [searchParams] = useSearchParams()
    // console.log(searchParams.get("name"))
    // console.log(searchParams.get("age"))
    // console.log(searchParams)
    const query = Object.fromEntries(searchParams)

    console.log(location)

    const router = { navigate,params,location,query }

    return <WrapperComponent {...props} router={router}/>
  }
}

export default withRouter