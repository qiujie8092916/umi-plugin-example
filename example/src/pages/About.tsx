import { Button, Card } from 'antd';
import React from 'react';

export default function () {
  return (
    <Card>
      {/**@CONFIGURE_AUTH
       * title: Docs
       * type: component
       * action: TEST/DOCS
       * path: api/docs
       * haveData:false
       * authority:["TEST/DOCS2"]
       */}
      <Button>Docs</Button>
    </Card>
  );
}
