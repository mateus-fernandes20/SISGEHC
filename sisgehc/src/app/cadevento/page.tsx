import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Select from "../components/Select/Select";
import DataInput from "../components/DataInput/DataInput";
import TextArea from "../components/TextArea/TextArea";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./style.css"
import { useState } from "react";

export default function cadevento() {

  //  // Criando os estados para armazenar os dados dos inputs
  //  const [nomeEvento, setNomeEvento] = useState("");
  //  const [descricaoEvento, setDescricaoEvento] = useState("");
  //  const [responsavelEvento, setResponsavelEvento] = useState("");
  //  const [localEvento, setLocalEvento] = useState("");
  //  const [cursoEvento, setCursoEvento] = useState("");
  //  const [dataInicio, setDataInicio] = useState("");
  //  const [inicioInscricoes, setInicioInscricoes] = useState("");
  //  const [dataTermino, setDataTermino] = useState("");
  //  const [limiteInscricoes, setLimiteInscricoes] = useState("");
 
  //  // Função para fazer o POST com fetch
  //  const handleSubmit = async () => {
  //    const eventoData = {
  //      nome: nomeEvento,
  //      descricao: descricaoEvento,
  //      responsavel: responsavelEvento,
  //      local: localEvento,
  //      curso: cursoEvento,
  //      data_inicio: dataInicio,
  //      inicio_inscricoes: inicioInscricoes,
  //      data_termino: dataTermino,
  //      limite_inscricoes: limiteInscricoes,
  //    };
 
  //    try {
  //      const response = await fetch('http://127.0.0.1:8000/eventos/', {
  //        method: 'POST',
  //        headers: {
  //          'Content-Type': 'application/json', // Indica que está enviando JSON
  //        },
  //        body: JSON.stringify(eventoData), // Convertendo os dados do evento para JSON
  //      });
 
  //      if (response.ok) {
  //        // Se a resposta for 200 ou 201, significa que a requisição foi bem-sucedida
  //        alert('Evento cadastrado com sucesso!');
  //      } else {
  //        // Caso a requisição tenha algum erro, exibir mensagem
  //        alert('Erro ao cadastrar evento.');
  //      }
  //    } catch (error) {
  //      console.error('Erro ao enviar dados:', error);
  //      alert('Erro ao cadastrar evento.');
  //    }
  //  };
 

    return (
      <>
      <Header isLoginScreen></Header>
      <div className="titulo">
      <h4>Cadastro de Evento</h4>
      </div>
      <div className="frame">
        <div className="coluna">
          <Input 
          placeholder={"Adicione um nome"} 
          text={"Nome do evento"}
          // value={nomeEvento}
          // onChange={(e:any) => setNomeEvento(e.target.value)}
          />
          <Select></Select>
          <TextArea placeholder="Descreva seu evento" text="Descrição do evento"></TextArea>
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
              <DataInput text="Início das inscrições"></DataInput>
            </div>
            <div>
              <DataInput text="Data de termino"></DataInput>
              <DataInput text="Data limíte de inscrições"></DataInput>
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