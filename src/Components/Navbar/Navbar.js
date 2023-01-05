import {ContainerFluid, Container, Logo, ListGroup, ListItem, CallButton, ToggleBtn} from "./NavbarStyle";
import {useState} from "react";
import logo from '../../Assets/images/logo/logo1.png';
import {Link} from "react-router-dom";

const Navbar = () => {
    const [state, setState] = useState(false)
    const togglerBtn = () => setState(p => !p)
    return (
        <ContainerFluid>
            <Container>
                <Link to={'/'} className={'logo-index'}>
                    <Logo src={logo} alt={'asd'}/>
                </Link>
                <ListGroup className={`${state ? "header-visible" : "header-hidden"}`}>
                    <ListItem><Link to={'/'}>Home</Link></ListItem>
                    <ListItem><Link to={'/'}>Jo'y band qilish</Link></ListItem>
                    <ListItem><Link to={'/'}>menyu</Link></ListItem>
                    <ListItem><a href="tel:998335558080" className={'list-item-small'}>Qongiroq qilish</a></ListItem>
                </ListGroup>
                <CallButton href="tel:998335558080">Qongiroq qilish</CallButton>
                <button onClick={togglerBtn} className={`nav-toggle-btn ${state ? "active" :""}`}/>
            </Container>
        </ContainerFluid>
    )
}
export default Navbar