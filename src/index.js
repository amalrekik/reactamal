import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {MDBFooter, MDBContainer, MDBCol, MDBRow, MDBIcon, MDBBtn} from 'mdb-react-ui-kit';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';




function Navbarr() {
  return (
    <Navbar style={{backgroundColor:'rgb(236, 218, 235)'}}>
    <Container >
      <Navbar.Brand href="#" ><h1 className="fleur">Flora.tn</h1></Navbar.Brand>
      <Navbar.Brand href="#body"><h5 href="#body">Home </h5></Navbar.Brand>
    </Container>
  </Navbar>
  );
}

function Tp (im){
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {setIsActive(current => !current);};

  return(
  <Card >
        <Card.Img variant="top" src={im.sc} />
        <Card.Body>
          <Card.Title>{im.t}</Card.Title>
          <Card.Text>
            {im.des}
          </Card.Text>
          <Button variant="outline-danger" style={{backgroundColor: isActive ? 'red' : '',}} onClick={handleClick} >&#128150; </Button>{' '}
        </Card.Body>
       
      </Card>
      );
}



function Body(){
  const [isActive, setIsActive] = useState(false);
  const [isActiv, setIsActiv] = useState(false);
  const [isActiv1, setIsActiv1] = useState(false);
  const [isActiv3, setIsActiv3] = useState(false);
  const [isActiv4, setIsActiv4] = useState(false);
  const [isActiv5, setIsActiv5] = useState(false);
  const handleClick = () => {setIsActive(current => !current);};
  const handleClick0 = () => {setIsActiv(current => !current);};
  const handleClick1 = () => {setIsActiv1(current => !current);};
  const handleClick3 = () => {setIsActiv3(current => !current);};
  const handleClick4 = () => {setIsActiv4(current => !current);};
  const handleClick5 = () => {setIsActiv5(current => !current);};
  const [counter, setCounter] = useState(0)
  const [prix, setPrix] = useState(0)
  const handleClick2 = () => {setPrix(prix + 50); setCounter(counter + 1)}
  return(
    <div id="body">
    <div className="emojis">
  
      <Button variant="outline-primary"  style={{backgroundColor: isActiv ? 'blue' : '',}} onClick={handleClick0} >&#128531;</Button>{' '}
      <Button variant="outline-secondary"style={{backgroundColor: isActive ? 'grey' : '',}} onClick={handleClick}  >&#128512;</Button>{' '}
      <Button variant="outline-success" style={{backgroundColor: isActiv1 ? 'green' : '',}} onClick={handleClick1}  >&#128077;</Button>{' '}
      <Button variant="outline-warning" style={{backgroundColor: isActiv3 ? 'yellow' : '',}} onClick={handleClick3}  >&#128078;</Button>{' '}
      <Button variant="outline-danger" style={{backgroundColor: isActiv4 ? 'red' : '',}} onClick={handleClick4}  >&#128150;</Button>{' '}
      <Button variant="outline-info" style={{backgroundColor: isActiv5 ? 'pink' : '',}} onClick={handleClick5}   >&#128525;</Button>{' '}


      </div>

       <CardGroup className='photos'>
             <Tp t = "Bouquet intime" des = "description de la photo 1" sc = {"/photo/f1.jpg"} className='photoo'/>
             <Tp t = "Fleure sauvage" des = "description de la photo 2" sc = {"/photo/f2.jpg"} className='photoo'/>
             <Tp t = "Fleure de jardin" des = "description de la photo 3" sc = {"/photo/f3.jpg"} className='photoo'/>
       </CardGroup>
       <Card className="text-center">
      <Card.Header ><h3 className="fb">Flora bouquet</h3></Card.Header>
      <Card.Body>
        <Card.Title>bouquet de mariage à 50dt <Badge bg="danger">New</Badge></Card.Title>
        <div>
        
      <img src="/photo/f4.jpg" alt="BOUQUET" width={"30%"}/>
      </div>
        <Card.Text className="para">
          notre cite vous offre une livraison rapide de votre bouquet frais et plain de vie.
          pour commander un bouquet pour votre mariage cliquer sur "commander" aprer donner votre mail et votre numero de tel
        </Card.Text>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Votre adresse mail</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Votre mail est privé.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formNumber">
        <Form.Label>Numero de telephone</Form.Label>
        <Form.Control type="tel" placeholder="numero de tel" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="confirmer" />
      </Form.Group>
     
    </Form>


        <Button variant="success" onClick={handleClick2}>commander {counter} bouquet à {prix} dt</Button>
      </Card.Body>
      <Card.Footer className="text-muted">new option</Card.Footer>
    </Card>

</div>
  )
}

function Footerr(){
  return(
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgb(236, 218, 235)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='#'>
          Flora.tn
        </a>
      </div>
    </MDBFooter>
  )
}

function Root () {
  // render(){
    return(
      <div className='page'>
        <Navbarr />
        <Body />
        <Footerr />
      </div>
    )
  }
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />)

