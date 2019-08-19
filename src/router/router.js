import Home from '../view/Home';
import Login from '../view/Login';
import Article from '../view/Article';
import Author from '../view/Author';
import Aggregation from '../view/Aggregation';

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
  },
  {
    path: '/article',
    component: Article
  },
  {
    path: '/author',
    component: Author
  },
  {
    path: '/aggregation',
    component: Aggregation
  }
];

export default routers;
