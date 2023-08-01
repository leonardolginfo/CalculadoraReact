
import {ButtonContainer} from './styles';


const Button = ({label, onClick}) => {
    return (
      <div className="App">
        <header className="App-header">
          <ButtonContainer onClick={onClick}>
            {label}
          </ButtonContainer>
          
    
        </header>
      </div>
    );
  }
  
  export default Button;
  