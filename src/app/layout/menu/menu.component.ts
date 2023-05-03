import { Component } from '@angular/core';
import { MenuItems } from './model/navitems';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
})
export class MenuComponent {
  navItems: MenuItems[] = [
    {
      name: 'Меню',
      children: [
        {
          name: 'Главная',
          link: 'general',
          icon:"dashboard"
        },
        {
          name: 'Новости',
          link: 'news',

        },
      ],
    },
  ];
}
