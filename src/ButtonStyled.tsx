import * as React from 'react';
import ButtonStyled from "./ButtonStyledPresentation";
import IconStyled from "./IconStyledPresentation";

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  styles?: any;
};

export interface IButtonState {
  isToggled: boolean;
}

export class Button extends React.Component<IButtonProps, IButtonState> {
  constructor() {
    super();

    this.state = {
      isToggled: false
    }
  }

  public render() {
    return  <ButtonStyled 
              styles={this.props.styles} 
              isToggled={this.state.isToggled} 
              onClick={() => this.setState({ isToggled: !this.state.isToggled })}>
              <IconStyled className="ms-Icon--Mail" />
              <span>{ this.props.children }</span>
              <IconStyled className="ms-Icon--ChevronDown" />
              <span className='ms-FocusRect' />
            </ButtonStyled>;
  }
}

export default Button;