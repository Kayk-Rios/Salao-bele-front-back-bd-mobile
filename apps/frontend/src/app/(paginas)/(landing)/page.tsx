'use client'

import NossosClientes from "@/components/cliente/NossosClientes"
import TituloSlogan from "@/components/landing/TituloSlogan"
import NossosProfissionais from "@/components/profissional/NossosProfissionais"
import NossosServicos from "@/components/servico/NossosServicos"
import ContainerComBackground from "@/components/shared/ContainerComBackground"



export default function Landing() {
    return (
        <div>
                <TituloSlogan/>
                <ContainerComBackground imagem="/banners/servicos.jpeg">
                 <NossosServicos/>
                </ContainerComBackground>

                <ContainerComBackground imagem="/banners/profissional.jpeg">
                <NossosProfissionais/>
                </ContainerComBackground>

                <ContainerComBackground imagem="/banners/clientes.jpeg
                ">
                    <NossosClientes/>
                </ContainerComBackground>



        </div>
    )
}
