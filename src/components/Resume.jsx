import { Divider } from "@mui/material"

export const Resume = ({aboutMe, titleProfissional}) => {
    return (<div className="aboutMe">
        <p className="titleAboutMe">Sobre mim</p>
        <p>
        {aboutMe}
        </p>
        <Divider light />
    </div>)
}