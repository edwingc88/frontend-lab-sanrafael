import { lazy } from 'react'

const Alerts = lazy(() => import('../pages/UiElements/Alerts'))
const Calendar = lazy(() => import('../pages/Calendar'))
/*
const Settings = lazy(() => import('../pages/Settings'))
const Tables = lazy(() => import('../pages/Tables'))
 */
const FormOrder = lazy(() => import('../pages/Form/FormOrder'))
const FormOrders = lazy(() => import('../pages/Form/FormOrders'))
const FormOrdersEdit = lazy(() => import('../pages/Form/FormOrdersEdit'))
const FormOrdersAdd = lazy(() => import('../pages/Form/FormOrdersAdd'))
const FormLayout = lazy(() => import('../pages/Form/FormLayout'))
const FormClient = lazy(() => import('../pages/Form/FormClient'))
const FormClientEdit = lazy(() => import('../pages/Form/FormClientEdit'))
const FormClientAdd = lazy(() => import('../pages/Form/FormClientAdd'))
const FormElements = lazy(() => import('../pages/Form/FormElements'))
const Chart = lazy(() => import('../pages/Chart'))

const Profile = lazy(() => import('../pages/Profile'))
const Buttons = lazy(() => import('../pages/UiElements/Buttons'))
const EmpresaAdd = lazy(() => import('../pages/UiElements/EmpresaAdd'))
const EmpresaEdit = lazy(() => import('../pages/UiElements/EmpresaEdit'))
const Empresa = lazy(() => import('../pages/UiElements/Empresa'))
const Empresas = lazy(() => import('../pages/UiElements/Empresas'))
const User = lazy(() => import('../pages/UiElements/User'))
const Users = lazy(() => import('../pages/UiElements/Users'))

const coreRoutes = [
  {
    path: '/calendar',
    title: 'Calender',
    component: Calendar
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout
  },
  {
    path: '/forms/form-client',
    title: 'Form Client',
    component: FormClient
  }, {
    path: '/forms/form-client-edit',
    title: 'Form Client Edit',
    component: FormClientEdit
  }, {
    path: '/forms/form-client-add',
    title: 'Form Client Add',
    component: FormClientAdd
  },
  {
    path: '/forms/form-order',
    title: 'Form Order',
    component: FormOrder
  },
  {
    path: '/forms/form-orders',
    title: 'Form Orders',
    component: FormOrders
  },
  {
    path: '/forms/form-orders-add',
    title: 'Form Orders Add',
    component: FormOrdersAdd
  },
  {
    path: '/forms/form-orders-edit',
    title: 'Form Orders Edit',
    component: FormOrdersEdit
  },
  /*
  {
    path: '/tables',
    title: 'Tables',
    component: Tables
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings
  }, */
  {
    path: '/chart',
    title: 'Chart',
    component: Chart
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons
  },
  {
    path: '/ui/empresas',
    title: 'Empresas',
    component: Empresas
  },
  {
    path: '/ui/empresa',
    title: 'Empresa',
    component: Empresa
  },
  {
    path: '/ui/empresa-edit',
    title: 'Empresa Edit',
    component: EmpresaEdit
  },
  {
    path: '/ui/empresa-add',
    title: 'Empresa Add',
    component: EmpresaAdd
  },
  {
    path: '/ui/users',
    title: 'Usuarios',
    component: Users
  },
  {
    path: '/ui/user',
    title: 'Usuario',
    component: User
  }
]

const routes = [...coreRoutes]
export default routes
