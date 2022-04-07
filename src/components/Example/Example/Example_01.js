import { useEffect, useState } from "react";
import './example.css';


const Example = (props) => {
    
    //example components
    const data = props?.info;

    const [value, setValue] = useState();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // did mount
        if(visible){
            setValue(data);
        }
        else {
            setValue();
        }

        // unmount
        return () => {
            console.log("Component Unmount");
        };
    },[visible, data]);  // Dependency array to update/re-render the dom

    return (
        <div className="expense-item" onClick={() => setVisible(!visible)}>
            <div>March 11, 2022 </div>
            <div className="expense-item_description">{value?.name}</div>
            {visible && <div className="expense-item_prise">{value?.age}</div>}
        </div>
    );
};

export default Example;