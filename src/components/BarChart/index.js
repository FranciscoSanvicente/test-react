import { useContext } from 'react';
import  { Context }  from "../context"
import { Pie } from 'react-chartjs-2'


const BarChart = () => {
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
      return (
        <div>
         
               <Pie
                 data={{
                   
                   labels: [state[0].device, state[1].device, state[2].device, state[3].device, state[4].device],
                   datasets: [
                    {
                      label: '# of votes',
                      data: [state[0].hours, state[1].hours, state[2].hours, state[3].hours, state[4].hours],
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                      ],
                      borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                      ],
                      borderWidth: 1,
                    },
                    
                   ],
                 }}
                 height={400}
                 width={600}
                 options={{
                   maintainAspectRatio: false,
                   scales: {
                     yAxes: [
                       {
                         ticks: {
                           beginAtZero: true,
                         },
                       },
                     ],
                   },
                   legend: {
                     labels: {
                       fontSize: 25,
                     },
                   },
                 }}
               />
        
         
        </div>
      )
    }
  
}

export default BarChart