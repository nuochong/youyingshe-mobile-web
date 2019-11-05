import Home from '../view/Home';
import Login from '../view/Login';
import Article from '../view/Article';
import Author from '../view/Author';
import Aggregation from '../view/Aggregation';
import Redux from '../view/Redux';
import Redux2 from '../view/Redux2';
import Directory from '../view/Directory';
import Classify from '../view/Classify';
import Bookrack from '../view/Bookrack';
import WeekHot from '../view/WeekHot';
import SpecialOffer from '../view/SpecialOffer';
import Admire from '../view/Admire';
import AdmirePay from '../view/AdmirePay';

let routers = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/home',
    component: Home
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
  },
  {
    path: '/redux',
    component: Redux
  },
  {
    path: '/redux2',
    component: Redux2
  },
  {
    path: '/directory',
    component: Directory
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/bookrack',
    component: Bookrack
  },
  {
    path: '/week-hot',
    component: WeekHot
  },
  {
    path: '/special-offer',
    component: SpecialOffer
  },
  {
    path: '/admire',
    component: Admire
  },
  {
    path: '/admire-pay',
    component: AdmirePay
  }
];

export default routers;
