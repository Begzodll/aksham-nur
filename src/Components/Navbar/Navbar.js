import {
    ContainerFluid,
    Container,
    Logo,
    ListGroup,
    Phone,
    ListItem,
    CallButton,
    DesktopIcons,
    MobileIcons
} from "./NavbarStyle";
import {useEffect, useState} from "react";
import logo from '../../Assets/images/logo/logo1.png';
import {Link, useLocation,} from "react-router-dom";

import SocialLinks from '../Links/SocialLinks'


const Navbar = () => {
    const [state, setState] = useState(false)
    const togglerBtn = () => setState(p => !p)
    window.addEventListener('scroll', () => setState(false))

    const location = useLocation()
    const [block, setBlock] = useState('')

    useEffect(() => {
        if (location.pathname === '/login') {
            setBlock('nav-block')
        } else {
            setBlock('')
        }
    }, [location.pathname])

    return (
        <ContainerFluid className={`${block}`}>
            <Container>
                <Link to={'/'} className={'logo-index'}>
                    <Logo src={logo} alt={'asd'}/>
                </Link>
                <ListGroup className={`${state ? "header-visible" : "header-hidden"}`}>
                    <a href={'/'} style={{textDecoration: 'none'}} onClick={togglerBtn}><ListItem>Bosh saxifa</ListItem></a>
                    <Link to={'/contacts'} style={{textDecoration: 'none'}} onClick={togglerBtn}><ListItem>Kontaktlar
                        </ListItem></Link>
                    <Link to={'/about'} style={{textDecoration: 'none'}} onClick={togglerBtn}><ListItem>Biz
                        haqimizda</ListItem></Link>
                    <Phone><a href="tel:998335558080" style={{textDecoration: 'none'}} onClick={togglerBtn}><ListItem>
                        Qongiroq
                        qilish</ListItem></a></Phone>
                    <MobileIcons>
                        <SocialLinks/>
                    </MobileIcons>
                </ListGroup>
                {/*<CallButton href="/login" style={{textDecoration: 'none'}}>Kirish</CallButton>*/}
                <DesktopIcons>
                    <SocialLinks/>
                </DesktopIcons>
                <button onClick={togglerBtn} className={`nav-toggle-btn ${state ? "active" : ""}`}/>
            </Container>
        </ContainerFluid>

    )
}
export default Navbar