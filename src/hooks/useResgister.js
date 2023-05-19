//import { Fenix } from "@next/font/google";

import { useRouter } from "next/router";


export  function useRegister(){
  const router = useRouter();

  const register = async (user) =>{
  try{
    const response = await  fetch('https://localhost:7091/User/register',{

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify (user),
    });
    if(response.status == 409){
      console.log(`The status code ${response.status}`)
      alert(`The user already exits, please log in`)
      router.push('/Login') 
    }
    else if (!response.ok){
      console.log(`An error has ocurred ${response.status}`)
      alert('Ha ocurrido un error')
    }
    else{
      alert("The user has been created")
      router.push('/Login')
    }
  }
  catch(err){
    console.log(err)

  }
}
  return {register}

}