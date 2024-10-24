import { useState } from 'react';
import './App.css'
import Disciplinas from './Disciplinas.jsx';
import NovaDisciplina from './NovaDisciplina.jsx';


function App() {

  const disciplinas = [
    {
      dataAvalia: new Date(2022,6,1),
      nome: 'AED',
      valorNota: 14
    },

    {
      dataAvalia: new Date(2023,6,1),
      nome: 'IP',
      valorNota: 16
    },

    {
      dataAvalia: new Date(2023,6,1),
      nome: 'PDM',
      valorNota: 17
    },

    {
      dataAvalia: new Date(2022,6,1),
      nome: 'ArQC',
      valorNota: 15
    },
    {
      dataAvalia: new Date(2024,6,1),
      nome: 'ESW',
      valorNota: 16
    }
  ]
  const [filteredYear, setFilteredYear] = useState("");
  const filterHandler = (event) =>{
    setFilteredYear(event.target.value);
  }
  const disciplinasFiltradas = disciplinas.filter((disciplina) => {
    return filteredYear === "" || disciplina.dataAvalia.getFullYear().toString() === filteredYear;
  })
  return(
    <div>
        <NovaDisciplina>{}</NovaDisciplina>
        <div className='disciplinas-filter'>
          <div className="disciplinas-filter__control ">
            <label htmlFor="">Filtrar Ano</label>
            <select name="" id="" value={filteredYear} onChange={filterHandler}>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="">Todas</option>
            </select>
          </div>
        </div>
        
        <Disciplinas listaDisciplinas = {disciplinasFiltradas}/>
        

    </div>


  );
}

export default App
