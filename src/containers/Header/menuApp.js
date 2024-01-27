export const adminMenu = [
  {
    // quản lý người dùng
    name: "menu.admin.manage-user",
    menus: [
      { name: "menu.admin.crud", link: "/system/user-manage" },
      { name: "menu.admin.crud-redux", link: "/system/user-redux" },
      {
        name: "menu.admin.manage-doctor",
        link: "/admin/manage-doctor",
        // subMenus: [
        //   {
        //     name: "menu.system.system-administrator.user-manage",
        //     link: "/system/user-manage",
        //   },
        //   {
        //     name: "menu.system.system-administrator.user-redux",
        //     link: "/system/User-Redux",
        //   },
        // ],
      },
      { name: "menu.admin.manage-admin", link: "/admin/manage-admin" },
    ],
  },
  {
    // quản lý phóng khám
    name: "menu.admin.clinic",
    menus: [{ name: "menu.admin.manage-clinic", link: "/admin/manage-clinic" }],
  },
  {
    // quản lý chuyên khoa
    name: "menu.admin.specialty",
    menus: [
      { name: "menu.admin.manage-specialty", link: "/admin/manage-specialty" },
    ],
  },
  {
    // quản lý cẩm nang
    name: "menu.admin.handbook",
    menus: [
      { name: "menu.admin.manage-handbook", link: "/admin/manage-handbook" },
    ],
  },
];
