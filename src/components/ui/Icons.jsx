import { CheckCircle, Circle, Github, Pencil, PlusSquare, Rocket, XSquare } from 'lucide-react'

const size = 24
const stroke = 1

export const AddIcon = () => {
    return <PlusSquare size={size} strokeWidth={stroke} />
}

export const DeleteIcon = () => {
    return <XSquare size={size} strokeWidth={stroke} />
}

export const DoneIcon = ({ done }) => {
    return done ? <CheckCircle size={size} strokeWidth={stroke} /> : <Circle size={24} strokeWidth={1}/>
}

export const EditIcon = ({ opacity }) => {
    return <Pencil size={size/1.5} strokeWidth={stroke/2} strokeOpacity={opacity}/>
}

export const GithubIcon = () => {
    return <Github size={size} strokeWidth={stroke} />
}

export const RocketIcon = () => {
    return <Rocket size={size} strokeWidth={stroke} />
}