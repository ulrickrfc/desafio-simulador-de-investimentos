import FormButtons from '../FormButtons'
import SelectButton from '../SelectButton'
import Input from '../Input'
import CDI from '../CDI'
import IPCA from '../IPCA'
import './styles.css'
import { isValid } from '../../utils'

export default function Form({ setSimulation, simulation, simulate }) {
  //     if(!isNaN(+initialContribution) || !isNaN(+monthlyContribution) || !isNaN(+deadline)  || !isNaN(+rentability)){
  //         //if([initalContribution, monthlyContribution, deadline, rentability].forEach(value =>{
  //         // return typeof value === 'number' && checkError(true)
  //        // }))
  //         checkError(false)

  //         setSimulation({
  //             initialContribution, //initialContribution:initialContribution
  //             monthlyContribution,
  //             deadline,
  //             rentability,
  //             revenue,
  //             indexing
  //         })

  //     } else{
  //         checkError(true)
  //     }
  // },[initialContribution, monthlyContribution, deadline, rentability,revenue, indexing])
  const handleChange = (e) => {
    setSimulation((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
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
      setSimulation((prev) => {
        return {
          ...prev,
          checkError: true
        }
      })
    } else {
      setSimulation((prev) => {
        return {
          ...prev,
          checkError: false
        }
      })
    }
    console.log(simulation.checkError)
    // if (
    //   !isValid(simulation.initialContribution) ||
    //   !isValid(simulation.monthlyContribution) ||
    //   !isValid(simulation.deadline) ||
    //   !isValid(simulation.rentability) ||
    //   simulation.initialContribution == '' ||
    //   simulation.monthlyContribution == '' ||
    //   simulation.deadline == '' ||
    //   simulation.rentability == ''
    // ) {
    //   setSimulation((prev) => {
    //     return {
    //       ...prev,
    //       checkError: true
    //     }
    //   })
    // } else {
    //   setSimulation((prev) => {
    //     return {
    //       ...prev,
    //       checkError: false
    //     }
    //   })
    // }

    // console.log(simulation)
    // console.log(simulation.initialContribution)

    // console.log(isValid(simulation.initialContribution))
  }

  const clearData = () => {
    setSimulation({
      initialContribution: '',
      monthlyContribution: '',
      deadline: '',
      rentability: '',
      revenue: 'bruto',
      indexing: 'pos',
      showResults: false,
      checkError: true
    })
  }

  return (
    <>
      <div className="simulator">
        <h1>Simulador</h1>
        <div className="buttons-container">
          <SelectButton
            name={'revenue'}
            onChange={handleChange}
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
            onChange={handleChange}
            indexing={simulation.indexing}
            data={[
              { value: 'pre', name: 'PRÉ' },
              { value: 'pos', name: 'PÓS' },
              { value: 'ipca', name: 'FIXADO' }
            ]}
          />
        </div>
        <form>
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
            title="Prazo"
            value={simulation.deadline}
            errorMessage={'Aporte deve ser um número'}
          />
          <Input
            name={'rentability'}
            onChange={handleChange}
            title="CDI"
            value={simulation.rentability}
            errorMessage={'Aporte deve ser um número'}
          />
          <IPCA />
          <CDI />
        </form>
        <div className="form-buttonss">
          <FormButtons
            simulate={simulate}
            clearForm={clearData}
            simulation={simulation}
          />
        </div>
      </div>
    </>
  )
}
