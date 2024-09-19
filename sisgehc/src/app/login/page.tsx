import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Input from "../components/Input/Input";
import "./style.css";

export default function login() {
    return (
      <>
      <Header></Header>
      <div className="coluna">
        <p className="loginText">Login</p>
        <Input text="Matrícula" placeholder={"Digite sua matrícula"}></Input>
        <Input text="Senha" placeholder="Digite sua senha"></Input>
        <Button text={"Entrar"} color={"btn-verdeg"}></Button>
      </div>
      <div className="coluna">
        <p className="createText">Ainda não tem conta?</p>
        <Button text={"Criar conta"} color={"btn-verdeclarog"}></Button>
      </div>
      <Footer></Footer>
      </>
    );
  }
  