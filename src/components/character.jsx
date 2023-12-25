import gender from '../assets/gender.svg'
import episodesCount from '../assets/episodesCount.svg'
import location from '../assets/location.svg'
import origin from '../assets/origin.svg'

export default function Character({character}){
    return(
        <div className="relative max-w-full mt-20">
            <div className={`rounded overflow-hidden shadow-md bg-white border-2 
                ${character.status == 'Alive' ? 'border-green-300' : 
                    character.status == 'Dead' ? 'border-red-300' : ''
                }`}>
                <div className="absolute  w-full flex justify-center -mt-20">
                    <div className="h-32 w-32">
                        <img src={character.image} className={`rounded-full object-cover h-full w-full shadow-md border-2 ${character.status == 'Alive' ? 'border-green-300' : 
                    character.status == 'Dead' ? 'border-red-300' : ''
                }`} />
                    </div>
                </div>
                <div className="px-6 mt-16">
                    <h1 className="font-bold text-3xl text-center mb-1">{character.name}</h1>
                    <p className="text-gray-800 text-sm text-center">{character.status} - {character.species}</p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                        <div className="flex justify-center flex-col items-center mx-5">
                            <img src={gender} alt="GenderSVG" />
                            <div>
                                {character.gender}
                            </div>
                        </div>
                        {/* <div className="flex justify-center flex-col items-center mx-5">
                            <img src={origin} alt="OriginSVG" />
                            <div>
                                {character.origin}
                            </div>
                        </div> */}
                        {/* <div className="flex justify-center flex-col items-center mx-5">
                            <img src={location} alt="LocationSVG" />
                            <div>
                                {character.location}
                            </div>
                        </div> */}
                        <div className="flex justify-center flex-col items-center mx-5">
                            <img src={episodesCount} alt="EpisodesCountSVG" />
                            <div>
                                {character.episodesCount}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}