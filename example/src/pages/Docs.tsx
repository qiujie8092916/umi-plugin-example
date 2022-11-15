import { Button, Card } from 'antd';
import React from 'react';

export default function () {
  return (
    <Card>
      {/**@CONFIGURE_AUTH
       * title: Home
       * type: component
       * action: TEST/HOME
       * path: api/home
       * haveData:null
       */}
      <Button>Home</Button>
    </Card>
  );
}
