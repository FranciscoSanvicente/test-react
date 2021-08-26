import { useContext } from 'react';
import MUIDataTable from "mui-datatables";
import  { Context }  from "../context"

const Table = () => {
    const { state, error, loading } = useContext(Context);
  

    if(loading){
        return(
          <div className="spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
          </div>
        )
      }
      if(error){
        return(
          <div >
          <h1>  A ocurrido un error </h1>
        </div>
        )
       
      }
      if(!loading && !error){
        const columns = ["Device", "Date", "Hours"];
        const data = [
            [state[0].device, state[0].date, state[0].hours],
            [state[1].device, state[1].date, state[1].hours, ],
            [state[2].device, state[2].date, state[2].hours, ],
            [state[3].device, state[3].date, state[3].hours, ],
            [state[4].device, state[4].date, state[4].hours, ],
            [state[5].device, state[5].date, state[5].hours, ],
          
            ];
        
            const options = {
            filterType: 'checkbox',
            };
        
            return ( 
                <MUIDataTable 
                    title={"Employee List"} 
                    data={data} 
                    columns={columns} 
                    options={options} 
                />
             );
       
      }
   
    
}
 
export default Table;


