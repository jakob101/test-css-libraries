import * as React from 'react';
import styled from 'styled-components';
import { Theme } from './Theme';

/* Strictly styling component!! no state */
/* https://github.com/styled-components/styled-components/blob/master/docs/typescript-support.md */
interface IIconProps {
    className?: string;
}

const Icon : React.SFC<IIconProps> = props => <i className={'ms-Icon ' + props.className}>{props.children}</i>;

let defaultStyles = {
  icon: `
    width: 16px;
  `,

  content: `
    padding: 0 4px;
    vertical-align: middle
  `
};

const StyledIcon = styled(Icon)`
  ${defaultStyles.content}
  ${defaultStyles.icon}
`;

export default StyledIcon;