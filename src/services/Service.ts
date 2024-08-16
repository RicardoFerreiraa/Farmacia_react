import axios from 'axios';

const api = axios.create({
  baseURL: 'https://farmacia-n0cw.onrender.com/'
});

interface AxiosRequestConfig {
  headers?: {
    Authorization?: string;
    [key: string]: any;
  };
}

export const listar = async (url: string, setDados: Function, config: AxiosRequestConfig = {}) => {
  try {
    const resposta = await api.get(url, config);
    setDados(resposta.data);
  } catch (error) {
    console.error('Erro ao listar dados:', error);
  }
}

export const cadastrar = async (url: string, dados: Object, setDados: Function, config: AxiosRequestConfig = {}) => {
  try {
    const resposta = await api.post(url, dados, config);
    setDados(resposta.data);
  } catch (error) {
    console.error('Erro ao cadastrar dados:', error);
  }
}

export const atualizar = async (url: string, dados: Object, setDados: Function, config: AxiosRequestConfig = {}) => {
  try {
    const resposta = await api.put(url, dados, config);
    setDados(resposta.data);
  } catch (error) {
    console.error('Erro ao atualizar dados:', error);
  }
}

export const deletar = async (url: string, config: AxiosRequestConfig = {}) => {
  try {
    await api.delete(url, config);
  } catch (error) {
    console.error('Erro ao deletar dados:', error);
  }
}