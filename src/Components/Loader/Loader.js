import styled from './Loader.module.scss'
function Loader(){
    return(
        <div className={styled.section}>
            <div className={styled.section__circle}/>
            <div className={styled.section__circle}/>
            <div className={styled.section__circle}/>
            <div className={styled.section__circle}/>
            <div className={styled.section__circle}/>
            <div className={styled.section__circle}/>
            <div className={styled.section__circle}/>
            <div className={styled.section__circle}/>
        </div>
    )
}
export default Loader

