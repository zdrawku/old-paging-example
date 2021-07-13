import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RemotePagingService {
    public remotePagingData: BehaviorSubject<any[]>;
    public dataLenght: BehaviorSubject<number> = new BehaviorSubject(0);
    public url = 'https://www.igniteui.com/api/products';

    constructor(private http: HttpClient) {
        this.remotePagingData = new BehaviorSubject([]);
    }

    public getPagingData(index?: number, perPage?: number): any {
        let qS = '';

        if (perPage) {
            qS = `?$skip=${index}&$top=${perPage}&$count=true`;
        }

        this.http
            .get(`${this.url + qS}`).pipe(
                map((data: any) => data)
            ).subscribe((data) => this.remotePagingData.next(data));
    }

    public getPagingDataLength(): any {
        return this.http.get(this.url).pipe(
            map((data: any) => data.length)
        );
    }
}
