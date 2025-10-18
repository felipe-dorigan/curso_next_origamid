'use client';

import React from "react";

export default function IMC() {
    const [peso, setPeso] = React.useState('');
    const [altura, setAltura] = React.useState('');
    const [imc, setImc] = React.useState(0);

    function handleClick() {
        const alt = parseFloat(altura) / 100;
        const imcValue = parseFloat(peso) / (alt * alt);
        setImc(Number(imcValue.toFixed(2)));
    }

    return (
        <div>
            <label htmlFor="peso">Peso</label>
            <input 
                type="number" 
                id="peso" 
                name="peso" 
                placeholder="Peso (kg)"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
            />
            <label htmlFor="altura">Altura</label>
            <input 
                type="number" 
                id="altura" 
                name="altura" 
                placeholder="Altura (cm)" 
                step="0.01"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
            />
            <button onClick={handleClick}>Calcular</button>
            <p>Seu IMC é: {imc}</p>
        </div>
    )
}