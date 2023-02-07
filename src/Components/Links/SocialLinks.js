import React from "react";
import {MainContainerLink,Icon} from "./LinkStyle";
import {connect} from "react-redux";
const SocialLinks = ({footer}) => {
    return(
        <MainContainerLink>
            {
                footer.socialIcons.map((item, index) => (
                    <Icon key={index + 1} href={item.link}>{item.icon}</Icon>
                ))
            }
        </MainContainerLink>
    )
}
export default connect(({dataProduct:{footer}})=>({footer}))(SocialLinks)