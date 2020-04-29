import * as React from 'react';
import {useState} from "react";
import {NavigationItem} from "../../../../containers/NavigationItem";
import {useEffect} from "react";
import styled from "styled-components";

export interface NestedNavigationItemProps {
    className?: any;
    item: any;
    level: any;
    selected: any;
    setSelected: any;
    path: any;
    urlPath: any;
    currentTree: any;
}

export const NestedNavigationItem = ({className, item, level, selected, setSelected, path, urlPath, currentTree}: NestedNavigationItemProps) => {

    const [open, setOpen] = useState(false);

    const {label, nestedRoutes, topics} = item;

    useEffect(() => {
        if (selected[level - 1] === item.id) {
            setOpen(true);
        } else if (selected.length === 0) {
            setOpen(false);
        }
    }, [selected]);

    return (
        <li>
            <NavigationButton
                level={level}
                selected={selected[level - 1] === item.id}
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <span>
                    {label}
                </span>
                <ArrowContainer open={open}>
                    <svg
                        focusable="false"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                    </svg>
                </ArrowContainer>
            </NavigationButton>
            <NestedRoutes open={open}>
                <NestedNavigationList>
                    {nestedRoutes && nestedRoutes.map((item: any, key: any) => (
                        <NavigationItem
                            key={key}
                            item={item}
                            level={level}
                            selected={selected}
                            setSelected={setSelected}
                            currentPath={path}
                            currentUrlPath={urlPath}
                            currentTree={currentTree}
                        />
                    ))
                    }
                    {topics && topics.map((item: any, key: any) => (
                            <NavigationItem
                                key={key}
                                item={item}
                                level={level}
                                selected={selected}
                                setSelected={setSelected}
                                currentPath={path}
                                currentUrlPath={urlPath}
                                currentTree={currentTree}
                            />
                        ))
                    }
                </NestedNavigationList>
            </NestedRoutes>
        </li>
    );
};


const NavigationButton = styled.button<{selected: boolean, level: number}>`
    width: 100%;
    text-transform: uppercase;    
    margin: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    text-align: left;
    color: ${props => props.selected ? 'blue' : 'black'};
    padding: 10px 10px 10px ${props => 10 + props.level * 8}px;
`;

const ArrowContainer =  styled.div<{open: boolean}>`
    width: 18px;
    float: right;
    transition: all 0.2s;
    
    transform: rotate(${props => props.open ? 90 : 0}deg);
`;

const NestedRoutes = styled.div<{open: boolean}>`
    max-height: ${props => props.open ? 4000 : 0}px;
    opacity: ${props => props.open ? 1 : 0};
    overflow: hidden;
    transition: all ${props => props.open ? 0.3 : 0.1}s;
    transition-timing-function: ease-in-out;

`;

const NestedNavigationList = styled.ul`
    margin: 0;
    padding: 0;
`;


