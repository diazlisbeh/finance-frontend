import { MyContext } from "@/context/context";
import React, { useContext,useState } from "react";


function useCategories(){

    const {setCategories} = useContext(MyContext);
    const [load, setLoad] = useState(false)

    const getCategories = async() =>{

        const response = await fetch('https://localhost:7091/Category',{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
        })

         
    if(!response.ok){
        alert("usuario o contrasena incorrecto")
        throw new Error(`Error: ${response.status}`)
      }
      response.json()
        .then(data => {
        setCategories(data)
        setLoad(true)} )
    }

    return{getCategories,load}
}

export {useCategories}