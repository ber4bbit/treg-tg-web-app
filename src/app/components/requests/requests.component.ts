import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { RequestsService } from './requests.service';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RequestsListComponent } from "./requests-list/requests-list.component";

interface IRequest {
    _id: string;
    name: string;
    phone?: string;
    email?: string;
    tariff?: string;
}

@Component({
    selector: 'app-requests',
    standalone: true,
    imports: [
    AsyncPipe,
    RequestsListComponent
],
    templateUrl: './requests.component.html',
    styleUrl: './requests.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestsComponent implements OnInit {
    requestsList!: Observable<IRequest[]>

    constructor(
        @Inject(RequestsService) private requestsService: RequestsService
    ) {}

    ngOnInit(): void {
        this.requestsList = this.requestsService.getAllRequests()
    }
}
