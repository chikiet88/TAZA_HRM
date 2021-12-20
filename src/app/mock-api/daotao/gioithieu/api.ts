import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { gioithieu as gioithieuData } from 'app/mock-api/wellcome/gioithieu/data';

@Injectable({
    providedIn: 'root'
})
export class GioithieuMockApi
{
    private _gioithieu: any = gioithieuData;

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
            .onGet('api/wellcome/gioithieu')
            .reply(() => [200, cloneDeep(this._gioithieu)]);
    }
}
