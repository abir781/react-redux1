import React, { useState } from 'react';

const Counter = ({incfun,decfun,numb,count}) => {

   


    

    


    return (

        <div className=''>

                <div className='flex justify-center gap-5 '>

            <div className='mb-[70px] w-[300px] h-[200px] bg-gray-100 flex justify-center items-center'>

                <div className='flex flex-col gap-4 '>

                    <button className='px-4 py-3 bg-amber-500 rounded-lg text-white font-bold text-xl' onClick={()=>incfun(count.id)}>Increament</button>

                    <button className='px-4 py-3 bg-amber-500 rounded-lg text-white font-bold text-xl' onClick={()=>decfun(count.id)}>Decrement</button>

                </div>


                <p>{count.value}</p>
            

              

               

                

            </div>

            
        </div>

          <div>
                    
         </div>
         

        </div>
       
    );
};

export default Counter;