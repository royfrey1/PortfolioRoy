import React from 'react'

import Formulario from './formulario';

function App(){
    return(
        <>
            <form>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Roy Frey" />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="emali" placeholder="royfrey@protonmail.com" />
                </div>
                <button type="submit" >
                    Enviar
                </button>
            </form>
        </>
    );
}


export default App;