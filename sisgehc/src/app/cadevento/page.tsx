import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Select from "../components/Select/Select";
import DataInput from "../components/DataInput/DataInput";
import TextArea from "../components/TextArea/TextArea";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./style.css"
import InputFile from "../components/InputFile/InputFile";
import TimeInput from "../components/TimeInput/TimeInput";

export default function cadevento() {
    return (
      <>
      <Header isLoginScreen></Header>
      <div className="titulo">
      <h4>Cadastro de Evento</h4>
      </div>
      <div className="frame">
        <div className="coluna">
          <Input placeholder={"Adicione um nome"} text={"Nome do evento"}></Input>
          <Input placeholder="Defina uma quantidade de horas" text="Quantidade de horas do evento"></Input>
          <TextArea placeholder="Descreva seu evento" text="Descrição do evento"></TextArea>
          <InputFile name={"imgEevento"} text={"Logo do evento"}></InputFile>
          <div id="buttonDivLeft">
            <Button text={"Voltar"} color={""} ></Button>
          </div>
        </div>
        <div className="coluna">
          <Input placeholder="Professor, Grupo, Laboratório ou Movimento" text="Responsavel pelo evento"></Input>
          <Input placeholder={"Adicione um local"} text={"Local"}></Input>
          <Input placeholder={"Adicione um curso"} text={"Curso"}></Input>
          <div className="frame">
            <div>
              <DataInput text="Data de início"></DataInput>
              <TimeInput text={"Horário de início"}></TimeInput>
            </div>
            <div>
              <DataInput text="Data de termino"></DataInput>
              <TimeInput text="Horário de termino"></TimeInput>
            </div>
          </div>
          <div id="buttonDivRight">
            <Button text="Salvar" color="btn-verde"></Button>
          </div>
        </div>
      </div>
      <Footer></Footer>
      </>
    );
  }