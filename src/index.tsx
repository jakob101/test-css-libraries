import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from 'office-ui-fabric-react/lib/Button';

import glamorIndex from "./indexGlamor";
import styledIndex from "./indexStyled";

let el = document.createElement('div');
document.body.appendChild(el);

let content = (
  <div>
      <Button onClick={() => ReactDOM.render(glamorIndex, el)}>
          Glamor
      </Button>
      <Button onClick={() => ReactDOM.render(styledIndex, el)}>
          Styled components
      </Button>
  </div>
);

ReactDOM.render(content, el);