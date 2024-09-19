'use client'
import './Card.css';
import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import { Evento } from '@/types';

function Card() {
  const [data, setData] = useState<any[]>([]); // Estado para armazenar os dados
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

  useEffect(() => {
    // Função para buscar os dados
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/eventos/');
        const result = await response.json();
        setData(result); // Atualiza os dados
        console.log(result); // Verifique os dados aqui no console
      } catch (error) {
        
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false); // Finaliza o estado de carregamento
      }
    };

    fetchData();
  }, []); // O array vazio faz com que useEffect execute apenas uma vez ao montar o componente

  if (loading) {
    return <p>Carregando...</p>; // Mensagem enquanto os dados estão sendo carregados
  }

  return (
    <div className='cards'>
      {data.map((item: Evento) => (
        <Fragment key={item.id}>
          <div className="card__container">
            <div className="card__titulo">
                <Image src={item.imagem} alt="Imagem evento" width={375} height={190} className="card__image"/>
                <p className='ajuste__titulo'>{item.nome}</p>
            </div>

            <div className="card__informacoes">
                <div>
                        <p>De {item.dataInicio} até {item.dataFim}</p>
                        <p>{item.professor === 2 ? 'Paulo Henrique' : 'Mateus Paixão'}</p>
                        <p>{item.horaInicio} - {item.horaFim}</p>
                </div>
                <div>
                        <p>Realização:</p>
                        <p>{item.descricao}</p>
                </div>
                <button className='card__button'>Se inscrever</button>
             </div>
           </div>
        </Fragment>
      ))}
    </div>
  );
}

export default Card;
