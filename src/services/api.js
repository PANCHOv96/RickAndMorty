export default function Api({name=''}){
    return fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        .then( response => response.json())
        .then( response => response.results.map(
            character => {return {
                id: character.id,
                name : character.name,
                status : character.status,
                species : character.species,
                gender : character.gender,
                origin : character.origin.name,
                location : character.location.name,
                image : character.image,
                episodesCount : character.episode.length
            }}
        ))
        .catch(e => {return {error: 'No hay nada aquí'}})
}