import React from 'react';
import { Text } from './Text/Text';


interface AppState {
    state: any;
}

const intlPath = 'navigation';

class MainPage extends React.Component
    <AppState> {
    public readonly state = {
        state: null,
    };


    public render() {
        return (
            <div>
                MainPage
                <br />
                <Text id={`${intlPath}.dashboard`}/>
            </div>
        );
    }
}


export default MainPage;
