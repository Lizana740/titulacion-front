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
        route: '/administrador'

    },
    {
      label: 'Estaciones',
      items: [
          { label: 'Ver Estaciones', icon: 'pi pi-fw pi-building', route: 'estacion/listar' },
          { label: 'Ver Factores Abioticos', icon: 'pi pi-fw pi-building', route: 'factor/visualizar' },
          { label: 'Mediciones', icon: 'pi pi-chart-bar', route: 'medicion/listar' },
      ]
  },
    {
      label: 'Estadisticas',
      items: [

          { label: 'Reportes', icon: 'pi pi pi-chart-bar', route: 'reporte/lista' },
      ]
    },
    {
        label: 'Mantenedores',
        items: [
            { label: 'Sensores', icon: 'pi pi-fw pi-users', route: 'sensor/listar' },
            { label: 'Actuadores', icon: 'pi pi-fw pi-users', route: 'actuador/listar' },
        ]
    },
    {
      label: 'Planes',
      items: [
          { label: 'Crear', icon: 'pi pi-fw pi-users', route: 'sensor/listar' },
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
      route: '/mantenedor'

  },
  {
    label: 'Mis Estaciones',
    items: [
        { label: 'Ver Estaciones', icon: 'pi pi-fw pi-users', route: 'instalacion/listar' },
    ]
  },
  {
    label: 'Configuración',
    items: [
        { label: 'Ver Estaciones', icon: 'pi pi-fw pi-users', route: 'instalacion/listar' },
    ]
  }


];

export const usuario_planta = [
  {
      label: 'Inicio',
      icon: 'pi pi-pw pi-home',
      route: '/planta'

  },
  {
    label: 'Mis Estaciones',
    items: [
        { label: 'Ver Estaciones', icon: 'pi pi-fw pi-users', route: 'factor/visualizar' },
    ]
  },


];
