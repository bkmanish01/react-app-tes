import './App.css';
import Garage from './components/Example/Example/Example';
import Example from './components/Example/Example/Example_01';



function App() {
  const value = {name:"Manish", age:27};
  return (
    <div className='App'>
     <h1 className='title'>This is my first react app!</h1>
     <Garage /><br></br>
      <Example info={value}/>
    </div>
  );
}


export default App;