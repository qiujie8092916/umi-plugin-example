import 'antd/dist/antd.css';
import React from 'react';
import echoRoutes from '@@/plugin-example/echoRoutes';

export default function () {
  return <div>{JSON.stringify(echoRoutes, null, 2)}</div>;
}
