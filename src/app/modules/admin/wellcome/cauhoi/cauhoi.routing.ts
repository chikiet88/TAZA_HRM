import { Route } from '@angular/router';
import { CauhoiComponent } from './cauhoi.component'; 
import { CauhoiResolver } from './cauhoi.resolvers'; 

export const cauhoiRoutes: Route[] = [
    {
        path     : '',
        component: CauhoiComponent,
        resolve  : {
            data: CauhoiResolver
        }
    }
];
