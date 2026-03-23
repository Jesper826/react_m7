import './App.css'
import { AboutMe } from '../aboutme/aboutme';
import { Top10 } from '../top10/Top10';
import { Card } from '../card/Card';
import { Cookie } from '../cookie/cookie';
import { Cat } from '../cat/cat';
function App() {
  return (
    <>
      <Cookie/>
      <AboutMe/>
      <Top10/>   
      <Card name="jap"/>
      <Card name="jap2"/>
      <Card name="jap3"/>
      <Card name="jap4"/>
      <Cat/>
    </>
  )
}

export default App
