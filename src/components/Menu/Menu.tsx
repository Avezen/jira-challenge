import * as React from 'react';
import {MenuItem} from "./MenuItem/MenuItem";
import styled from "styled-components";

export interface MenuProps {
    handleChange: any;
    menuItems: any;
}

export const Menu = ({handleChange, menuItems}: MenuProps) => {

    return (
        <MenuList>
            {menuItems.map((item: any, key: any) => (
                <MenuItem
                    key={key}
                    technology={item.label.toUpperCase()}
                    {...item}
                    onClick={handleChange}
                />
            ))}
        </MenuList>
    );

};


const MenuList = styled.ul`
    width: 100%;
    height: 100%;
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    list-style: none;
    display: inline-block;
`;