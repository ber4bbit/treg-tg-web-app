import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RequestsComponent } from "./components/requests/requests.component";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, RequestsComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'treg-tg-web-app_frontend';
}
