import './App.css';
import styled from 'styled-components';
import Card from './components/Card/Card';


function App() {
    return <Card/>

}

export default App;


const Field = styled.input.attrs(({placeholder}) => ({
    placeholder: placeholder || "default title"
}))`
  padding: 5px 15px;
  margin: 10px 0;
  width: 100%;
  font-size: 1rem;
`;

const Checkbox = styled.input.attrs(() => ({type: "checkbox", checked: true}))``