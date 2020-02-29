import React, {Component} from 'react';

export const ModalContext = React.createContext({
    openModal: (component: any) => {},
    closeModal: () => {},
});

class ModalProvider extends Component<{}, {isToggleOn: any, currentModal: any}> {
    state = {
        isToggleOn: false,
        currentModal: null
    };

    render() {
        const {currentModal} = this.state;
        const {children} = this.props;

        return (
            <ModalContext.Provider value={{openModal: this.openModal, closeModal: this.closeModal}}>
                {currentModal}
                {children}
            </ModalContext.Provider>
        );
    }

    closeModal = () => {
        this.setState({currentModal: null, isToggleOn: false});
    };

    openModal = (component: any) => {
        this.setState({currentModal: component, isToggleOn: true});
    };
}

export default ModalProvider;