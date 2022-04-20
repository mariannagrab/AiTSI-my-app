import React from "react";
import './OFigure.css';
import gory from "../../images/gory.jpg";
import strona from "../../images/strona.jpg";
import walidacja from "../../images/walidacja.jpg";

function OFigure (props){
     function choosePic(){
         if (props.name === "gory"){
        return  <img src={gory} 
        alt="Biała góra a za nią jasno niebieskie niebo przechodzące w ciemny niebieski" 
        />
     }else if(props.name === "strona") {
        return  <img src={strona} 
        alt="Biała góra a za nią jasno niebieskie niebo przechodzące w ciemny niebieski" 
        />  
     }else if(props.name === "walidacja") {
        return  <img src={walidacja} 
        alt="Biała góra a za nią jasno niebieskie niebo przechodzące w ciemny niebieski" 
        />  
     }  

    }
   
        return (<figure>
            <div className="photos" >
                <div className="photo">
                    {choosePic()}
                    <figcaption>White mountain with blue sky</figcaption>
                </div>
            </div></figure>);
}

export default OFigure;