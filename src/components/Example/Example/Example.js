import React, { useState } from 'react';
import './example.css';


function Car(props){
    return <h2>This is a {props.brand.model}!</h2>
}

function Garage(){
    const [car, setCar] = useState({name: "Ford", model:"Mustang"});

    return (
        <div className='props'>
            <h2>What car is in the Garage?</h2>
            <Car brand={car} />
            <button id="btn" onClick={() => setCar({model:"Hammer"})}>Click Me</button>
        </div>
    );
}

export default Garage;



