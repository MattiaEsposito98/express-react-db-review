import axios from 'axios'
import { useEffect, useState } from 'react'
function App() {
  const [dati, setDati] = useState([])

  const fetchItem = () => {
    axios.get(`http://localhost:3000/item`)
      .then(res => {
        console.log(res)
        setDati(res.data)
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    fetchItem()
  }, [])

  return (
    <>
      <h1>React</h1>
      <ul>
        {dati.map(dato => (
          <li key={dato.id}> {dato.name}</li>
        ))}
      </ul>

    </>
  )
}

export default App
