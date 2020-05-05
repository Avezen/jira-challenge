import React, {Component} from 'react';
import {withHelmet, WithHelmetProps} from "../../hoc/withHelmet";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {PublicPageWrapper} from "../../wrappers/PublicPageWrapper";

class AboutPageBase extends Component<WithHelmetProps & RouteComponentProps> {
    render() {
        return (
            <PublicPageWrapper>
                <div
                    className={'content'}
                >
                    <div
                        className={'content--inner'}
                    >
                        About page
                    </div>
                </div>
            </PublicPageWrapper>
        );
    }
}

export const AboutPageWithHelmet = withHelmet(AboutPageBase);

export const AboutPage = withRouter(AboutPageWithHelmet);