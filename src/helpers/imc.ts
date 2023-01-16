////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// COMENTARIO GENERADO POR CHATGPT-3 /////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Este código es una implementación de una función en TypeScript para calcular el índice de masa corporal (IMC) de una persona.
// La primera parte del código define un tipo "Level" que contiene los campos "title", "color", "icon", "imc" y "yourImc". 
// Luego se define una constante llamada "levels" que es una matriz de objetos "Level" con cuatro elementos. 
// Cada elemento contiene información sobre un rango de IMC (por ejemplo, "Peso inferior al normal" con un IMC entre 0 y 18.4) y un color y un icono asociados.
// La segunda parte del código es una función llamada "calculateImc" que tiene dos parámetros, "height" y "weight". 
// La función primero comprueba si los valores proporcionados son válidos y, si no lo son, devuelve "null". 
// Si los valores son válidos, la función calcula el IMC utilizando la fórmula "weight / (height * height)". 
// Luego, utiliza un bucle "for" para recorrer cada uno de los elementos de la matriz "levels" y comprueba si el IMC calculado se encuentra en el rango de IMC de ese nivel. 
// Si es así, la función devuelve una copia del objeto "Level" con el campo "yourImc" agregado al objeto y contiene el IMC calculado. 
// Si ninguno de los niveles tiene un rango que incluya el IMC calculado, la función devuelve "null".




export type Level = {
    title: string;
    color: string;
    icon: 'up' | 'down';
    imc: number[];
    yourImc?: number;
    firstInfo?: string;
    secondInfo?: string;
    thirdInfo?: string;
}

export const levels: Level[] = [
    { title: 'Bajo peso', color: '#96A3AB', icon: 'down', imc: [0, 18.4], firstInfo: 'lo que indica que su peso esta en la categoría de Bajo peso para adultos de su estatura. El IMC es una medida de detección y no para diagnosticar enfermedades o padecimientos.', secondInfo: 'Hable sobre su categoría de IMC con su proveedor de atención médica, ya que puede estar relacionado con su salud y bienestar general. Su proveedor de atención médica podría determinar posibles razones del bajo peso y recomendar apoyo o tratamiento.', thirdInfo: 'Mantener un peso dentro del rango saludable de IMC es importante para la salud general a medida que envejece. Para obtener más información sobre como incorporar hábitos saludables.' },
    { title: 'Peso saludable', color: '#0EAD69', icon: 'up', imc: [18.5, 24.9], firstInfo: 'lo que indica que su peso esta en la categoría de Peso saludable para adultos de su estatura. El IMC es una medida de detección y no para diagnosticar enfermedades o padecimientos.', secondInfo: 'Mantener un peso dentro del rango saludable de IMC es importante para la salud general a medida que envejece. Para obtener más información sobre como incorporar hábitos saludables.'},
    { title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 29.9], firstInfo: 'lo que indica que su peso esta en la categoría de Sobrepeso para adultos de su estatura. El IMC es una medida de detección y no para diagnosticar enfermedades o padecimientos. Para obtener más información, visite Acerca del índice de masa corporal para adultos.', secondInfo: 'Hable sobre su categoría de IMC con su proveedor de atención médica, ya que puede estar relacionado con su salud y bienestar general. Su proveedor de atención médica podría determinar posibles razones del sobrepeso y recomendar apoyo o tratamiento. Tener exceso de peso puede aumentar el riesgo de enfermedades crónicas, como presión arterial alta, diabetes tipo 2 y colesterol alto. ', thirdInfo: 'Mantener un peso dentro del rango saludable de IMC es importante para la salud general a medida que envejece. Para obtener más información sobre como incorporar hábitos saludables.' },
    { title: 'Obesidad', color: '#C3423F', icon: 'down', imc: [30, 99], firstInfo: 'lo que indica que su peso esta en la categoría de Obesidad para adultos de su estatura. El IMC es una medida de detección y no para diagnosticar enfermedades o padecimientos. Para obtener más información, visite Acerca del índice de masa corporal para adultos.', secondInfo: 'Hable sobre su categoría de IMC con su proveedor de atención médica, ya que puede estar relacionado con su salud y bienestar general. Su proveedor de atención médica podría determinar posibles razones del sobrepeso y recomendar apoyo o tratamiento. Tener exceso de peso puede aumentar el riesgo de enfermedades crónicas, como presión arterial alta, diabetes tipo 2 y colesterol alto.', thirdInfo: 'Mantener un peso dentro del rango saludable de IMC es importante para la salud general a medida que envejece. Para obtener más información sobre como incorporar hábitos saludables.' },
]

export const calculateImc = (height: number, weight: number) => {
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        return null;
    }
    const imc = weight / (height * height);

    for (const level of levels) {
        if(imc >= level.imc[0] && imc < level.imc[1]) {
            let levelCopy = {...level};
            levelCopy.yourImc = parseFloat(imc.toFixed(2));
            return levelCopy;
        }
    }
    return null;
}