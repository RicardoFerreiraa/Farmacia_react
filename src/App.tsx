import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListaCategorias from './components/listaCategorias/ListaCategoria';
import FormCategoria from './components/formCategoria/FormCategoria';
import DeletarCategoria from './components/deletarCategoria/DeletarCategoria';
import Home from './pages/home/Home';
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='min-h-[80vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/cadastrar' element={<FormCategoria/>}/>
          <Route path="/editarcategorias/:id" element={<FormCategoria />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/categorias/editar/:id" element={<FormCategoria />} />
          <Route path="/categorias/deletar/:id" element={<DeletarCategoria />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;