import Character from "./character"

export default function Characters ({characters}){
    if (!characters) return
    return(
        <>
            <div className="grid lg:grid-cols-5 gap-4 md:grid-cols-3 mx-2 lg:mx-0 py-4">
                {characters && characters.map(character => {
                    return(
                        <Character character={character} key={character.id}/>
                    )
                })}
            </div>
        </>
    )   
}