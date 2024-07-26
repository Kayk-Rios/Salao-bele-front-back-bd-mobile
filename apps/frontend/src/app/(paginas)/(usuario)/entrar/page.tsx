import FormUsuario from "@/components/usuario/FormUsuario";
import { Suspense } from "react";


export default function Page(){
    return(
       <Suspense fallback={<div className='flex justify-center items-center h-screen' >Carregando</div>}>
        <FormUsuario/>
       </Suspense>
    )
}