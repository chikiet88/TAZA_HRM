import { Route } from '@angular/router';
import { GioithieuComponent } from './gioithieu.component'; 
import { GioithieuResolver } from './gioithieu.resolvers'; 

export const gioithieuRoutes: Route[] = [
    {
        path     : '',
        component: GioithieuComponent,
        resolve  : {
            data: GioithieuResolver
        }
    }
];
