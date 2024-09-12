import './Footer.css'
import Image from 'next/image';

const Footer = () => {

    return(
        <footer className="rodape">
            <Image src="./images/LogoEstado.svg" alt="Logo Estado do Ceará" width={215} height={80}/>
            <div className='rodape__texto'>
                <p>Sistema criado para fins acadêmicos</p>
                <p>Governo do Estado do Ceará</p>
                <p>Todos os direitos reservados</p>
            </div>
            <Image src="./images/LogoUece.svg" alt='Logo Uece' width={310} height={80}/>
        </footer>
    );
}

export default Footer