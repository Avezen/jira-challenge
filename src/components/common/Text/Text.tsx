import * as React from 'react';
import { FormattedMessage } from 'react-intl';

export const Text = (props: FormattedMessage.Props & { className?: string }, {}) => {
    return (<FormattedMessage {...props} />);
};

