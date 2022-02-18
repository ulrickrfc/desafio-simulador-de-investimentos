import './styles.css'
export default function Result({ name, value }) {
  return (
    <div className="result">
      <p>{name}</p>
      <p
        className={
          (name == 'Valor Final Líquido' || name == 'Ganho Líquido') &&
          'active-result'
        }
      >
        R${value}
      </p>
    </div>
  )
}
