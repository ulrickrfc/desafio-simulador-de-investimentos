import { useEffect, useState } from 'react'
import Axios from 'axios'

export default function CDI() {
  const [CDI, setCDI] = useState()
  const [load, setLoad] = useState(false)
  //fetch CDI data when the page is loaded
  useEffect(() => {
    async function fetchCDI() {
      try {
        const response = await Axios.get('/indicadores?nome=cdi')
        setCDI(response.data[0].valor.toString().replace('.', ','))

        setLoad(true)
        console.log(response.data)
      } catch (e) {
        console.log(e)
      }
    }
    fetchCDI()
  }, [])

  return (
    <>
      <div className="input">
        <label htmlFor="">CDI (ao ano)</label>
        <div className="input-container">
          <input type="text" value={load ? `${CDI}%` : ''} />
        </div>
      </div>
    </>
  )
}
