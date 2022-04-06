Ext.define('MyApp.view.main.Extra', {
  extend: 'Ext.container.Container',
  xtype: 'Extra',
  viewModel: 'main',
  items: [
    {
      title: 'Users',
      iconCls: 'fa-user',
      //   xtype: 'Extra',
      bind: {
        html: '{loremIpsum}',
      },
    },
  ],
});
