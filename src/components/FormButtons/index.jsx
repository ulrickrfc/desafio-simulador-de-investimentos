import './styles.css'
export default function FormButtons({ clearForm, simulate, error }) {
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
          id={`${error ? '' : 'form-btn-active'}`}
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
