import { useState } from 'react'
import poweredImage from './assets/img/powered.png';
import leftArrow from './assets/img/leftarrow.png';
import './App.css'

import { levels, calculateImc, Levels } from './helpers/imc';
import { GridItem } from './components/GridItem/index';

function App() {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Levels | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert('Digite todos os campos.');
    }
  }
  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <>
      <div className='p-5'>
        <header>
          <div className='max-w-7xl my-10 mx-auto'><img className='w-36' src={poweredImage} alt='' /></div>
        </header>
      </div>
      <div className='flex text-black max-w-7xl my-10 mx-auto p-5 max-lg:block'>

        <div className='flex-1 mr-20 max-lg:mr-0'>
          <h1 className='m-0 text-4xl text-cyan-950 mb-5'>Calcule o seu IMC.</h1>
          <p className='text-base mb-10 text-slate-400'>O IMC é um cálculo simples que permite avaliar se a pessoa está dentro do peso que é considerado ideal para a sua altura.
            Também conhecido como Índice de Massa Corporal, o IMC é uma fórmula utilizada por vários profissionais de saúde, incluindo médicos,
            enfermeiros e nutricionistas, para saber, de uma forma rápida, se a pessoa precisa ganhar ou perder peso.</p>
          <input
            className='w-full border-0 border-b-2 border-gray-400 py-2.5 px-0.5 mb-5 text-sm outline-0 bg-inherit disabled:opacity-50'
            type='number'
            placeholder='Digite a sua altura. Ex 1.5 (em metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <input
            className='w-full border-0 border-b-2 border-gray-400 py-2.5 px-0.5 mb-5 text-sm outline-0 bg-inherit disabled:opacity-50'
            type='number'
            placeholder='Digite o seu peso. Ex 75.3 (em KG)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <button className='text-white bg-cyan-600 outline-0 w-full mb-10 text-base border-0 rounded-xl focus:outline-none py-4 hover:opacity-95 cursor-pointer mt-10 transition-all disabled:opacity-50 max-lg:mb-16'
            onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
        </div>

        <div className='flex flex-1 ml-20 max-lg:ml-0'>
          {!toShow &&
            <div className=' flex-1 grid grid-cols-2 gap-5 max-[450px]:grid-cols-1'>
              {levels.map((item, key) => (

                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {toShow &&
            <div className='flex-1 flex'>
              <div className='absolute w-20 h-20 rounded-full bg-[#227C9D] flex justify-center items-center cursor-pointer mt-36 ml-[-35px] hover:bg-cyan-700 max-lg:mt-[-35px] max-lg:ml-0 max-lg:ml-5' onClick={handleBackButton}>
                <img src={leftArrow} alt='' width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          }
        </div>
      </div>

    </>
  )
}

export default App
