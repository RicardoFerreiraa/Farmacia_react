import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-blue-600 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/' className='text-2xl font-bold uppercase'>Farmacia</Link>

            <div className='flex gap-4'>
            
              <Link to='/cadastrar' className='hover:underline'>Cadastrar Categorias</Link>
              <Link to='/categorias' className='hover:underline'>Lita de Categorias</Link>
                         
            </div>
          </div>
          
              
              
        </div>
    </>
  )
}

export default Navbar