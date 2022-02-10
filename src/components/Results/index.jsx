import Result from '../Result'
import './styles.css'

export default function Results({ data }) {
  return (
    <>
      <div className="results">
        <h1>Resultado da simulação</h1>
        <section>
          {data.map((result, index) => (
            <Result key={index} name={result.name} value={result.value} />
          ))}
        </section>
      </div>
    </>
  )
}
