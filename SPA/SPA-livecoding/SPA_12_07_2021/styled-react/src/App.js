 
import './App.css';
import styled from 'styled-components';
import Button from './Components/Button.js';
import Paragraph from './Components/Paragraph';
function App() {
  const H1 = styled.h1`
    color:blue;
    background:lightblue;
  `;

  const StyledBtn = styled.button`
  color: white;
  background:blue;
  padding: 10px 15px;
  cursor:pointer;
  `

  return (
    <div className="App">
       <h1 style ={{ color:'blue' ,
                     background :'lightblue'
                    

      }}  > Styled Components</h1>
      <H1>  this is example about h1  </H1>
      <StyledBtn > click me</StyledBtn>
      <Button> click me</Button>
      <Paragraph>
        this is simple paragraph component
      </Paragraph>
    </div>
  );
}

export default App;
