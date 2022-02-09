import './styles.css'
export default function FormButtons({ clearForm, simulate }) {
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
