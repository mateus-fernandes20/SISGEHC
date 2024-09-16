'use client'
import React, { useState, useEffect } from 'react'
import Footer from '../components/DataInput/Footer/Footer'
import Header from '../components/Header/Header'
import Image from 'next/image'
import './style.css'
import Button from '../components/Button/Button'
import { useRouter } from 'next/navigation'
;

const page = () => {

    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/HomeAluno');
    }

    // Estado para armazenar os dados do Aluno
    const [aluno, setAluno] = useState({
        nome: '',
        matricula: '',
        horasComplementares: '',
        curso: '',
        senha:'',
    });

    useEffect(() => {
        const fetchPerfil = async () => {
          try {
            
            const response = await fetch('http://127.0.0.1:8000/alunos');
            const data = await response.json();
    
            // Atualiza o estado com os dados da API
            setAluno({
              nome: data.nome,
              matricula: data.matricula,
              horasComplementares: data.horasComplementares,
              curso: data.curso,
              senha:data
            });
          } catch (error) {
            console.error('Erro ao buscar os dados do perfil:', error);
          }
        
         console.log({aluno})
        };
    
        fetchPerfil() // Chamada à API ao montar o componente
      }, []); // O array vazio faz o useEffect rodar apenas uma vez ao carregar
    

  return (
    <>
    <Header/>
    <div className='perfil__container'>
        <div className='perfil__image'>
            <Image
                src="./images/imagemPerfil.svg"
                alt='imagem default perfil'
                width={256}
                height={256}/>

        </div>
        {/* Informações sobre o aluno  */}
                
            <div className='perfil__informacao'>
                <h1>{aluno.nome}</h1>
                <p>Matricula : {aluno.matricula}</p>
                <p>Horas complementares: {aluno.horasComplementares}</p>
                <p>Curso : {aluno.curso}</p>
                <a href="https://www.google.com/url?q=https://www.uece.br/fafidam/wp-content/uploads/sites/35/2024/07/RES-5034-CEPE-atividades-complementares-2-2.pdf&sa=U&ved=2ahUKEwiM9_r1vuWHAxUgO7kGHf1ZMcQQFnoECC8QAQ&usg=AOvVaw3KotDNNUJNcCo_hJAbdv2E">informações horas complementares</a>
            
            </div>

            
    </div>

            <div className='perfil__button' onClick={handleButtonClick} >
                <Button color='' text='Voltar'/>
            </div>
       <Footer/>
    </>
  )
}

export default page