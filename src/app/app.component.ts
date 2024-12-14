import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {fontAwesomeIcons} from "./shared/font-awesome-icons";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'whatsapp-clone-frontend';
  private faIconLibrary = inject(FaIconLibrary);

  ngOnInit(): void {
    this.initFontAwesome();
  }
  
  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
  
}

