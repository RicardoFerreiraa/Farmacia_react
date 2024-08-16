import React from 'react';


function Home() {
    return (
        <>
        <div className="bg-blue-600 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Bem vindos!</h2>

              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-black py-2 px-4'>Ver Categorias</button>
              </div>
            </div>
  
            <div className="flex justify-center ">

      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;