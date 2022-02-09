import Axios from 'axios'
import { useState } from 'react'
import Form from '../../components/Form'
import Results from '../../components/Results'
import './styles.css'

export default function Home() {
  // const [haveError, setHaveError] = useState();
  const [simulation, setSimulation] = useState({
    initialContribution: '',
    monthlyContribution: '',
    deadline: '',
    rentability: '',
    revenue: 'bruto',
    indexing: 'pos',
    showResults: false
  })

  const [results, setResults] = useState()

  async function simulate() {
    console.log(simulation.indexing)
    console.log(simulation.revenue)
    try {
      const response = await Axios.get(
        `/simulacoes?tipoIndexacao=${simulation.indexing}&tipoRendimento=${simulation.revenue}`
      )
      setResults(response.data[0])
      setSimulation((prev) => {
        return { ...prev, showResults: true }
      })
    } catch {
      console.log('had a error')
    }
  }

  return (
    <div className="container">
      <div className="title">
        <h2>Simulador de investimentos</h2>
      </div>
      <div className="form-container">
        <Form
          // checkError={setHaveError}
          setSimulation={setSimulation}
          simulation={simulation}
          simulate={simulate}
        />
        {simulation.showResults ? <Results data={results} /> : ''}
      </div>
    </div>
  )
}
