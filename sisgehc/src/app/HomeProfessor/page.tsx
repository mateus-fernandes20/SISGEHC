import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Card from '../components/Card/Card';
import './style.css'
import CardCriarEvento from '../components/CardCriarEvento/CardCriarEvento';

export default function HomeProfessor() {

    return(
        <>
            <div className='wrapper'>
                <Header isLoginScreen/>
                <div className='container'>
                    <CardCriarEvento/>
                </div>
                <Footer/>
            </div>
        </>
    );
}