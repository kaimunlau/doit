import { Button } from "./ui/Button"
import { GithubIcon, RocketIcon } from "./ui/Icons"

const FooterButton = ({ children, text, url }) => {
    return (
        <Button>
            <a 
                href={url} 
                target='_blank' 
                rel='noreferrer' 
                className='flex flex-col items-center'
            >
                {children}
                {text}
            </a>
        </Button>
    )
}

const Footer = ({ }) => {
    return (
        <footer className='flex w-1/3 place-self-center justify-between my-1'>
            <FooterButton 
                text='Fork me on GitHub' 
                url='https://github.com/kaimunlau/doit'
            >
                <GithubIcon />
            </FooterButton>
            <FooterButton 
                text='More from me' 
                url='https://www.davidlau.dev/'
            >
                <RocketIcon />
            </FooterButton>
        </footer>
    )
}

export default Footer