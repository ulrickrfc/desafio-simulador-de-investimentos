export default function Results({ data }) {
  console.log(data)
  return (
    <>
      <section className="results">
        <div className="results-title">
          <h1>Resultado da simulação</h1>
        </div>

        <div className="results-container">
          <div className="result">
            <div className="result-name">
              <p>Valor final Bruto</p>
            </div>
            <div className="result-value">
              <p>R${data.valorFinalBruto}</p>
            </div>
          </div>
          <div className="result">
            <div className="result-name">
              <p>Aliquota do IR</p>
            </div>
            <div className="result-value">
              <p>{data.aliquotaIR}</p>
            </div>
          </div>
          <div className="result">
            <div className="result-name">
              <p>Valor Pago em IR</p>
            </div>
            <div className="result-value">
              <p>{data.valorPagoIR}</p>
            </div>
          </div>
          <div className="result">
            <div className="result-name">
              <p>Valor Final Líquido</p>
            </div>
            <div className="result-value">
              <p>{data.valorFinalLiquido}</p>
            </div>
          </div>
          <div className="result">
            <div className="result-name">
              <p>Valor Total Investido</p>
            </div>
            <div className="result-value">
              <p>{data.valorTotalInvestido}</p>
            </div>
          </div>
          <div className="result">
            <div className="result-name">
              <p>Ganho Líquido</p>
            </div>
            <div className="result-value">
              <p>{data.ganhoLiquido}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
