import Axios from 'axios'
import { useState } from 'react'
import Form from '../../components/Form'
import Results from '../../components/Results'
import './styles.css'
import { isValid } from '../../utils'

export default function Home() {
  // const [haveError, setHaveError] = useState();
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

  async function simulate() {
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
