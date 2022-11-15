import { Button, Card } from 'antd';
import React from 'react';

export default function () {
  return (
    <Card>
      {/**@CONFIGURE_AUTH
       * title: About
       * type: component
       * action: TEST/ABOUT
       * path: api/about
       * authority: false
       * haveData:true
       */}
      <Button>About</Button>
    </Card>
  );
}
