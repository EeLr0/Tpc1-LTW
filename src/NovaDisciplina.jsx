import './NovaDisciplina.css'

const NovaDisciplina = () => {
    return(
        <div className='new-disciplina'>
            <form>
                <div className='disciplina__controls'>
                    <div className='new-disciplina__control'>
                        <label>Disciplina</label>
                        <input type="text"/>
                    </div>
                    <div className='new-disciplina__control'>
                        <label>Nota</label>
                        <input type="number" min="0" step="1" max="20"/> 
                    </div>
                    <div className='new-disciplina__control'> 
                        <label>Data</label>
                        <input type="date" min="2010-01-01" step="1" max="2050-12-31"/>
                    </div>
                </div>

                <div className='new-disciplina__actions'>
                    <button className=''>Adicionar Disciplina</button>
                </div>
            </form>
        </div>
        
    );
};

export default NovaDisciplina;