"use client"
import { ICource } from "./lib/api"

interface Props {
    elm: ICource
}
export const Course = ({ elm }: Props) => {
    return <div  className="course">
        <img src={elm.cover} />
        <p>{elm.name} </p>
        <p> <strong> {elm.duration} month</strong></p>
        <strong>{elm.price} AMD</strong>

    </div>
}