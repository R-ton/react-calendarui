import logo from './logo.svg';
import './App.css';

import { Button, NextUIProvider,Card,Text,Link, Row } from '@nextui-org/react';
import { useEffect, useState } from 'react';
function ShowDate(){
  let [currDate, setCurrDate] = useState(new Date().toLocaleTimeString());
  useEffect(()=>{
    const timer = setInterval(()=>{
      setCurrDate(currDate = new Date().toLocaleTimeString());
    },1000);
    return ()=> clearInterval(timer);
  },[currDate])
  function spacingTimeLetter(time){
    const strTime = time.split(':').join(' : ');
    return strTime;
  }
  return(
    <Row justify="center" align="center">
      <h1>{spacingTimeLetter(currDate)}</h1>
    </Row>
  );
}

function ButtonSpan(){
  let[show, setState] = useState(false);
  function handleClick(){
    setState(show = !show);
  }
  return(
    <div>
      <Button onClick={handleClick}>{show ? 'Ok i see it !!' : 'What it\'s about ?'}</Button>
      {show && <span>🚀 Beautiful and modern React UI library.</span>}
    </div>
  );
}

function Main(){
  function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString(['EN'],options);
  }
  return(
    <Card css={{ mw: "80%", mh: "500px", bc: "#121212" }}>
       <Row justify="center" align="center">
          <Text h4 color="white">Today is : </Text>
       </Row>
       <Row justify="center" align="center">
          <Text h1 color="white" css={{fs: "80px"}}>{formatDate(new Date())}</Text>
       </Row>
        <Row justify="center" align="center">
          <Text h2 color="white">Current time at you're timezone</Text>
        </Row>
        <ShowDate></ShowDate>
        {/* <Text color="white">🚀 Beautiful and modern React UI library.</Text> */}
        <ButtonSpan></ButtonSpan>
        <Card.Footer>
          <Link
            target="_blank"
            css={{ color: "white" }}
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </Card.Footer>
    </Card>
  );
}

function App() {
  return (
        /* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */

          // <head>{CssBaseline.flush()}</head>
            <NextUIProvider>
              <div className="App">
                <header className="App-header">
                  <Main />
                </header>
              </div>
            </NextUIProvider>
        
  );
}

export default App;
