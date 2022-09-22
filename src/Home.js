import React, {useState} from 'react';
import State from './Componets/State';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePageComponent = ()=>{
    let [myvalue, setMyvalue] = useState('Rohit Azad');
    const handleClick = ()=>{
      return  (
        setMyvalue(myvalue = 'React Js')
      )
    }
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <State mystate={myvalue}/>
                        <Alert variant="secondary">This is my  alert</Alert>
                        <input value={myvalue} type="text" onChange={(e)=>{
                            setMyvalue(myvalue = e.target.value)
                        }} />
                        <button onClick={()=>{
                            handleClick();
                        }}>
                            Click me
                        </button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePageComponent;