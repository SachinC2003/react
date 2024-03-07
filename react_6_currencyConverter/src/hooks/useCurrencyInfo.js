import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;

/*  ## use effect Hook teke two parameter 1st-> callback , 2nd-> dependency array.....
    ## after ftch any url, 
       it gives the data in the form of string, 
       But we equired data in ".json" format, 
       so we convrt the string data in json 
*/