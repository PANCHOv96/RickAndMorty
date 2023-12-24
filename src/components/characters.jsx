import Character from "./character"

export default function Characters ({characters}){
    if (!characters) return
    return(
        <>
            <div className="grid grid-cols-5 gap-4">
                {characters && characters.map(character => {
                    return(
                        <Character character={character} key={character.id}/>
                    )
                })}
            </div>
        </>
    )   
}