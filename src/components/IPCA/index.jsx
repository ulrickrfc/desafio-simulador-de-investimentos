import { useEffect, useState } from 'react'
import Axios from 'axios'

export default function IPCA() {
  const [IPCA, setIPCA] = useState('')

  const [load, setLoad] = useState(false)

  useEffect(() => {
    async function fetchIPCA() {
      try {
        const response = await Axios.get('/indicadores?nome=ipca')
        setIPCA(response.data[0].valor)
        setLoad(true)
        console.log(response.data)
      } catch (e) {
        console.log(e)
      }
    }
    fetchIPCA()
  }, [])

  return (
    <>
      <div className="input">
        <label htmlFor="">IPCA (ao ano)</label>
        <input type="text" value={load ? `${IPCA}%` : ''} />
      </div>
    </>
  )
}
