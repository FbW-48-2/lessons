import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Alert ,Toast , Card } from 'react-bootstrap';

function App() {
 
  return (
    <div className="App">
      <h1> React App</h1>
      <button className="btn btn-success"> success button</button>
      <Button variant ="primary"> my button </Button>

      <Alert variant="warning">
        this is a simple alert 
      </Alert>  
       
      {
        [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ].map((variant, idx) => (
          <Alert key={idx} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        ))
      }

      <Toast>
      <Toast.Header>
        <img src="..." className="rounded me-2" alt="..." />
        <strong className="me-auto">Bootstrap</strong>
        <small >11 mins ago</small>        
      </Toast.Header>
      <Toast.Body>
        Hello, world! This is a toast message.
      </Toast.Body>
      </Toast>
      
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://source.unsplash.com/random" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
     </Card>
    </div>
  );
}

export default App;
