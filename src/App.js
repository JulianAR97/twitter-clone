import './App.css';
import Nav from './Nav'
import Home from './pages/Home'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col id="sidebar" xs="1" md="3">
            <Nav></Nav>
          </Col>
          <Col id="main-content" xs="11" md="9">
            <Home></Home>
          </Col>
        </Row>
      </Container>
    </div>
 
  );
}

export default App;
