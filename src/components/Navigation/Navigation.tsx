import * as React from 'react';

import {NavigationItem} from '../../containers/NavigationItem';
import {useState} from "react";
import {useEffect} from "react";
import styled from "styled-components";

export const Navigation = ({navigationItems, currentTree}: {navigationItems: any, currentTree: any}) => {
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        setSelected([])
    }, [navigationItems]);

    return (
        <NavigationList>
            {navigationItems && navigationItems.length > 0 && navigationItems.map((item: any, key: any) => (
                <NavigationItem
                    key={key}
                    level={0}
                    selected={selected}
                    setSelected={setSelected}
                    item={item}
                    currentTree={currentTree}
                />
            ))}
        </NavigationList>
    );

};


const NavigationList = styled.ul`
    margin: 0;
    padding: 1em 0 2em 0;
`;