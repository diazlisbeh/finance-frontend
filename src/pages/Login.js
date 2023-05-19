import React, { useEffect,useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import useAuth, {login} from "@/hooks/useAuth";
function Login() {
    
   
    const [cookies, setCookies] = useCookies(['user'])
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const router = useRouter();
    const {login} = useAuth();

    const onLogin = async()=>{
        await login(email,password)
        router.push('/Home')
    }

    useEffect(()=>{
        if(typeof cookies.user == 'object' ){
            router.push('/Home')
        }
    })

    return(
        <>
        <h1 className="mt-8 ml-3 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Login</h1>
        <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2 px-8">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    onChange={(e) =>  setPassword(e.target.value)}></input>
                </div>
            </div>
          
        </form>
        <div className="px-6 mb-4">
                <button onClick={()=>onLogin()} type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LogIn</button>
            </div>
        <p > Don't have an account? <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            href={{pathname:'/SignUp'}}>Sign Up</Link>
            </p>
           
        </>
    )
}

export default Login;