import { useEffect, useState ,useRef} from 'react'
import './App.css'
import axios from 'axios'
import ContryCard from './components/ContryCard'
function App() {
  const [search,setSearch] = useState('french')
  const [contries, setContries]= useState()
  

  useEffect(()=>{
    const  url = `https://restcountries.com/v3.1/lang/${search}`;
    axios.get(url)
    .then(res => setContries(res.data))
    .catch(err=> console.log(err))
  },[search])
console.log(contries)
  const textInput = useRef()
  
      const handleSubmit = (event) => {
          event.preventDefault()
          setSearch(textInput.current.value.toLowerCase().trim())
      }

     const handleChange=(e)=>{
      e.preventDefault()
      setSearch(e.target.value)
     }

console.log(contries)
  return (
    <>
      
      <div className='super'>

        <form onSubmit={handleSubmit}>
          <input type="text"  ref={textInput}/>
          <button>buscar</button>
        </form>
        <select onChange={handleChange}>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="English">English</option>
          <option value="Quechua">Quechua</option>
        </select>
      {
        contries?.map(contry=>(
          <ContryCard
          key={contry.name.common}
          contry={contry}
          />
        ))
      }
      
      </div>
      
    </>
  )
}

export default App
