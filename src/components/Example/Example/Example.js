import React, { useState } from 'react';


function Car(props){
    return <h2>This is a {props.brand.model}!</h2>
}

function Garage(){
    const [car, setCar] = useState({name: "Ford", model:"Mustang"});

    return (
        <>
            <h2>What car is in the Garage?</h2>
            <Car brand={car} />
            <button style={{backgroundColor:"red"}} onClick={() => setCar({model:"Hammer"})} />
        </>
    );
}

export default Garage;



