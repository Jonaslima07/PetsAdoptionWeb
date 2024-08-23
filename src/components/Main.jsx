import itens from '../dataset/Carrosel'; 
import animais from '../dataset/Servicos'; 
import Carrosel from './Carrosel';
import ServicoCard from './ServicosCard';
import { useState } from 'react';
import AdotarTable from './TableAdocao';
import animaisAdocao from '../dataset/Animais';

const Main = () => {
  const [animaisDate] = useState(animais); 
  const [Disponiveis] = useState(animaisAdocao); 

  return (
    <main>
      <Carrosel itens={itens} />
      <ServicoCard animais={animaisDate} />
      <AdotarTable animais={Disponiveis} />
    </main>
  );
};

export default Main;
