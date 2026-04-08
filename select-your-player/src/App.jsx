import { ToastContainer } from 'react-toastify';
import { Suspense,useState } from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import Available from './components/available-players/Available'
import Navbar from './components/navbar/Navbar'
import Selected from './components/selected-players/Selected'

const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()
}

const playerPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [avBalance, setAvBalance] = useState(5000000);
  const [selPlayers, setSelPlayers] = useState([]);

  const removePlayer = (p) => {
    const filterPlayer = selPlayers.filter(fp=> fp.id!==p.id)
    console.log(filterPlayer)
    setSelPlayers(filterPlayer)
    setAvBalance(avBalance+p.price)
  }

  return (
    <>
    <Navbar avBalance={avBalance}></Navbar>

    <div className='max-w-[1200px] mx-auto py-5 flex justify-between items-center'>
      <h1 className='font-bold text-2xl'>{toggle===true?"Available" : `Selected (${selPlayers.length}/8)`}</h1>

      <div>
        <button onClick={()=>setToggle(true)} className={`btn font-bold ${toggle===true?"bg-[#E7FE29]":""} px-5 py-2 border-1 border-gray-300 rounded-l-xl border-r-0`}>Available</button>
        <button onClick={()=>setToggle(false)} className={`btn px-5 py-2 border-1 border-gray-300 rounded-r-xl border-l-0 ${toggle===false?"bg-[#E7FE29]":""}`}>Selected <span>{`(${selPlayers.length})`}</span></button>
      </div>
    </div>

    {
      toggle === true ? <Suspense fallback={<span class="loading loading-spinner loading-xl"></span>}>
      <Available selPlayers={selPlayers} setSelPlayers={setSelPlayers} playerPromise={playerPromise} avBalance={avBalance} setAvBalance={setAvBalance}></Available>
    </Suspense> : <Selected removePlayer={removePlayer} selPlayers={selPlayers}></Selected>
    }

    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
