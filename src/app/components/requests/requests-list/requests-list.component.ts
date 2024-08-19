import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

interface IRequest {
    _id: string;
    name: string;
    phone?: string;
    email?: string;
    tariff?: string;
}

@Component({
    selector: 'app-requests-list',
    standalone: true,
    imports: [],
    templateUrl: './requests-list.component.html',
    styleUrl: './requests-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestsListComponent {
    @Input() requestsList!: IRequest[]
}
