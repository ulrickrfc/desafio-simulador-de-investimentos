import './styles.css'
export default function Result({ name, value }) {
  return (
    <div className="result">
      <p>{name}</p>
      <p>R${value}</p>
    </div>
  )
}
