import { useState, useEffect } from "react";
import axios from "axios"

export const useFetch = url => {

    const [state, setState] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        axios.get(url)
       
            .then(({ data }) => {
               
                setState([...data]);
                setLoading(false);

            })
            .catch((err) => {
             
                setLoading(false);
                setError(true);           
                console.error("En el fetch",err);

            })

            .finally(() => {

                setLoading(false);

            });

    }, [url]);

    return {state, error, loading} ;
};