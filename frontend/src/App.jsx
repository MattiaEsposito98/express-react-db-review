import axios from 'axios'
function App() {

  const fetchItem = () => {
    axios.get(`http://localhost:3000/item`)
      .then(res => {
        console.log(res)
      })
  }
  return (
    <>

    </>
  )
}

export default App
