import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

export interface MenuItemProps {
    className: any;
    label: any;
    to: any;
    onClick: any;
    active: any;
}

export const MenuItem = ({className, label, to, onClick, active}: MenuItemProps) => {

    return (
        <MenuListItem>
            <Link
                to={to}
                className={className}
                onClick={() => onClick(label)}
            >
                <MenuSpan>
                    {label}
                </MenuSpan>
            </Link>
        </MenuListItem>
    );
};

const MenuListItem = styled.li`
    display: inline-block;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
`;

const MenuSpan = styled.span`
    padding: 4px 16px;
`;


