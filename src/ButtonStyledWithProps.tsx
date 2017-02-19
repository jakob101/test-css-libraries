import * as React from 'react';
import styled from 'styled-components';

interface Button {
  primary: boolean;
  // see https://github.com/Microsoft/TypeScript/issues/8588
  children?: React.ReactChild,
  className?: string,
}

class Button extends React.Component<Button, {}> {
    render() {
        return  <div className={this.props.className}>
                  {this.props.children}
                </div>;
    }
}


const StyledButton = styled(Button)`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default StyledButton;