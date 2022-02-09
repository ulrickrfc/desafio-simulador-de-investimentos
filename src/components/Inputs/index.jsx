import IPCA from '../IPCA'
import CDI from '../CDI'
import { useImmer } from 'use-immer'
import { useEffect, useContext } from 'react'
import Axios from 'axios'

import DispatchContext from '../../hooks/DispatchContext'
import StateContex from '../../hooks/StateContext'

export default function Inputs() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContex)

  const [state, setState] = useImmer({
    aporteInicial: '',
    prazo: '',
    aporteMensal: '',
    rentabilidade: '',
    aporteInicialHasErrors: false,
    prazoHasErrors: false,
    aporteMensalHasErrors: false,
    rentabilidadeHasErrors: false,
    haveError: true
  })

  function aporteInicialHandler(e) {
    const value = e.target.value

    if (!isNaN(+value)) {
      setState((draft) => {
        draft.aporteInicialHasErrors = false
        draft.aporteInicial = value
      })
    } else {
      setState((draft) => {
        draft.aporteInicialHasErrors = true
        draft.aporteInicial = value
      })
    }
  }

  function prazoHandler(e) {
    const value = e.target.value

    if (!isNaN(+value)) {
      setState((draft) => {
        draft.prazoHasErrors = false
        draft.prazo = value
      })
    } else {
      setState((draft) => {
        draft.prazoHasErrors = true
        draft.prazo = value
      })
    }
  }
  function aporteMensalHandler(e) {
    const value = e.target.value

    if (!isNaN(+value)) {
      setState((draft) => {
        draft.aporteMensalHasErrors = false
        draft.aporteMensal = value
      })
    } else {
      setState((draft) => {
        draft.aporteMensalHasErrors = true
        draft.aporteMensal = value
      })
    }
  }

  function rentabilidadeHandler(e) {
    const value = e.target.value

    if (!isNaN(+value)) {
      setState((draft) => {
        draft.rentabilidadeHasErrors = false
        draft.rentabilidade = value
      })
    } else {
      setState((draft) => {
        draft.rentabilidadeHasErrors = true
        draft.rentabilidade = value
      })
    }
  }

  function cleanInputs() {
    setState((draft) => {
      draft.rentabilidade = ''
      draft.aporteInicial = ''
      draft.aporteMensal = ''
      draft.prazo = ''
      draft.haveError = true
    })
  }

  useEffect(() => {
    if (
      state.rentabilidadeHasErrors ||
      state.aporteMensalHasErrors ||
      state.aporteInicialHasErrors ||
      state.prazoHasErrors ||
      state.aporteInicial == '' ||
      state.aporteMensal == '' ||
      state.prazo == '' ||
      state.rentabilidade == ''
    ) {
      setState((draft) => {
        draft.haveError = true
      })
    } else {
      setState((draft) => {
        draft.haveError = false
      })
    }
  }, [
    state.rentabilidade,
    state.aporteMensal,
    state.aporteInicial,
    state.prazo
  ])

  function simulate() {
    async function fetchResults() {
      try {
        const response = await Axios.get(
          '/simulacoes?tipoIndexacao=pos&tipoRendimento=bruto'
        )
        appDispatch({ type: 'simulate', data: response.data[0] })
      } catch {
        console.log('have a error')
      }
    }
    fetchResults()
  }

  return (
    <>
      <form className="input-form">
        <div className="input-info-1">
          <div className="input">
            <label htmlFor="">Aporte Inicial</label>
            <input
              type="text"
              value={state.aporteInicial}
              onChange={aporteInicialHandler}
            />
            {state.aporteInicialHasErrors ? <span>isWrong</span> : ''}
          </div>

          <div className="input">
            <label htmlFor="">Prazo (em meses)</label>
            <input type="text" value={state.prazo} onChange={prazoHandler} />
            {state.prazoHasErrors ? <span>isWrog</span> : ''}
          </div>

          <IPCA />
        </div>

        <div className="input-info-2">
          <div className="input">
            <label htmlFor="">Aporte Mensal</label>
            <input
              type="text"
              value={state.aporteMensal}
              onChange={aporteMensalHandler}
            />
            {state.aporteMensalHasErrors ? <span>isWrog</span> : ''}
          </div>

          <div className="input">
            <label htmlFor="">Rentabilidade</label>
            <input
              type="text"
              value={state.rentabilidade}
              onChange={rentabilidadeHandler}
            />
            {state.rentabilidadeHasErrors ? <span>isWrog</span> : ''}
          </div>

          <CDI />
        </div>
      </form>
    </>
  )
}
