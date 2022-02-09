import { isValid } from '../../utils'
import './styles.css'
export default function Input({ onChange, title, value, errorMessage, name }) {
  return (
    <>
      <div className="input">
        <label htmlFor="">{title}</label>
        <input
          name={name}
          onChange={(e) => {
            onChange(e)
          }}
          type="text"
          value={value}
        />
        {isValid(value) ? '' : <span>{errorMessage}</span>}
      </div>
      {/* <label htmlFor="">{title}</label>
        <input onChange={(e)=>{handleInput(e.target.value)}} type="text" /> */}
    </>
  )
}
