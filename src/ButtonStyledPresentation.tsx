import * as React from 'react';
import styled from 'styled-components';
import { Theme } from './Theme';

/* Strictly styling component!! no state */
/* https://github.com/styled-components/styled-components/blob/master/docs/typescript-support.md */

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  styles: any;
  isToggled: boolean;
  className?: string;
}

const Button : React.SFC<IButtonProps> = props => <button className={'ms-Button ' + props.className}>{props.children}</button>;

let defaultStyles = {
  base: `
    background: ${Theme.themePrimary};
    color: #fff;
    border: none;
    font-family: ${Theme.baseFont.fontFamily};
    font-weight: ${Theme.baseFont.fontWeight};
    font-size: 14px;
    height: 32px;
    line-height: 32px;
    margin: 0;
    min-width: 80px;
    outline: none;
    padding: 0 16px;
    position: relative;
    -webkit-font-smoothing: antialiased;

    &:hover {
      background: ${Theme.themeSecondary}
    }
  `,

  toggled: `
    background: ${Theme.themeDark};

    &:hover {
      background: ${Theme.themeDarker}
    }
  `,

  focusRect: `
      display: none;
      position: absolute;
      left: 1;
      top: 1;
      bottom: 1;
      right: 1;
      border: 1px solid;
      borderColor: ${Theme.white};
  `,

  icon: `
    width: 16px;
  `,

  content: `
    padding: 0 4px;
    vertical-align: middle
  `
};

const StyledButton = styled(Button)`
  ${defaultStyles.base}
  ${props => props.styles && props.styles.base}
  ${props => props.isToggled ? defaultStyles.toggled : ""}
  ${props => props.isToggled ? props.styles.toggled : ""}
`;

export default StyledButton;