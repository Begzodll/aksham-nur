import {BtnGroup, NavTabContainer, TabButton, TabButtonArrow} from "./tabStyle";

const NavigatorTab = ({setVal, active, setActive}) => {
    return (
        <NavTabContainer>
            <BtnGroup>
                <TabButton value={'xammasi'} type={'button'} onClick={(e) => setVal(e.target.value)} bool={active}/>
                <TabButton value={'taomlar'} type={'button'} onClick={(e) => setVal(e.target.value)} bool={active}/>
                <TabButton value={'fastFood'} type={'button'} onClick={(e) => setVal(e.target.value)} bool={active}/>
                <TabButton value={'somsa'} type={'button'} onClick={(e) => setVal(e.target.value)} bool={active}/>
                <TabButton value={'shashlik'} type={'button'} onClick={(e) => setVal(e.target.value)} bool={active}/>
                <TabButton value={'cakes'} type={'button'} onClick={(e) => setVal(e.target.value)} bool={active}/>
                <TabButton value={'salat'} type={'button'} onClick={(e) => setVal(e.target.value)} bool={active}/>
                <TabButtonArrow value={active ? ">" : "<"} type={'button'}
                                onClick={() => setActive(p => !p)}/>
            </BtnGroup>
        </NavTabContainer>
    )
}
export default NavigatorTab