import './App.css'

import Home from './pages/Home'
import { useImmerReducer } from 'use-immer'
import investmenthooks, { initialState } from './store/investestiments'
// eslint-disable-next-line no-unused-vars
import services from './services'

import StateContext from '../src/hooks/StateContext'
import DispatchContext from '../src/hooks/DispatchContext'

function App() {
  const [state, dispatch] = useImmerReducer(investmenthooks, initialState)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Home />
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
