
import { useState } from 'react';
import './App.css'
import Counter from './Counter'
import Justfordemo from './justfordemo';

function App() {


   

   const countervalue=[
    {
      id:1,
      value:0
    },
    {
      id:2,
      value:0
    },
    {
      id:3,
      value:3
    }
   ]

   const [number,setnumber]= useState(countervalue);
  
  
      const incfun = (id) =>{
          console.log(id);


          const updatedcounter=number.map((counts)=>{
            if(counts.id==id){
              return{

                  ...counts,
              value: counts.value+1,

              }      
                        
            }

             return counts;
           
          })

          setnumber(updatedcounter);

          
  
          
      }
  
  
      const decfun =(id)=>{
  
  
          const updatedcounter=number.map((counts)=>{
            if(counts.id==id && counts.value>0){
              return{

                  ...counts,
              value: counts.value-1,

              }      
                        
            }

             return counts;
           
          })

          setnumber(updatedcounter);
        
  
      }

      const totalcount = number.reduce(
        (sum,current) => sum+current.value,
        0
      );


  return (
    <>


    <div className='flex justify-center items-center gap-10' >

      <div className='mt-[100px]'>

           {
          number.map(count=>{
            return(
              <Counter key={count.id} count={count} incfun={incfun} decfun={decfun}></Counter>
            )
          })
        }
      

      </div>

      <div>

        <p>{totalcount}</p>

      </div>

      <Justfordemo></Justfordemo>

      
     

    </div>
     
     
     
    </>
  )
}

export default App
