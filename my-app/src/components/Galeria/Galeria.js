import React from "react";
import {  useState } from "react";
import { PicList } from "./PicList";
import './Galeria.css';


function Galeria() {
    const [currImg, setCurrImg] = useState(0);

    return (<section>
        <div className="gallery">

            <div className="carusell">
                <div className="insides" style={{ backgroundImage: `url(${PicList[currImg].img})` }} >
                    <div
                        className="left"
                        onClick={() => {
                            currImg > 0 && setCurrImg(currImg - 1);
                        }}
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div className="center">
                    </div>
                    <div
                        className="right"
                        onClick={() => {
                            currImg < PicList.length - 1 && setCurrImg(currImg + 1);
                        }}
                    >
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>);

}

export default Galeria;