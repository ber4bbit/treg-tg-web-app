import { Component } from '@angular/core';

interface IRequest {
    name: string;
}

@Component({
    selector: 'app-requests',
    standalone: true,
    imports: [],
    templateUrl: './requests.component.html',
    styleUrl: './requests.component.scss'
})
export class RequestsComponent {
    requestsList: IRequest[] = [
        {
            name: 'aopsdkasd;l'
        },
        {
            name: 'aopsdkasd;l'
        },
        {
            name: 'aopsdkasd;l'
        },
        {
            name: 'aopsdkasd;l'
        },
        {
            name: 'aopsdkasd;l'
        },
        {
            name: 'aopsdkasd;l'
        }
    ]
}
