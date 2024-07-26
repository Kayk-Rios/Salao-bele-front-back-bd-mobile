import { useContext } from 'react'
import { ContextoAgendamento } from '@/data/constexts/ContextoAgendamento'

const useAgendamento = () => useContext(ContextoAgendamento)
export default useAgendamento
