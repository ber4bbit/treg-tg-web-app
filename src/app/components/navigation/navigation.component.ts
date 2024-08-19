import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

enum NavigationLinksEnum {
    AllRequestsRoute = '/requests'
}

interface NavigationLinks {
    route: NavigationLinksEnum,
    text: string
}

@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [
        RouterLink
    ],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
    navLinks: NavigationLinks[] = [
        {
            route: NavigationLinksEnum.AllRequestsRoute,
            text: 'Все заявки'
        }
    ]
}
