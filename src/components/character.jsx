export default function Character({character}){
    return(
        <div className="relative mt-16 mb-32 max-w-sm mx-auto mt-24">
            <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                        <img src={character.image} className="rounded-full object-cover h-full w-full shadow-md" />
                    </div>
                </div>
                <div className="px-6 mt-16">
                    <h1 className="font-bold text-3xl text-center mb-1">{character.name}</h1>
                    <p className="text-gray-800 text-sm text-center">{character.status} - {character.species}</p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                            <div aria-label="Github" className="flex justify-center flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round" className="feather feather-github">
                                    <path
                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                    </path>
                                </svg>
                                <div>
                                    {character.gender}
                                </div>
                            </div>
                        </a>
                        <a href="#" className="mx-5">
                            <div aria-label="Github" className="flex justify-center flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round" className="feather feather-github">
                                    <path
                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                    </path>
                                </svg>
                                <div>
                                    
                                </div>
                            </div>
                        </a>
                        <a href="#" className="mx-5">
                            <div aria-label="Github" className="flex justify-center flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round" className="feather feather-github">
                                    <path
                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                    </path>
                                </svg>
                                <div>
                                    2
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}