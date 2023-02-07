import {MainContainerNotFound,Block,MainText,CodeStatus,SubText,BackBtn} from './NotFound404Style'
import {Link} from "react-router-dom";

const NotFound = () => {
    return(
        <MainContainerNotFound>
            <Block>
                <CodeStatus>404</CodeStatus>
                <MainText>Aftidan, siz mavjud bo‘lmagan sahifaga kirdingiz 😊   </MainText>
                <SubText>Keling, biz bu yerdan chiqishga yordam beramiz.</SubText>
                <Link to={'/'}><BackBtn>Ortga qaytish</BackBtn></Link>
            </Block>
        </MainContainerNotFound>
    )
}
export default NotFound