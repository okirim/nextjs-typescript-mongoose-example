import {Fragment} from 'react';
import LoginForm from "../../components/auth/LoginForm";
import Hero from "../../components/home-page/Hero";

function Login() {
    return (
        <Fragment>
          <div className="bg-blue-900 flex items-center justfy-center w-screen h-screen">
              <LoginForm/>
          </div>
        </Fragment>
    );
}

export default Login;