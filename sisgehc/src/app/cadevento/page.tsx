import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import "./style.css"

export default function cadevento() {
    return (
      <>
      <h1>Página de cadastro de evento</h1>
      <p>arraso mto mami</p>
      <Input placeholder="Ex: Semana Universitária" text="Nome do evento"/>
      <Button text="Voltar" color="padrao"/>
      <Button text="Confirmar" color="btn-verde"/>
      <Button text="Deletar" color="btn-vermelho"/>
      </>
    );
  }