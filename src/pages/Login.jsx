import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/FirebaseProvider";
import { Helmet } from "react-helmet";

const Login = () => {
    const { loginUser, googleLogin, githubLogin, facebookLogin } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const from = location?.state || "/my-profile";
    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then((result) => {
                if (result.user) {
                    navigate(from);
                }
            })
    }

    const onSubmit = (data) => {
        loginUser(data.email, data.password)
            .then(result => {
                // console.log(result);
                navigate(from);
            })
    }

    return (
        <div className="mt-[100px] mb-[100px] max-w-[350px] mx-auto">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login | Real Estate</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="container">
                <div>
                    <h3 className="text-center title-text mb-[25px]">Log in</h3>
                    <div className="text-center space-x-3 mb-5">
                        <button onClick={() => handleSocialLogin(googleLogin)} className="social-login"><img src="https://auth.hostinger.com/assets/images/oauth/google.svg" /></button>
                        <button onClick={() => handleSocialLogin(facebookLogin)} className="social-login bg-[#1877f2]"><img src="https://auth.hostinger.com/assets/images/oauth/facebook.svg" /></button>
                        <button onClick={() => handleSocialLogin(githubLogin)} className="social-login bg-[#2f363d]"><img src="https://auth.hostinger.com/assets/images/oauth/github.svg" /></button>
                    </div>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                    </div>
                    <div className="mt-5 login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <input type="email" placeholder="Email" {...register("email", { required: true })} />
                            </div>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} placeholder="Password" {...register("password", { required: true })} />
                                <p onClick={() => setShowPassword(!showPassword)} className="pass-eyes"><i class="fa-solid fa-eye"></i></p>
                            </div>
                            <div>
                                <button className="btn w-full bg-[#ddd]">Log in</button>
                            </div>
                        </form>
                    </div>
                    <div className="text-center mt-5">
                        <h3>Do not have an account? <Link className="underline" to="/register">Register Now!</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;