export interface MenuItems {
  name: string;
  children: [] | MenuItem[];
}
export interface MenuItem {
  name:string;
  link: string;
  icon?: string;
}
