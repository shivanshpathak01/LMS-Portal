import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";

export const AppContext = createContext()

export const AppContextProvider = (props) =>{
    
    const currency = import.meta.env.VITE_CURRENCY

    const [allcourses, setAllcourses] = useState([])

    // Fetching all courses here
    const fetchAllCourses = async ()=>{
        setAllcourses(dummyCourses)
    } 


    useEffect(()=>{
        fetchAllCourses()
    },[])

    const value = {
        currency, allcourses
    }
    
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}