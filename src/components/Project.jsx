import { Divider } from "@mui/material"
//import { text1 } from "./Texts"
import Card from "@mui/material"

export const Project = ({image, description, tecno}) => {
    return (<div>
        <img src={image} alt="" />
        <p>
        {description}
        </p>
        <Divider light />

    </div>)
}