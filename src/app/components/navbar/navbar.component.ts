import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule for navigation
import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',// Optional: add CSS if you have it
    standalone: true,
    imports: [CommonModule, RouterModule] // Add required modules for templates
})
export class NavbarComponent { }
