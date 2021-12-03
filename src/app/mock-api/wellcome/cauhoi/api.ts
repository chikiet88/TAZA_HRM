import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { cauhoi as cauhoiData } from 'app/mock-api/wellcome/cauhoi/data';

@Injectable({
    providedIn: 'root'
})
export class CauhoiMockApi
{
    private _cauhoi: any = cauhoiData;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Sales - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/wellcome/cauhoi')
            .reply(() => [200, cloneDeep(this._cauhoi)]);
    }
}
