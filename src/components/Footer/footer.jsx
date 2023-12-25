import Icons from "./icons"
import Github from "../../assets/Github.svg"
import Linkedin from "../../assets/Linkedin.svg"
import Gmail from "../../assets/Gmail.svg"

export default function Footer({language}){
    return(
        <div className="mx-auto">
            <div className="text-center my-4">
                <h3 className="text-2xl">{language != 'EU' ? 'Conenct With Me' : 'Conectate conmigo'}</h3>
                <div className='flex justify-center'>
                    <Icons link='https://github.com/PANCHOv96' svg={Github} key={Github}/>
                    <Icons link='https://www.linkedin.com/in/francisco-fabian-vallone-510b71223/' svg={Linkedin} key={Linkedin}/>
                    <Icons link='mailto:vallonefrancisco.dev@gmail.com' svg={Gmail} key={Gmail}/>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col mx-auto mb-2 gap-1">
                <h3 className="mx-auto text-sm">@2023 Francisco Vallone</h3>
            </div>
        </div>
    )
}