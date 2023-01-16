import { useState } from 'react'
import styles from './App.module.css'
import poweredImage from './assets/powered.png'
import leftArrowImage from './assets/leftarrow.png'
import { GridItem } from './components/GridItem'

import { levels, calculateImc, Level } from './helpers/imc'


const App = () => {
  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)
  const [toShow, setToShow] = useState<Level | null>(null)

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert('Ingrese los datos correctamente')
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="Logo" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calculadora del IMC para adultos</h1>
          <p>Esta calculadora proporciona el IMC y la correspondiente categoría de nivel de peso según el IMC. Utilícela para adultos de 20 años o más.</p>
        <input
        type='number'
        placeholder='Ingrese su estatura. Ej: 1.70 (en metros)'
        value={heightField > 0 ? heightField : ''}
        onChange={e => setHeightField(parseFloat(e.target.value))}
        disabled={toShow ? true : false }
        />
                <input
        type='number'
        placeholder='Ingrese su peso. Ej: 70 (en kilogramos)'
        value={weightField > 0 ? weightField : ''}
        onChange={e => setWeightField(parseFloat(e.target.value))}
        disabled={toShow ? true : false }
        />

        <button onClick={handleCalculateButton} disabled={toShow ? true : false }>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item} />
            ))}
          </div>
          }
          {toShow &&
          <div className={styles.rightBig}>
            <div className={styles.rightArrow} onClick={handleBackButton}>
              <img src={leftArrowImage} alt="right arrow" width={25} />
            </div>
            <GridItem item={toShow}/>
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App