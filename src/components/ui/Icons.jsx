import { CheckCircle, Circle, PlusSquare, XSquare } from "lucide-react"

const size = 24
const stroke = 1

export const AddIcon = () => {
    return <PlusSquare size={size} strokeWidth={stroke} />
}

export const DeleteIcon = () => {
    return <XSquare size={size} strokeWidth={stroke} />
}

export const DoneIcone = ({done}) => {
    return done ? <CheckCircle size={size} strokeWidth={stroke} /> : <Circle size={24} strokeWidth={1}/>
}