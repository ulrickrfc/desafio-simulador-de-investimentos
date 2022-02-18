import './styles.css'
export default function SelectButton({
  onClick,
  title,
  data,
  name,
  revenue,
  indexing
}) {
  return (
    <div className="button-container">
      <div className="button-info">
        <h3>{title}</h3>
        <i className="bi bi-info-circle"></i>
      </div>
      <div className="button-values">
        {data.map((button, index) => {
          return (
            <button
              name={name}
              key={index}
              value={button.value}
              onClick={onClick}
              className={`${
                //if the value of the button is the current value, then add active class
                revenue === button.value || indexing === button.value
                  ? 'btn-active'
                  : ''
              }`}
            >
              {revenue === button.value || indexing === button.value ? (
                <i className="bi bi-check-lg"></i>
              ) : (
                ''
              )}
              {button.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
