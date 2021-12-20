import { Route } from '@angular/router';
import { TailieunguonComponent } from './tailieunguon.component'; 
import { TailieunguonResolver } from './tailieunguon.resolvers'; 

export const tailieunguonRoutes: Route[] = [
    {
        path     : '',
        component: TailieunguonComponent,
        resolve  : {
            data: TailieunguonResolver
        }
    }
];
