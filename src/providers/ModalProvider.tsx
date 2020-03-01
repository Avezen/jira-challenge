import React, {Component} from 'react';

export const ModalContext = React.createContext({
    openModal: (component: any) => {},
    closeModal: () => {},
    isToggleOn: false,
    currentModal: null,
});

class ModalProvider extends Component<{}, {isToggleOn: any, currentModal: any}> {
    state = {
        isToggleOn: false,
        currentModal: null,
        openModal: (component: any) => {
            document.body.style.overflow = 'hidden';
            this.setState({currentModal: component, isToggleOn: true});
        },
        closeModal: () => {
            document.body.style.overflow = 'unset';
            this.setState({currentModal: null, isToggleOn: false});
        },
    };

    render() {
        const {currentModal, isToggleOn} = this.state;
        const {children} = this.props;

        return (
            <ModalContext.Provider value={this.state}>
                {currentModal}
                {children}
            </ModalContext.Provider>
        );
    }



}

export default ModalProvider;