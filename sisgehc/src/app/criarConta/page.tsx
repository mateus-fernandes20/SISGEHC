import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Input from "../components/Input/Input";
import SelectConta from "../components/SelectConta/SelectConta";
import "./style.css";

export default function criarConta() {
    return (
      <>
      <Header></Header>
      <div className="coluna">
        <p className="loginText">Criação de conta</p>
        <Input text="Matrícula" placeholder={"Digite sua matrícula"}></Input>
        <Input id="password" text="Senha" placeholder="Crie uma senha" type="password" />
        <Input text="Nome" placeholder="Insira seu nome"></Input>
        {/*<SelectConta text={"Tipo de usuário"} value={0}></SelectConta>*/}
        <Button text={"Criar conta"} color={"btn-verdeg"}></Button>
      </div>
      <Footer></Footer>
      </>
    );
  }