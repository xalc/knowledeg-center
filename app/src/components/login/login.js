import { Button } from "antd"
import { useRouter } from "next/navigation";
import useLogin from "../../hooks/use-login";
const LoginButton = () => {

    const [isLogin, text, setUserLogin] = useLogin();

    const router = useRouter();
    const loginButtonClickHandler = () => {
        console.log(isLogin)
        if (isLogin) {
            router.push('/');
            setUserLogin(!isLogin)
        } else {
            router.push('/login');
            setUserLogin(!isLogin)
        }
    }

    return <Button type='primary' onClick={loginButtonClickHandler}>{text}</Button>
}
export default LoginButton;