
import { Suspense } from 'react'
import './App.css'
import DaisyUINav from './components/DaisyUINav/DaisyUINav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultChart from './components/ResultChart/ResultChart'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'


const pricingPromise = fetch('/pricingData.json').then(res => res.json());

const marksPromise = axios.get('marksData.json');

function App() {


  return (
    <>

      <header>

        <Navbar></Navbar>

        {/* <DaisyUINav></DaisyUINav> */}

        <h1 className='text-5xl' >Vite + React</h1>
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>
        } >
          <PricingOptions pricingPromise={pricingPromise} ></PricingOptions>
        </Suspense>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>} >
          <MarksChart marksPromise={marksPromise} ></MarksChart>
        </Suspense>

        
      </main>

        <ResultChart></ResultChart>



    </>
  )
}

export default App
