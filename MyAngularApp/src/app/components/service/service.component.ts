import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, SkillsComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  
  items = [
    { id:1, textobject:['01'],category: ['Web Designing'],items: ['We create web pages design, banner and social media posts design etc.']},

    { id:2, textobject:['02'],category: ['Web Designing'], items: ['Web development refers to the process of building, creating, and maintaining websites or web applications.'] }
  ];
  image: string[] = [
  'Arrow.png',
]

}
