import "./App.css";
import {useState, useEffect, useRef} from "react";
import { Sub } from "./interface/Subs";
import List from "./components/List";
import Form from "./components/Form";

const initialState = [
  {
    nick: 'Josue',
    subsMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Josue tiene mucho conocimiento'
  },
  {
    nick: 'Cesar',
    subsMonths: 5,
    avatar: 'https://i.pravatar.cc/150?u=midu',
  }
]


function App() {
  const [subs, setSubs] = useState<Sub[]>([]);
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(initialState)
  }, [])


  const handleNewSub = (newSub: Sub):void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Midu subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub}/>
    </div>
  )
 
}

export default App;
