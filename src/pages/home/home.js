import React, { useState } from "react";
import "./home.sass";
import Medallero from "components/medallero/medallero";


export default function HomePage({type, longitud}) {

    const url = window.location.href;
    const parametros = new URLSearchParams(new URL(url).search);//

    // Obten valores específicos de los parámetros
    const valorParametro1 = parametros.get('longitud');
    const valorParametro2 = parametros.get('type');

    console.log(" parametro url... ", valorParametro1)

    return (
        <div className="principal">


            <Medallero longitud={valorParametro1}/>
            
        </div>
    )
}
