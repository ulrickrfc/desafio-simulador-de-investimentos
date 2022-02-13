import Axios from 'axios'
import { useEffect, useState } from 'react'
import Form from '../../components/Form'
import Results from '../../components/Results'
import './styles.css'
import { isValid } from '../../utils'

export default function Home() {
  const [simulation, setSimulation] = useState({
    initialContribution: '',
    monthlyContribution: '',
    deadline: '',
    rentability: '',
    revenue: 'bruto',
    indexing: 'pos',
    showResults: false,
    checkError: true
  })

  const [results, setResults] = useState([])
  const [error, setError] = useState(true)

  useEffect(() => {
    console.log(simulation)
    if (
      !(
        !isValid(simulation.initialContribution) ||
        !isValid(simulation.monthlyContribution) ||
        !isValid(simulation.deadline) ||
        !isValid(simulation.rentability) ||
        simulation.initialContribution == '' ||
        simulation.monthlyContribution == '' ||
        simulation.deadline == '' ||
        simulation.rentability == ''
      )
    ) {
      setError(false)
    } else {
      setError(true)
    }
  }, [
    simulation.initialContribution,
    simulation.monthlyContribution,
    simulation.deadline,
    simulation.rentability
  ])

  async function simulate() {
    if (!error) {
      try {
        const response = await Axios.get(
          `/simulacoes?tipoIndexacao=${simulation.indexing}&tipoRendimento=${simulation.revenue}`
        )
        setResults([
          {
            name: 'Valor final Bruto',
            value: response.data[0].valorFinalBruto
          },
          {
            name: 'Alíquota do IR',
            value: response.data[0].aliquotaIR
          },
          {
            name: 'Valor Pago em IR',
            value: response.data[0].valorPagoIR
          },
          {
            name: 'Valor Final Líquido',
            value: response.data[0].valorFinalLiquido
          },
          {
            name: 'Valor Total Investido',
            value: response.data[0].valorTotalInvestido
          },
          {
            name: 'Ganho Líquido',
            value: response.data[0].ganhoLiquido
          }
        ])
        setSimulation((prev) => {
          return { ...prev, showResults: true }
        })
      } catch {
        console.log('had a error')
      }
    }
  }

  return (
    <div className="container">
      <div className="title">
        <h1>Simulador de investimentos</h1>
      </div>
      <div className="form-container">
        <Form
          setSimulation={setSimulation}
          simulation={simulation}
          simulate={simulate}
          error={error}
        />
        {simulation.showResults ? <Results data={results} /> : ''}
      </div>
    </div>
  )
}
