import React, {Component} from 'react';
import {withHelmet, WithHelmetProps} from "../components/HOC/withHelmet";
import {RouteComponentProps, withRouter} from "react-router-dom";

class AboutPageBase extends Component<WithHelmetProps & RouteComponentProps> {
    render() {
        return (
            <div className={'content'}>
                <div className={'content--inner'}>
                    AboutPage
                </div>
            </div>
        );
    }
}

export const AboutPageWithHelmet = withHelmet(AboutPageBase);

export const AboutPage = withRouter(AboutPageWithHelmet);