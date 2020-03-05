import React from 'react';
import styled from "styled-components";

interface UserCircleProps {
    user: any;
}

export const UserCircle = ({user}: UserCircleProps) => (
    <CircleWrapper
        avatar={user.avatar}
    >

    </CircleWrapper>
);

const CircleWrapper = styled.div<{avatar: any}>`
    border-radius: 50%;
    border: solid 1px black;
    height: 40px;
    width: 40px;
    display: block;
    background-image: url(${p => p.avatar ? p.avatar : ''});
    background-size: cover;
    background-repeat: no-repeat;

`;