import { useCategories } from "@/hooks/useCategories";
import React, { useEffect,useContext,useState } from "react";
import { MyContext } from "../context/context";
import useTransactions from "@/hooks/useTransactions";
import { uuid } from "@/utils/generateUUID";
import { crearFecha } from "@/utils/generateDate";

function AddForm({handleModal}){
    const {categories,userData} = useContext(MyContext);
    const {getCategories,load} = useCategories();
    
    const [transactionID, setTransactioID] = useState();
    const [amount, setAmount] = useState();
    const [categoryId, setCategoryId] = useState();
    const [userID, setUserID] = useState();
    const [date, setDate] = useState();
    const [porpuse, setPorpuse] = useState();
    const [Type, setType] = useState();
    const {postTransaction} = useTransactions();
    
    useEffect(()=>{
        getCategories()

        setTransactioID(uuid())
        setUserID(userData.id)
        setDate(crearFecha())

    },[load])

    const post =async () =>{
   
        if(typeof userData.id != 'number'){
            alert("The user value is indefinido")
            return;
        }

        setTransactioID(uuid())
        setUserID(userData.id)
        setDate(Date.now())
        
        await postTransaction(transactionID,amount,categoryId,userID,date,porpuse,Type)
        handleModal();
    }

    return(
        <form className="font-bold">
            
            <label className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Porpuse</label>
            <input type="text" placeholder="Add text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                onChange={(e)=> setPorpuse(e.target.value)} required></input>
            
            <label className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Amount</label>
            <input type="number" placeholder="Add amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e)=> setAmount(parseInt(e.target.value))}></input>
            
            <label className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Category</label>
            <select name="Category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e)=> setCategoryId(parseInt( e.target.value))}>
               {load && categories.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
               ))}
            </select>
            <div className="grid grid-cols-2 justify-items-center">
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" 
                    onClick={() => setType(0)}>Income</button>

                <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={() => setType(1)}>Spend</button>

                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" 
                    onClick={handleModal} >Cancel</button>

                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
                    onClick={()=>post()} >Save</button>
            </div>
        </form>
    )
}

export default AddForm;