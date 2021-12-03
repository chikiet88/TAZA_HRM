import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CauhoiService } from './cauhoi.service'; 

@Injectable({
    providedIn: 'root'
})
export class CauhoiResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _cauhoiService: CauhoiService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {
        return this._cauhoiService.getData();
    }
}
