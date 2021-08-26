import { createContext } from 'react';
import { useFetch } from '../../hook/useFetch';
export const Context = createContext();

const Contex = ( { children } ) => {
    const url = 'http://localhost:3004/utilization';
    const  { state, error, loading } = useFetch(url); 
    

    return (
        <div>
        <Context.Provider
            value={{
               
                state,
                error, loading
    
            }}
        >
            { children }
        </Context.Provider>
    </div>
      );
}
 
export default Contex;
