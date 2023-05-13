// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name : string) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/admin/dashboard/statistics',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/admin/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'product',
    path: '/admin/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'order',
    path: '/admin/dashboard/order',
    icon: icon('ic_order'),
  },
  {
    title: 'blog',
    path: '/admin/dashboard/blog',
    icon: icon('ic_blog'),
  }
];

export default navConfig;
