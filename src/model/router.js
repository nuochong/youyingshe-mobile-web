import Home from '../components/Home';
import Login from '../components/Login';

let routers = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/home',
    component: Home,
    // routes: [
    //   /*嵌套路由*/
    //   {
    //     path: '/user/',
    //     component: UserList
    //   }
    // ]
  },
  {
    path: '/login',
    component: Login
  }
];

export default routers;
