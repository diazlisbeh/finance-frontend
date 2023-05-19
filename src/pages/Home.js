import { MyContext } from "@/context/context";
import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import useTransactions  from "../hooks/useTransactions";
import Modal from "@/Components/Modal";
import AddForm from "@/Components/AddForm";
import { useRouter } from "next/router";
import { useCategories } from "@/hooks/useCategories";



export default function Home(){

    const {userData,setUserData,transaction,categories} = useContext(MyContext);
    const [cookies,setCookies] = useCookies(['user'])
    const {getTransactions,loaded,error} = useTransactions();
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    
    const {getCategories,load} = useCategories();

    const handleClose = () =>{
        if(isOpen) setIsOpen(false)
        else setIsOpen(true)
    }

    useEffect(() => {
        if(typeof cookies.user == 'undefined'){
            router.push('/Login')
        }else setUserData(cookies.user) 

    }, []);
    useEffect(()=>{
        getCategories()
    },[load])

    useEffect(() => {
        if(typeof cookies.user == 'undefined'){
            router.push('/Login')
        }else{
        getTransactions(cookies.user.id)
        
        }
    },[loaded])

    return(
        <>
        <header>
            <nav className="container none flex justify-between mb-5">
                <div className="pt-3 pl-3 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">FinanceApp</div>
                <div className="pt-2 pr-2 text-4xl " onClick={()=> router.push('/Profile')}><ion-icon name="person-circle-outline" className="text-lg"></ion-icon></div>
             
            </nav>
            <div className="flex justify-center text-4xl py-2 font-medium">${ userData.capital}</div>
        </header>
        
        <section className="h-3/4">
            {loaded &&   (
                <div className="contaner flex flex-col max-h-90 overflow-y-scroll h-96">
                    {transaction.map((p) => {
                     
                         return(
                        <ul role="list" class="px-8 divide-y divide-gray-200 ">
                        <li class="py-3 sm:py-4">
                            <div className={`flex items-center space-x-4 border-solid border-2 rounded-lg ${p.type ==1 ? 'border-red-500': 'border-green-500'}`}>
                             
                                <div class="flex-1 min-w-0 px-2 py-1">
                                    <p className={`text-sm font-medium ${p.type == 1 ? 'text-red-900' : 'text-green-900'} truncate `}>
                                    {p.porpuse}
                                    </p>
                                    <p className={`text-sm ${p.type == 1 ? 'text-red-500' : 'text-green-500'} truncate `}>
                                        {categories.map((c) =>{
                                            if(c.id == p.categoryID) return <p>{c.name}</p>
                                        })}
                                    </p>
                                </div>
                                <div className={`inline-flex items-center text-base px-2 py-1 font-semibold ${p.type == 1 ? 'text-red-900' : 'text-green-900'} `}>
                                    ${p.amount}
                                </div>
                            </div>
                        </li>
                        </ul>)
                    })}
                </div>
            )}
        </section>

        <footer className="bg-white rounded-lg shadow m-4 flex justify-around">
            <div onClick={()=> router.push('/History')} className="text-5xl"><ion-icon name="timer-outline"></ion-icon></div>
            <div onClick={handleClose} className="text-5xl"><ion-icon name="add-circle-outline"></ion-icon></div>
            <div className="text-5xl"><ion-icon name="wallet-outline" ></ion-icon></div>
        </footer>

        <Modal isOpen={isOpen}
               handleClose={handleClose}>
            <AddForm handleModal={handleClose}/>
        </Modal>
      
        </>
    )
}
