import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GioithieuService } from './gioithieu.service'; 

@Injectable({
    providedIn: 'root'
})
export class GioithieuResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _gioithieuService: GioithieuService)
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
        return this._gioithieuService.getData();
    }
}
