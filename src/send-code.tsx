import React from 'react';

import Button, { ButtonProps } from 'antd/es/button';

export interface ISendCodeProps extends ButtonProps {

}

class SendCode extends React.Component<ISendCodeProps> {

  render() {
    return (
      <Button />
    )
  }
}

export default SendCode;
