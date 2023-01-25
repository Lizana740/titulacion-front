export const icons =[
  {
    label:"ADMINISTRADOR",
    icon: 'pi pi-fw pi-users'
  },
  {
    label:"USUARIO PLANTA",
    icon: 'pi pi-fw pi-users'
  },
  {
    label:"MANTENEDOR",
    icon: 'pi pi-fw pi-users'
  }
]
export const administrador = [
    {
        label: 'Inicio',
        icon: 'pi pi-pw pi-home',
        route: '/app'

    },
    {
      label: 'Estaciones',
      items: [
          { label: ' Ver Estaciones', icon: 'pi pi-fw pi-building', route: 'estacion/listar' },
          { label: ' Ver Factores Abioticos', icon: 'pi pi-fw pi-chart-line', route: 'factor/visualizar' },
          { label: ' Mediciones', icon: 'pi  pi-fw pi-chart-pie', route: 'medicion/listar' },
      ]
  },
    {
      label: 'Estadísticas',
      items: [

          { label: 'Reportes', icon: 'pi pi pi-chart-bar', route: 'reporte/lista' },
      ]
    },
    {
        label: 'Dispositivos',
        items: [
            { label: 'Sensores', icon: 'pi pi-fw pi-compass', route: 'sensor/listar' },
            { label: 'Actuadores', icon: 'pi pi-fw pi-directions', route: 'actuador/listar' },
        ]
    },
    {
      label: 'Planes',
      items: [
          { label: 'Crear', icon: 'pi pi-fw pi-calendar', route: 'plan/listar' },
      ]
  },
    {
      label: 'Cuentas',
      items: [
          { label: 'Usuarios', icon: 'pi pi-fw pi-users', route: 'usuario/listar' },
      ]
  }

];

export const mantenedor = [
  {
      label: 'Inicio',
      icon: 'pi pi-pw pi-home',
      route: '/app'

  },
  {
    label: 'Mis Estaciones',
    items: [
        { label: 'Ver Estaciones', icon: 'pi pi-fw pi-users',  route:  'estacion/asignada' },
    ]
  },
  {
    label: 'Configuración',
    items: [
      { label: 'Sensores', icon: 'pi pi-fw pi-compass', route: 'sensor/listar' },
      { label: 'Actuadores', icon: 'pi pi-fw pi-directions', route: 'actuador/listar' },
    ]
  }


];

export const usuario_planta = [
  {
      label: 'Inicio',
      icon: 'pi pi-pw pi-home',
      route: '/app'

  },
  {
    label: 'Factores',
    icon: 'pi pi-fw pi-users',
    items: [
        { label: 'Visualizar Factores', icon: 'pi pi-fw pi-chart-line', route: 'factor/visualizar' },
    ]
  },
  {
    label: 'Estaciones',
    icon: 'pi pi-fw pi-users',
    items: [
        { label: 'Mis estaciones aisgnadas', icon: 'pi pi-fw pi-building', route: 'estacion/asignada' },
    ]
  }


];
