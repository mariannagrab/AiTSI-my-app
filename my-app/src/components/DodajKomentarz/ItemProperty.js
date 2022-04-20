import React from 'react';
function ItemProperty(props) {

    return (<div className='addcommfield'>
    <label>{props.label}:</label>
        <input type="text" placeholder={props.placeholder} name={props.name} value={props.value} onChange={(event) => props.savePropInput(event)} />       
    </div>
    )
}

export default ItemProperty;