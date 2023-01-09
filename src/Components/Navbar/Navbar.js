import {ContainerFluid, Container, Logo, ListGroup, Phone, ListItem, CallButton} from "./NavbarStyle";
import {useEffect, useState} from "react";
import logo from '../../Assets/images/logo/logo1.png';
import {Link, useLocation,} from "react-router-dom";

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
                    <Link to={'/'} style={{textDecoration: 'none'}}><ListItem>Home</ListItem></Link>
                    <Link to={'/'} style={{textDecoration: 'none'}}><ListItem>Jo'y band qilish</ListItem></Link>
                    <Link to={'/'} style={{textDecoration: 'none'}}><ListItem>menyu</ListItem></Link>
                    <Phone><Link to="tel:998335558080" style={{textDecoration: 'none'}}><ListItem>
                        Qongiroq
                        qilish</ListItem></Link></Phone>
                </ListGroup>
                <CallButton href="/login" style={{textDecoration: 'none'}}>Kirish</CallButton>
                <button onClick={togglerBtn} className={`nav-toggle-btn ${state ? "active" : ""}`}/>
            </Container>
        </ContainerFluid>

    )
}
export default Navbar