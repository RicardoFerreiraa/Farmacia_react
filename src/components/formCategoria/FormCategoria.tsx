import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../models/Categoria';
import { atualizar, listar, cadastrar } from '../../services/Service';

function FormCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({ nome: '', descricao: '' });
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();


  async function buscarPorId(id: string) {
    try {
      await listar(`/categorias/${id}`, setCategoria);
    } catch (error) {
      console.error('Erro ao buscar categoria:', error);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {


        await atualizar(`categorias`, categoria, setCategoria);
        alert('Categoria atualizada com sucesso');


      } catch (error) {
        console.error('Erro ao processar a categoria:', error);
        alert('Erro ao processar a categoria');
      }
    } else {
      try {


        await cadastrar(`/categorias`, categoria, setCategoria);
        alert('Categoria cadastrada com sucesso');


      } catch (error) {
        console.error('Erro ao processar a categoria:', error);
        alert('Erro ao processar a categoria');
      }
    }
    retornar()
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre uma nova categoria' : 'Editar categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome da categoria</label>
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nome}
            onChange={atualizarEstado}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricao}
            onChange={atualizarEstado}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;