import { Divider } from "@mui/material"


export const Project = ({image, description, tecno}) => {
    return (<div>
        <img src={image} alt="" />
        <p>Sobre mim</p>
        <p>
        {description}
        </p>
        <Divider light />

    </div>)
}