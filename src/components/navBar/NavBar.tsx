import React from 'react'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-blue-600 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Farmacia</div>

            <div className='flex gap-4'>
              <div className='hover:underline'>Cadastrar Categorias</div>             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar