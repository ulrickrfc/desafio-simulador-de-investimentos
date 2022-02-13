import Result from '../Result'
import './styles.css'

export default function Results({ data }) {
  return (
    <>
      <div className="results">
        <div className="results-title">
          <h2>Resultado da simulação</h2>
        </div>
        <section>
          {data.map((result, index) => (
            <Result key={index} name={result.name} value={result.value} />
          ))}
        </section>
      </div>
    </>
  )
}
