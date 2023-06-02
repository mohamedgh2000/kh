import react from "react"
import { Card } from "@mui/material"
import Circlenum from "../../Components/UI/Circlenum";
import styles from "./Subheader.module.css";
export default function Qcminput({choice,index}){

    return (
<Card className={styles.input}>
<Circlenum index={index}/>
    <p className={styles.choice}>{choice}</p>
</Card>
    )
}