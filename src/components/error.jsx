export default function Error({msj}){
    return(
        <div className="flex justify-center content-center mt-5 text-red-500 text-4xl font-bold">
            {msj && msj}
        </div>
    )
}