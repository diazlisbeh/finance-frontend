import { MyContext } from "@/context/context";
import { useRouter } from "next/router";
import React, { useContext,useEffect } from "react";
import { useCookies } from "react-cookie";


function Profile(){
    const {userData,setUserData} = useContext(MyContext)
    const [cookies,setCookies] = useCookies(['user'])
    const router = useRouter();
    useEffect(() => {
        if(typeof cookies.user == 'undefined'){
            router.push('/Login')
        }else setUserData(cookies.user) 
    }, []);

    return(
        <>
            <div className="m-2 text-2xl w-auto" onClick={()=> router.push('/Home')}><ion-icon name="arrow-back-outline"></ion-icon></div>
            <div className="flex flex-col items-center w-full">
                <div className="text-8xl mt-5  "><ion-icon name="person-circle-outline" className="text-lg"></ion-icon></div>
                <h1 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">{userData.name}</h1>
            </div>
            <p className="max-w-none text-medium format lg:format-lg format-red p-2 font-semibold">Name: {userData.name}</p>
            <p className="max-w-none text-medium format lg:format-lg format-red p-2 font-semibold">Last Name: {userData.lastName}</p>
            <p className="max-w-none text-medium format lg:format-lg format-red p-2 font-semibold">Email: {userData.email}</p>
        </>
    )
}


export default Profile