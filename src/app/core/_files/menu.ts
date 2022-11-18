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
          { label: 'Ver Estaciones', icon: 'pi pi-fw pi-users', route: 'instalacion/listar' },
      ]
  },
    {
      label: 'Estadisticas',
      items: [
          { label: 'Mediciones', icon: 'pi pi-chart-bar', route: 'medicion/listar' },
          { label: 'Actuadores', icon: 'pi pi-fw pi-users', route: 'usuario/listar' },
      ]
    },
    {
        label: 'Mantenedores',
        items: [
            { label: 'Sensores', icon: 'pi pi-fw pi-users', route: 'sensor/listar' },
            { label: 'Actuadores', icon: 'pi pi-fw pi-users', route: 'usuario/listar' },
        ]
    },
    {
      label: 'Cuentas',
      items: [
          { label: 'Usuarios', icon: 'pi pi-fw pi-users', route: 'usuario/listar' },
      ]
  }


];





