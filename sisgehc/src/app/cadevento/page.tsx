import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Select from "../components/Select/Select";
import "./style.css"

export default function cadevento() {
    return (
      <>
      <div className="titulo">
      <h4>Cadastro de Evento</h4>
      </div>
      <div>
        <div className="colunaDireita">
          <Input placeholder={"Adicione um nome"} text={"Nome do evento"}></Input>
          <Select></Select>
          <Input id="texto" placeholder="Descreva seu evento" text="Descrição do evento"></Input>
          <Button text={"Voltar"} color={""} ></Button>
        </div>
        <div className="colunaEsquerda">
          <Input placeholder="Professor, Grupo, Laboratório ou Movimento" text="Responsavel pelo evento"></Input>
          <Input placeholder={"Adicione um local"} text={"Local"}></Input>
          <Input placeholder={"Adicione um curso"} text={"Curso"}></Input>
          <div>
            <div>
              
            </div>
            <div></div>
          </div>
          <Button text="Salvar" color="btn-verde"></Button>
        </div>
      </div>
      </>
    );
  }