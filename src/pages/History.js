import { MyContext } from "@/context/context";
import React, { useContext,useEffect } from "react";
import useTransactions  from "../hooks/useTransactions";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";


function History(){
    const {transaction,userData} = useContext(MyContext);
    const {loaded,getTransactions} = useTransactions();
    const [cookies,setCookies] = useCookies(['user'])
    const router = useRouter();

    useEffect(() => {
        getTransactions(cookies.user.id)
    },[loaded])
    return (
      <>
        <header className="container none flex justify-between mb-5">
          <h2 className="pt-3 pl-3 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">History</h2>
          <div className="pt-2 pr-2 text-4xl " onClick={()=> router.push('/Home')}> <ion-icon name="close-circle-outline"></ion-icon></div>
        </header>
          <section>
            {!loaded && <p>Cargando</p>}
            {loaded && transaction.map(p => (
              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.porpuse}</h3>
                <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">{p.amount}</p>
                <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">{p.category}</p>
                <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">{p.date}</p>
              </div>
            ))}
          </section>
        </>
    )
}

export default History;
