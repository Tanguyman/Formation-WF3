// -- 1. Importation de la librairie Angular core
import { Component } from '@angular/core';

// -- 2. Déclaration du composant
@Component({
  // 2.a : Le selecteur pour le rendu dans l'application
  selector: 'app-root',
  // 2.b : le contenu HTML de notre composant
  //templateUrl: './app.component.htm' ATTENTION à url et à ' pour templateurl et ` pour template
  template: `
  <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                    aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
                <a class="navbar-brand" href="#">Project name</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <!--/.nav-collapse -->
        </div>
    </nav>

    <div class="container">

        <div class="starter-template">
            <h1>Bootstrap starter template</h1>
            <p class="lead">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones
                HTML document.</p>
        </div>

    </div>
  `,

  //2.c les styles CSS
  //styleUrls: ['./app.component.css']
  styles: [`
  
  `]
})

//--Notre code JS
export class AppComponent {
  title = 'app';
}
