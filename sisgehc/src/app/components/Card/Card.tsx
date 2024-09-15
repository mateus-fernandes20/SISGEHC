import './Card.css'
import Image from 'next/image';
import Button from '@/app/components/Button/Button';

const Card = () => {

    return(
        <div className='card__container'>
            <div className='card__titulo'>
                    <div className="card__image">
                        
                    </div>
                    <p>TÍTULO</p>
            </div>

            <div className='car__informacoes'>
                    <div>
                            <p>Informação data </p>
                            <p>Informação Local</p>
                            <p>Informação hora</p>
                    </div>
                    <div>
                            <p>Realização:</p>
                            <p>Quem está realizando o evento</p>
                    </div>
                   <Button color='.btn-verde' text='Se inscrever'/>
            </div>
        </div>
    );
}

export default Card;