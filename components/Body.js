import React from "react";
import { styled } from "styled-components";
import { ResCard } from "./ResCard";
import { BodyContainer, Search } from "./Body.Styles";

const Body = () => {
    return (
        <BodyContainer>
<Search>Search</Search>
<ResContainer>
<ResCard title="Meghana FoodV2" />
</ResContainer>
        </BodyContainer>
    )
}

export default Body

export const ResContainer = styled.div`

`
