import React, {useEffect, useState} from "react";
import getMedallero from '../../services/getMedallero.js';
import "./medallero.sass";


export default function Medallero({longitud}) {

    const [datos, setDatos] = useState(null);
    const [ordenAlfabetico, setOrdenAlfabetico] = useState(false); // por defeto A-Z al presionar Z-A
    const [ordenOro, setOrdenOro] = useState(false); // mayor a menor 
    const [ordenPlata, setOrdenPlata] = useState(false); // mayor a menor
    const [ordenBronce, setOrdenBronce] = useState(false); // mayor a menor 
    const [ordenTotal, setOrdenTotal] = useState(false); // mayor a menor 

    useEffect(() => {
        getMedallero()
            .then(medallas => {
                setDatos(medallas.data)
            })
    }, [])

    const FilterAlfabetico = () =>{
        if(ordenAlfabetico){
            setOrdenAlfabetico(false);
        }
        else{
            setOrdenAlfabetico(true);
            setOrdenOro(false);
            setOrdenPlata(false);
            setOrdenBronce(false);
            setOrdenTotal(false);
        }
    }

    const FilterGold = () =>{
        if(ordenOro){
            setOrdenOro(false);
        }
        else{
            setOrdenOro(true);
            setOrdenAlfabetico(false);
            setOrdenPlata(false);
            setOrdenBronce(false);
            setOrdenTotal(false);
        }
    }

    const FilterSilver= () =>{
        if(ordenPlata){
            setOrdenPlata(false);
        }
        else{
            setOrdenPlata(true);
            setOrdenAlfabetico(false);
            setOrdenOro(false);
            setOrdenBronce(false);
            setOrdenTotal(false);
        }
    }

    const FilterBronce = () =>{
        if(ordenBronce){
            setOrdenBronce(false);
        }
        else{
            setOrdenBronce(true);
            setOrdenAlfabetico(false);
            setOrdenOro(false);
            setOrdenPlata(false);
            setOrdenTotal(false);
        }
    }

    const FilterTotal= () =>{

        if(ordenTotal){
            setOrdenTotal(false);
        }
        else{
            setOrdenTotal(true);
            setOrdenAlfabetico(false);
            setOrdenOro(false);
            setOrdenPlata(false);
            setOrdenBronce(false);
        }
        
    }


    console.log(" datossss... ", datos)


    
    return (
    <div className="medallero-container">

        <div className="medallero-header">
            <div className="medallero-header-equipo" onClick={FilterAlfabetico}>
                Equipo
            </div>

            <div className="medallero-header-medallas">
                <div onClick={FilterGold}>Oro</div>
                <div onClick={FilterSilver}>Plata</div>
                <div onClick={FilterBronce}>Bronce</div>
            </div>

            <div className="medallero-header-total" onClick={FilterTotal}>
                Total
            </div>

        </div>

        {datos && datos.map((pais,indice) => (
        String(pais.organization).length > 0 && (((indice +1) <= longitud && longitud) || (!longitud))&&
            <div key={pais._id}>
                <div className="line"></div>
                <div className="medallero-body">
                <div className="medallero-body-equipo">
                    <img
                    className="medallero-body-equipo-img"
                    src="https://gstatic.olympics.com/s1/t_s_pog_flag_x2/f_auto/static/flag/4x3/au"
                    alt="flag-icon"
                    />
                    <p className="medallero-body-equipo-name">{pais.organization}</p>
                </div>
                <div className="medallero-body-medallas">
                    {String(pais.gold).length !== 0 
                        ? <span className="oro">{pais.gold}</span>
                        : <span className="medallero-body-medallas-vacia">-</span>
                    }
                    {String(pais.silver).length !== 0 
                        ? <span className="silver">{pais.silver}</span>
                        : <span className="medallero-body-medallas-vacia">-</span>
                    }
                    {String(pais.bronze).length !== 0 
                        ? <span className="bronce">{pais.bronze}</span>
                        : <span className="medallero-body-medallas-vacia">-</span>
                    }
                </div>
                <div className="medallero-body-total">
                    <p className="">{pais.total}</p>
                </div>
                </div>
            </div>
        ))}
       

    </div>

    )
}
