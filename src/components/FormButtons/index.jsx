import { isValid } from '../../utils'
import './styles.css'
export default function FormButtons({ clearForm, simulate, simulation }) {
  return (
    <>
      <div className="form-buttons">
        <button
          className="clean-data-btn"
          onClick={() => {
            clearForm()
          }}
        >
          Limpar campos
        </button>

        <button
          id={`${
            !isValid(simulation.initialContribution) ||
            !isValid(simulation.monthlyContribution) ||
            !isValid(simulation.deadline) ||
            !isValid(simulation.rentability) ||
            simulation.initialContribution == '' ||
            simulation.monthlyContribution == '' ||
            simulation.deadline == '' ||
            simulation.rentability == ''
              ? ''
              : 'form-btn-active'
          }`}
          onClick={() => {
            simulate()
          }}
        >
          Simular
        </button>
      </div>
    </>
  )
}
