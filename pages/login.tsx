import { Login } from "components";
import { useLogin } from "hooks/useLogin";
import {useAppContext} from 'context'

export default function HomePage() {
  const [status, checkStatus] = useLogin({redirect:'/'})
  const { sharedState, setState } = useAppContext();
  return (
      <Login
      message = {sharedState.loginData['message'] || ''}
        onClickSignIn={checkStatus}
        onChangeFields={()=>{setState({loginData:{}})}}
      />
  );
}
