import { Card, Col, Container, Row, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrement, increment, nextRound, reset} from './redux/counterSlice';

function App() {

  const energy = useSelector((state) => state.counter.energy)
  const round = useSelector((state) => state.counter.round)
  const dispatch = useDispatch()



  // const [energy,setEnergy] = useState(3);
  // const [round, setRound] = useState(1);


  // const handleNextRound = () => {
  //   setRound(round + 1);
  //   energy >= 9 ? setEnergy(10) : setEnergy(energy + 2);
  // }


  return (
    <div className="App">
        <Container fluid={true} className="justify-content-center">
            <Row>
                <Col xs={12} md={12} lg={12}>
                    <Card>
                        <Card.Body className={round >= 10 ? 'text-center bg-danger':'text-center'}>
                              <Alert variant="secondary"><h1>Round {round}</h1></Alert>
                            <h1 style={{
                                fontSize:'12em'
                              }}>
                                {energy}/10
                            </h1>
                            <div>
                                <Row>
                                  <Col xs={6} lg={6} className="col col-md-6 p-2">
                                      <Button className="btn-block w-100" variant="dark" size="lg"
                                          // onClick={() => { energy === 10 ? setEnergy(10) : setEnergy(energy + 1) }}
                                          onClick={() => { dispatch(increment()) }}
                                          >
                                          <h1>+</h1>
                                        </Button>
                                  </Col>
                                  <Col xs={6} lg={6} className="col col-md-6 p-2">
                                    <Button className="btn-block w-100" variant="dark" size="lg"
                                        // onClick={() => { energy === 0 ? setEnergy(0) : setEnergy(energy - 1) }}
                                        onClick={() => { dispatch(decrement()) }}
                                        ><h1>-</h1>
                                    </Button>
                                  </Col>
                                  <Col xs={6} className="col col-md-6 p-2">
                                    <Button className="btn-block w-100" variant="dark" size="lg"
                                        // onClick={handleNextRound}
                                        onClick={() => { dispatch(nextRound()) }}
                                        ><h1>Next Round</h1>
                                    </Button>
                                  </Col>
                                  <Col xs={6} className="col col-md-6 p-2">
                                      <Button className="btn-block w-100" variant="dark" size="lg"
                                          // onClick={() => { setEnergy(3); setRound(1) }}
                                          onClick={() => { dispatch(reset()) }}
                                          >
                                          <h1>Reset</h1>
                                        </Button>
                                  </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
