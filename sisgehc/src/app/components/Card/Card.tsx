import './Card.css'
import Image from 'next/image';
import Button from '@/app/components/Button/Button';
import { Fragment } from 'react';

async function Card() {
    const response = await fetch('http://127.0.0.1:8000/eventos/')
    const data = await response.json() 

    console.log(data)

    const responseprof = await fetch('http://127.0.0.1:8000/professor/')   
    const dataprof = await responseprof.json()    

    console.log(dataprof)

    return(
        <div>
                {data.map((item: any) =>
                <Fragment key={item.id}>
                        <div className='card__container'>
                                <div className='card__titulo'>
                                        <div className="card__image">
                                                <Image src={item.imagem} alt='Imagem evento' width={375} height={190}></Image>
                                        </div>
                                        <p>{item.nome}</p>
                                </div>

                                <div className='card__informacoes'>
                                        <div>
                                                <p>De {item.dataInicio} até {item.dataFim}</p>
                                                <p>{item.professor === 2 ? 'Paulo Henrique' : 'Mateus Paixão'}</p>
                                                <p>{item.horaInicio} - {item.horaFim}</p>
                                        </div>
                                        <div>
                                                <p>Realização:</p>
                                                <p>{item.descricao}</p>
                                        </div>
                                        <Button color='.btn-verde' text='Se inscrever'/>
                                </div>
                        </div>
                </Fragment>)}  
        </div>
    );
}

export default Card