import React from 'react';
import styled from "styled-components";


export const TaskItem = ({task}: {task: any}) => {

    return(
        <React.Fragment>
            <ListItemHeader>
                <h5>
                    {task.name}
                </h5>
                <ItemHeaderLabel>
                    BUG
                </ItemHeaderLabel>
            </ListItemHeader>
            <ListItemBody>
                <div className="date">
                    12-08
                </div>
                <div className="users">
                    <div className="avatar--circle">

                    </div>
                    <label>
                        ->
                    </label>
                    <div className="avatar--circle">

                    </div>
                </div>
            </ListItemBody>
        </React.Fragment>
    );
};


const ListItemHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ItemHeaderLabel = styled.label`
    background-color: red;
    border-radius: 10px;
    padding: 5px;
`;

const ListItemBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
