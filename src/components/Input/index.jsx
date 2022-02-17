import { isValid } from '../../utils'
import './styles.css'
import { mask } from 'remask'

export default function Input({ onChange, title, value, errorMessage, name }) {
  return (
    <>
      <div className="input">
        <label htmlFor="" className={`${isValid(value) ? '' : 'input-error'}`}>
          {' '}
          {title}
        </label>
        <div
          className="input-container"
          id={`${isValid(value) ? '' : 'input-error'}`}
        >
          {
            <div className="input-price">
              <span>
                {isValid(value) &&
                value != '' &&
                (name == 'initialContribution' || name == 'monthlyContribution')
                  ? 'R$'
                  : ' '}
              </span>
            </div>
          }
          <input
            name={name}
            onChange={(e) => {
              onChange(e)
            }}
            maxLength={name == 'deadline' ? '2' : ''}
            type="text"
            value={
              //verify if the current value is valid. If it is valid, then masks properly the input.
              (isValid(value) && name == 'initialContribution') ||
              (isValid(value) && name == 'monthlyContribution')
                ? mask(value, [
                    '99,99',
                    '999,99',
                    '9.999,99',
                    '99.999,99',
                    '999.999,99'
                  ])
                : isValid(value) && name == 'deadline'
                ? mask(value, ['99'])
                : isValid(value) && name == 'rentability'
                ? mask(value, ['9%', '99%', '99,9%', '99,99%'])
                : value
            }
          />
        </div>
        {isValid(value) ? (
          ''
        ) : (
          //if it isn't valid, then show error message
          <span className="input-error">{errorMessage}</span>
        )}
      </div>
    </>
  )
}
