export interface Lancamento {
  id: number
  tipo: string
  descricao: string
  mensagem: string
  ehFixo: boolean
  ehReceita: boolean
  data: Date
  valor: number
}
