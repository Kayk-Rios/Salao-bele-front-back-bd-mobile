'use client'
import Image from 'next/image'
import Link from 'next/link'
import MenuSuperior from '@/components/shared/MenuSuperior'

export default function TituloSlogan() {
    return (
        <div className="py-10 relative h-[700px]">
            <Image src="/banners/principal.jpeg" fill alt="Barbearia" className="object-cover" />
            <div
                className="
                    flex flex-col items-center
                    absolute top-0 left-0 w-full h-full
                    bg-black/80 md:bg-transparent md:bg-gradient-to-r from-black/30 via-black/90 to-black/30
                "
            >
                <MenuSuperior />
                <div className="container flex-1 flex flex-col justify-center items-center gap-5 z-50">
                    <h1 className="flex flex-col items-center">
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin tracking-wider">
                            Transformações
                        </span>
                        <span className="text-gradient text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black pb-2">
                            Brutais
                        </span>
                    </h1>
                    <p className="w-96 text-center text-zinc-400 text-base sm:text-lg font-extralight">
                         Seu estilo é o nosso sorriso! 
                    </p>
                    <Link
                        href="/agendamento"
                        className="
                            bg-gradient-to-r from-blue-600 to-red-600
                            text-white font-semibold text-base md:text-lg
                            py-2 px-4 rounded-md hover:from-red-600 hover:to-red-700
                        "
                    >
                        Agendar
                    </Link>
                </div>
            </div>
        </div>
    )
}
