import NotaDisciplina from "./NotaDisciplina";
import './Disciplinas.css';
import Card from "./Card";

function Disciplinas(props){

const disciplinas = props.listaDisciplinas;

    return(
        <Card className="disciplinas">
            {
                disciplinas.map((disci) => {
                    return(<NotaDisciplina
                        nome = {disci.nome}
                        valorNota = {disci.valorNota}
                        dataAvalia = {disci.dataAvalia}
                    />)
                    
                })
            }
        </Card>
    )
}

export default Disciplinas;