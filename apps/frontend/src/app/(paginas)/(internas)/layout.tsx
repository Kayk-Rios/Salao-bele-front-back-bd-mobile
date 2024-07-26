'use client'
import { ProvedorAgendamento } from '@/data/constexts/ContextoAgendamento'
import ForcarUsuario from '@/components/shared/ForcarUsuario'
import Pagina from '@/components/shared/Pagina'

export default function Layout(props: any) {
    return (
       <ForcarUsuario>
            <ProvedorAgendamento>
                <Pagina>{props.children}</Pagina>
            </ProvedorAgendamento>
       </ForcarUsuario>
    )
}
