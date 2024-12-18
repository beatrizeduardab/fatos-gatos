import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FatoContainer = styled.div`
  background-color: #f0f8ff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 500px;
  margin: 20px auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const FatoTexto = styled.p`
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #e63946;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #d62828;
  }
`;
const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

function FatosSobreGato() {
  const [fatos, setFatos] = useState(''); // Estado para armazenar o fato
  const [loading, setLoading] = useState(true);

  // Função para buscar o fato
  const fetchFato = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://cat-fact.herokuapp.com/facts/random?animal-type=cat&amount=3"
      );
      const data = await response.json();
      setFatos(data); // Atualiza com a lista de fatos
    } catch (error) {
      console.error("Erro ao pegar os fatos:", error);
      setFatos([{ text: "Erro ao buscar fatos. Tente novamente!" }]);
    } finally {
      setLoading(false); // Desativa o loader
    }
  };

  // useEffect para buscar o fato quando o componente for carregado
  useEffect(() => {
    fetchFato();
  }, []);

  return (
    <FatoContainer>
      <h2>Fatos Aleatórios</h2>
      {loading ? (
        <Loader />
      ) : (
        fatos.map((fato, index) => (
          <FatoTexto key={index}>{fato.text}</FatoTexto>
        ))
      )}
      <Button onClick={fetchFato}>Carregar Novos Fatos</Button>
    </FatoContainer>
);
}

export default FatosSobreGato;
