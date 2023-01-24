import '../Banner/style.css';
import styled from 'styled-components';

export default function Banner(){
    return(
        <div>
        {/* estilo css padrao */}
        <div className='container'>
            <TitleReact TituloProp='Qualquer Texto' />
            <p className='subtitle'>texto qualquer</p>
        </div>

        <Container >
            <Title>teste styled</Title>
            <Subtitle autorizado={false}>texto qualquer</Subtitle>
        </Container>


        </div>
    )
}


function TitleReact(props){
    return(
        <h1>{props.TituloProp}</h1>


    )
}
//autorização: true || false

const Container = styled.div`
    background-color: grey;
    border: solid 2px red;
    text-align: center;
    padding: 20px;
    background-image: url(https://img.freepik.com/vetores-gratis/vetor-de-fundo-de-padrao-geometrico-branco-e-dourado_53876-140726.jpg?w=2000);


    :hover{
        background-image:none;
    }
/* 
    h1{
        font-size: 30px;
        text-transform: uppercase;
    } */


`

const Title = styled.h1`
    font-size: 30px;
    text-transform: uppercase;
`

const Subtitle = styled.p`
        font-size:  ${props => props.autorizado ? '30px' : '50px'};
        color:  ${props => props.autorizado ? 'green' : 'red'};
        font-weight: 700;
`