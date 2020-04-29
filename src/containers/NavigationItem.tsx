import * as React from 'react';
import {NestedNavigationItem} from "../layouts/components/Navigation/NavigationItem/NestedNavigationItem";
import {NavigationItemLink} from "../layouts/components/Navigation/NavigationItem/NavigationItemLink";

export interface NavigationItemProps {
    className?: any;
    item: any;
    level: any;
    selected: any;
    setSelected: any;
    currentPath?: any;
    currentUrlPath?: any;
    currentTree: any;
}

export const NavigationItem = ({className, item, level, selected, setSelected, currentPath, currentUrlPath, currentTree}: NavigationItemProps) => {
    level++;

    let path = [];
    let urlPath = '';

    if (currentPath) {
        path = ([...currentPath, item.id]);
    } else {
        path.push(item.id);
    }

    if (currentUrlPath) {
        urlPath = currentUrlPath + (item.to ? `/${item.to}` : `/${item.name.toLowerCase().replace(/\s/g, '-')}`);
    } else {
        urlPath = item.to ? `/${item.to}` : `/${item.name.toLowerCase().replace(/\s/g, '-')}`
    }

    if ((item.topics && item.topics.length > 0) || (item.nestedRoutes && item.nestedRoutes.length > 0)) {
        return (
            <NestedNavigationItem
                item={item}
                level={level}
                selected={selected}
                setSelected={setSelected}
                path={path}
                urlPath={urlPath}
                currentTree={currentTree}
            />
        );
    } else {
        return (
            <NavigationItemLink
                item={item}
                level={level}
                selected={selected}
                setSelected={setSelected}
                path={path}
                urlPath={urlPath}
                currentTree={currentTree}
            />
        );
    }
};


