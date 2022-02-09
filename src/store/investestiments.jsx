export const initialState = {
  rendimento: 'bruto',
  indexacao: 'pos',
  inputError: false,
  simulation: {},
  allowSimulation: false
}

export default function investmenthooks(draft, action) {
  switch (action.type) {
    case 'rendimento':
      draft.rendimento = action.data
      return
    case 'indexacao':
      draft.indexacao = action.data
      return
    case 'aporteInicial':
      draft.aporteInicial = action.data
      return
    case 'aporteMensal':
      draft.aporteMensal = action.data
      return
    case 'prazo':
      draft.prazo = action.data
      return
    case 'rentabilidade':
      draft.rentabilidade = action.data
      return
    case 'inputError':
      draft.inputError = action.data
      return
    case 'simulate':
      draft.simulation = action.data
      draft.allowSimulation = true
      return
  }
}
