import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Tabs, TabPane} from 'react-router-dom';
import Garage from './components/Example/Example/Example';
import Example from './components/Example/Example/Example_01';
import Demo from './components/Authentication/LoginForm';
import MainTable from './components/Table/Table';
import Example02 from './components/Example/Example/Example_02';
import LayoutExample from './components/Example/Example/Example_03';
import AppLayout from './components/Example/Example/Example_04';
import TabExample from './components/Example/Example/Example_05';
import NotFound from './components/Authentication/NotFound';


function App() {
  const value = {name:"Manish", age:27};
  return (
    <div>
      <Router>
        <TabExample />
        <ul>
          <li>
            <Link to="/table">Table</Link>
          </li>
          <li>
            <Link to="/grid">Grid</Link>
          </li>
          <li>
            <Link to="/layout">Layout</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/table' exact element={<MainTable />} />
          <Route path='/grid' element={<Example02 />}/>
          <Route path='/layout' element={<AppLayout />}/>
          <Route path='/*' element={<NotFound />}/>
        </Routes>
      </Router>
    </div>
    // <div className='App'>
    //  <h1 className='title'>This is my first react app!</h1>
    //  <Garage /><br></br>
    //   <Example info={value}/>
    //   <Demo />
    //   <MainTable />
    //   <Example02 />
    //   <LayoutExample />
    //   <AppLayout />
    //   <div>
    //     <TabExample />
    //   </div>
    // </div>
  );
}


export default App;