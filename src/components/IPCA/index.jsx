import { useEffect, useState } from 'react'
import Axios from 'axios'

export default function IPCA() {
  const [IPCA, setIPCA] = useState()

  const [loaded, setLoaded] = useState()

  useEffect(() => {
    async function fetchIPCA() {
      try {
        const response = await Axios.get('/indicadores?nome=ipca')
        setIPCA(response.data[0].valor.toString().replace('.', ','))
        setLoaded(true)
      } catch (e) {
        alert('had a error :(')
      }
    }
    fetchIPCA()
  }, [])

  return (
    <>
      <div className="input">
        <label htmlFor="">IPCA (ao ano)</label>
        <div className="input-container">
          <input type="text" value={loaded && `${IPCA}%`} />
        </div>
      </div>
    </>
  )
}
