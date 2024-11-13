import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @ViewChild('navbar') navbar!: ElementRef;
  
  constructor(private renderer: Renderer2,
              private router: Router
  ) {}

  addFolder(title: string): void {
    const folder = this.renderer.createElement('a');
    
    const capitalizeTitle = title[0].toUpperCase() + title.slice(1);
    const folderName = this.renderer.createText(capitalizeTitle);
    this.renderer.appendChild(folder, folderName);

    const lowercaseTitle = title[0].toLowerCase() + title.slice(1);
    console.log(`/folder/${lowercaseTitle}`);
    this.renderer.setAttribute(folder, 'routerLink', `/folder/${lowercaseTitle}`);
    this.renderer.setAttribute(folder, 'routerLinkActive', 'active');

    folder.addEventListener('click', () => {
      this.router.navigate([`/folder/${lowercaseTitle}`]);
    });

    // Append the new folder to the navbar
    const navbarElement = this.navbar.nativeElement;
    this.renderer.appendChild(navbarElement, folder);

  }
}
