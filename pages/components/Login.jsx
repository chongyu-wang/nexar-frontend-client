import React, { useState } from 'react';
import { Mail, KeyOutline, LockClosed, CloseCircle } from 'react-ionicons';
import Link from 'next/link';
import { useRouter } from 'next/router';

// parametric
// semi parametric
// 


function Login({setShowSignup, setLoginOrRegister}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    function route(event) {
    event.preventDefault()
    router.push("/Chat");
    }

    return (
    <div class="form-box login items-center justify-center">
        <h2 class="text-2xl font-bold text-black text-center">Login</h2>
        <form onSubmit={route}>
        <button type="button" onClick={() => setShowSignup(false)}><CloseCircle className="absolute top-2 right-2 text-2xl"/></button>
        <div class="input-box relative w-full h-50 border-b-2 border-black items-center" style={{margin: "30px 0"}}>
            <Mail className="absolute right-0 text-lg" style={{ lineHeight: "1.4em" }}/>
            <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            class="w-full h-full bg-transparent border-none outline-none placeholder-black p-0 pr-35 pb-0 pl-0" 
            placeholder="Email"
            />
            {/* <label className="absolute top-1/2 left-5 transform -translate-y-1/2 text-sm font-medium pointer-events-none">Email</label> */}
        </div>

        <div class="input-box relative w-full h-50 border-b-2 border-black items-center" style={{margin: "30px 0"}}>
            <LockClosed className="absolute right-0 text-lg" style={{ lineHeight: "1.4em" }}/>
            <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            class="w-full h-full bg-transparent border-none outline-none appearance-none relative placeholder-black p-0 pr-35 pb-0 pl-0"
            placeholder="Password"
            />
            {/* <label className="absolute top-1/2 left-5 transform -translate-y-1/2 text-sm font-medium pointer-events-none">Password</label> */}
        </div>

        <div class="remember-forgot" style={{fontSize: "0.9em", fontWeight: "500", margin: "-15px 0 15px", justifyContent: "space-between"}}>
            <label>
            <input type="checkbox" style={{marginRight: "3px"}}></input>
            Remember me
            </label>
            <Link href="/" className="hover:underline ml-20"> Forgot Password?</Link>
        </div>

        <button type="submit" class="btn w-full h-10 rounded-xl bg-gray-900 text-gray-100">Login</button>

        <div class="login-register text-sm text-center font-semibold" style={{marginTop: "30px"}}>
            <p>
            Don't have an account?
            <button type="button" className="hover:underline ml-1 font-bold" onClick={() => setLoginOrRegister("register")}>Register</button>
            </p>
        </div>
        </form>
    </div>
    )
}

export default Login;