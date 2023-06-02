import React, { useEffect, useLayoutEffect, useState } from 'react'

export const EjemploComponent = () => {
    const [mostrar, setMostrar] = useState(false);

    useLayoutEffect(()=>{
        console.log('useLayoutEffect: se ejecuta antes de mostrar nada en pantalla')
        
    }, [])

    useEffect(()=>{
        console.log('useEffect: se ejecuta despues de mostrar en pantalla')
        
    }, [mostrar])

  return (
      <div>
        <h3>Use Layout Effect</h3>
        <button onClick={() => setMostrar(prev => !prev)}>Mostrar mensaje</button>
        {mostrar && (
            <div id="caja">
                mensaje en la caja
            </div>
        )}
        
    </div>
  )
}
