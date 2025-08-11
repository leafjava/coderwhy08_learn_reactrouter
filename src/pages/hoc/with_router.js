import {useNavigate} from 'react-router-dom'
function withRouter(WrapperComponent){
  // class NewComponent extends PureComponent {
  //   render(){
  //     return <wrapperComponent  {...this.props} router={navigate}/>
  //   }
  // }

  // return <NewComponent/>
  return function(props){
    const navigate = useNavigate()

    const router = { navigate }
    return <WrapperComponent {...props} router={router}/>
  }
}

export default withRouter