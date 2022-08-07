import Layout from "./Layout";
import GlobalStyles, { Switcher } from "./Styles/GlobalStyles";

import { ThemeProvider } from 'styled-components';
import { useState } from "react";

import ThemeOff from './Assets/ThemeOff.png'
import ThemeOn from './Assets/ThemeOn.png'



const temaClaro = {
  body: 'white',
  text: 'black'
}
const temaEscuro = {
  body: 'black',
  text: 'white'
}



function App() {

  const [tema, setTema] = useState(false);

  const mudarTema = () => {
    setTema((tema) => !tema);
  }

  return (
    <ThemeProvider theme={tema ? temaEscuro : temaClaro}>
    <Switcher src={ tema ? ThemeOn : ThemeOff } onClick={mudarTema} />
      <GlobalStyles/>
      <Layout/>
    </ThemeProvider>
  );
}

export default App;
