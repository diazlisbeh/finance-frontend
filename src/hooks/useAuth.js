import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

export default function useAuth() {

  const [cookies,setCookies,removeCookies] = useCookies(['user'])
  const router = useRouter();
  
  const login = async (email, password) => {
  
    try{
    const response = await fetch("https://localhost:7091/User/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify ({ email, password }),
    })
    
    if(!response.ok){
      alert("usuario o contrasena incorrecto")
      throw new Error(`Error: ${response.status}`)
    }
    response.json()
    .then(data => {
     setCookies('user',data)} )
    .finally(() => router.push('/Home'))
      
  }  catch(err){
    console.log(err)
  }    
  }  
    
      
  
  return { login };
}

