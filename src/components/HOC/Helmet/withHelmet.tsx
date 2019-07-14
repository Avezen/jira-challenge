import * as React from 'react';
import { Helmet } from 'react-helmet';
import { injectIntl, InjectedIntlProps, FormattedMessage } from 'react-intl';

export interface WithHelmetProps {
  messagePrefix: string;
}

export function withHelmet<T extends WithHelmetProps>(
  WrappedComponent: React.ComponentType<T>
) {
  return injectIntl(({ intl, ...props }: T & InjectedIntlProps) => (
    <React.Fragment>
      <FormattedMessage id={`${props.messagePrefix}.pageTitle`}>
        {txt => (
          <Helmet>
            <title>{txt}</title>
          </Helmet>
        )}
      </FormattedMessage>

      {/* TODO: this is a (hopefully) temporary workaround to TS generic issues */}
      <WrappedComponent {...props as any} />
    </React.Fragment>
  ));
}
