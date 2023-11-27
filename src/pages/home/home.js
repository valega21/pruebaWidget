import React, { useState } from "react";
import "./home.sass";
import Medallero from "components/medallero/medallero";


export default function HomePage({type, longitud}) {

    return (
        <div className="principal">


            <Medallero longitud={10}/>
            
        </div>
    )
}
