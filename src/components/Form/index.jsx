import FormButtons from '../FormButtons'
import SelectButton from '../SelectButton'
import Input from '../Input'
import CDI from '../CDI'
import IPCA from '../IPCA'
import './styles.css'
import { unMask } from 'remask'

export default function Form({ setSimulation, simulation, simulate, error }) {
  //handles any input on based on event
  const handleChange = (e) => {
    setSimulation((prev) => {
      return {
        ...prev,
        [e.target.name]: unMask(e.target.value)
      }
    })
  }
  //reset the form
  const clearData = () => {
    setSimulation((prev) => {
      return {
        ...prev,
        initialContribution: '',
        monthlyContribution: '',
        deadline: '',
        rentability: '',
        showResults: false,
        checkError: true
      }
    })
  }

  return (
    <>
      <div className="simulator">
        <div className="simulator-title">
          <h2>Simulador</h2>
        </div>
        <div className="buttons-container">
          <SelectButton
            name={'revenue'}
            onClick={handleChange}
            title={'Rendimento'}
            revenue={simulation.revenue}
            data={[
              { value: 'bruto', name: 'Bruto' },
              { value: 'liquido', name: 'Líquido' }
            ]}
          />
          <SelectButton
            name={'indexing'}
            title={'Tipos de indexação'}
            onClick={handleChange}
            indexing={simulation.indexing}
            data={[
              { value: 'pre', name: 'PRÉ' },
              { value: 'pos', name: 'PÓS' },
              { value: 'ipca', name: 'FIXADO' }
            ]}
          />
        </div>
        <form className="form">
          <Input
            name={'initialContribution'}
            onChange={handleChange}
            title="Aporte Inicial"
            value={simulation.initialContribution}
            errorMessage={'Aporte deve ser um número'}
          />
          <Input
            name={'monthlyContribution'}
            onChange={handleChange}
            title="Aporte Mensal"
            value={simulation.monthlyContribution}
            errorMessage={'Aporte deve ser um número'}
          />
          <Input
            name={'deadline'}
            onChange={handleChange}
            title="Prazo (em meses)"
            value={simulation.deadline}
            errorMessage={'Prazo deve ser um número'}
          />
          <Input
            name={'rentability'}
            onChange={handleChange}
            title="CDI"
            value={simulation.rentability}
            errorMessage={'CDI deve ser um número'}
          />
          <IPCA />
          <CDI />
        </form>
        <div className="form-buttons-container">
          <FormButtons
            simulate={simulate}
            clearForm={clearData}
            simulation={simulation}
            error={error}
          />
        </div>
      </div>
    </>
  )
}
