import * as React from 'react';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import {createRef} from "react";
import {useEffect} from "react";
import styled from "styled-components";

export interface NavigationItemLinkProps {
    className?: any;
    item: any;
    level: any;
    selected: any;
    setSelected: any;
    path: any;
    urlPath: any;
    location: any;
    currentTree: any;
}

export const NavigationItemLinkBase = ({className, item, level, selected, setSelected, path, urlPath, location, currentTree}: NavigationItemLinkProps & RouteComponentProps) => {
    const {name, label} = item;

    useEffect(() => {
        if (`/${currentTree + urlPath}` === location.pathname) {
            if (JSON.stringify(selected) !== JSON.stringify(path)) {
                setSelected(path);
            }
        }
    });

    return (
        <li>
            <StyledLink
                level={level}
                to={`/${currentTree + urlPath}`}
                onClick={() => {
                    setSelected(path);
                }}
            >
                <span>
                    {name || label}
                </span>
            </StyledLink>
        </li>
    );

};

export const NavigationItemLink = withRouter(NavigationItemLinkBase);


const StyledLink = styled(Link)<{level: number}>`
    width: 100%;
    padding: 10px 10px 10px ${props => 10 + props.level * 8}px;
    display: block;
    box-sizing: border-box;
    text-decoration: none;
    text-transform: uppercase;
`;

