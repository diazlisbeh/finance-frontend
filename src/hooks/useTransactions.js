const { MyContext } = require("@/context/context");
const { useContext, useState } = require("react");


export default function useTransactions(){
 
   
    const {transaction,setTransaction} = useContext(MyContext);
    const [loaded, setLoaded] = useState(false);
    const [error,setError] = useState();
   
    const getTransactions = async (id) =>{
      if(typeof id != 'number'){
      return {Error: "The Id is undefied"}
      }else{

      try{
        const response = await fetch(`https://localhost:7091/Transaction/${id}`,{

          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        })
        if(!response.ok){
          throw new Error(`Error: ${response.status}`)
        }
        const data = await response.json()
          setTransaction(data)
          setLoaded(true)
        } 
        catch(err){
          setError(err)
          console.log(err)
        }
      }
    }
    
    const postTransaction= async (transactionID,amount,categoryId,userID,date,porpuse,type) =>{
 
      try{
        const responseCode = await fetch('https://localhost:7091/Transaction/create',{
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          
          body:JSON.stringify({
            transactionID,
            amount,
            categoryId,
            userID,
            date,
            porpuse,
            type
          })
        })

        if(!responseCode.ok){
          alert(`Ha ocurrido un error ${responseCode.status}`)
          throw new Error `Ha ocurrido un error: ${responseCode.status}`
        }else{
          alert("La transaction ha sido creada")
        }
        
      }catch(err){
        console.log(err)
      }

    }


  return {getTransactions,loaded,error,postTransaction}
}

