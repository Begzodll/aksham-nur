import {BoxOne, BoxTwo, Card, ContainerFluid, Flex, LogoImg,Shadow, Logo, Name, Password,Submit} from './style/AuthPageStyle';
import AuthBg from '../../Assets/images/auth-bg.png';
import loggo from '../../Assets/images/logo/logo1.png'
const AuthPage = () => {
    return (
        <ContainerFluid>
            <Flex>
                <BoxOne back={AuthBg}/>
                <BoxTwo>
                    <Card>
                        <Logo><LogoImg src={loggo} alt="image"/></Logo>
                        <Name type="tel" placeholder={'Raqamingizni kiriting'}/>
                        <Password type="password" placeholder={'Parol kiriting'}/>
                        <Submit>Jo'natish</Submit>
                    </Card>
                </BoxTwo>
            </Flex>
        </ContainerFluid>
    )
}
export default AuthPage