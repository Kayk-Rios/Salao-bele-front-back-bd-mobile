import { useContext } from 'react'
import ContextoUsuario from '../constexts/ContextoUsuario'

const useUsuario = () => useContext(ContextoUsuario)
export default useUsuario
