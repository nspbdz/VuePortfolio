export const state = () => ({
  items: [
    { title: 'Anime', to: '/auth/anime', icon: 'mdi-home' },
    // { title: 'Component', to: '/auth/component', icon: 'mdi-card' },
    // { title: 'Fetch', to: '/auth/fetch', icon: 'mdi-restart' },
    { title: 'About', to: '/auth/About', icon: 'mdi-restart' },
    {
      title: 'Dropdown',
      to: '/auth/about',
      icon: 'mdi-form-dropdown',
      children: [
        { title: 'Dropdown 1', to: '/auth/home', icon: 'mdi-form-dropdown' },
        {
          title: 'Dropdown 2',
          to: '/auth/home',
          icon: 'mdi-form-dropdown',
          children: [
            {
              title: 'Dropdown 2.1',
              to: '/auth/home',
              icon: 'mdi-form-dropdown',
            },
            {
              title: 'Dropdown 2.2',
              to: '/auth/home',
              icon: 'mdi-form-dropdown',
            },
          ],
        },
        { title: 'Dropdown 3', to: '/auth/home', icon: 'mdi-form-dropdown' },
      ],
    },
  ],
})
