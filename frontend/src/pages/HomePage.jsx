import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function HomePage() {
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
      <div>
        <ul>
          {dati.map(dato => (
            <li key={dato.id}>
              <Link to={`/items/${dato.id}`}>
                <button> {dato.name}</button>
              </Link>
              {dato.name}
            </li>


          ))}
        </ul>
      </div >
    </>

  )
}