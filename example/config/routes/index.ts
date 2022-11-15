import home from './home';

export default [
  {
    path: '/',
    component: './index',
    routes: [
      home,
      { name: 'about', path: 'about', component: './About' },
      { name: 'docs', path: 'docs', component: './Docs' },
    ],
  },
];
