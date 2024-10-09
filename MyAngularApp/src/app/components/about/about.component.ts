import { Component } from '@angular/core';
import { ServiceComponent } from "../service/service.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ServiceComponent,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  items = [
    { id: 1, category: '1.6', items: ['Web Designing'] },
    { id: 2, category: '1.4', items: ['Client Exp'] },
    { id: 3, category: '1.2', items: ['Sahdev'] },
  ];
   
}
