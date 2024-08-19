import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from "./components/navigation/navigation.component";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
    RouterModule,
    NavigationComponent
],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'treg-tg-web-app_frontend';
}
