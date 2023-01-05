import { Divider } from "@mui/material"


export const Project = ({image, description, tecno}) => {
    return (<div>
        <img src={image} alt="" />
        <p>
        {description}
        </p>
        <Divider light />

    </div>)
}