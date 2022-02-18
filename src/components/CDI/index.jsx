import { useEffect, useState } from 'react'
import Axios from 'axios'

export default function CDI() {
  const [CDI, setCDI] = useState()
  const [loaded, setLoaded] = useState()
  //fetch CDI data when the page is loaded
  useEffect(() => {
    async function fetchCDI() {
      try {
        const response = await Axios.get('/indicadores?nome=cdi')
        setCDI(response.data[0].valor.toString().replace('.', ','))
        setLoaded(true)
      } catch (e) {
        alert('had a error :(')
      }
    }
    fetchCDI()
  }, [])

  return (
    <>
      <div className="input">
        <label htmlFor="">CDI (ao ano)</label>
        <div className="input-container">
          <input type="text" value={loaded && `${CDI}%`} />
        </div>
      </div>
    </>
  )
}
