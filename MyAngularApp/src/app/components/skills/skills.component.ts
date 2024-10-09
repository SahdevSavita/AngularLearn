import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  // skillItems = [

  //   { id: 1, category: ['Html'] },
  //   { id: 2, category: ['Css']},

  // ];

  // skillsimg: string[] = [
  //   'html-5.png',
  //    'css-3.png'

  // ]

  technologies = [
    { name: 'HTML 5', image: 'html-5.png' },
    { name: 'CSS 3', image: 'css-3.png' },
    { name: 'Sass CSS', image: 'sass.png' },
    { name: 'jQuery', image: 'jquiry.png' },
    { name: 'JavaScript basic Knowledge', image: 'js.png' },
    { name: 'WordPress', image: 'wordpress.png' },
    { name: 'Photoshop', image: 'photoshop.png' },
    { name: 'Figma', image: 'figma1.png'},
    { name: 'Angular basic Knowledge', image: 'angular.png' },
    { name: 'Bootstrap3/4/5', image: 'bootstrap.png' },
    { name: 'Responsive Design', image: 'responsive-page 1.png' },
    { name: 'Content Optimization', image: 'optim.png'},
  ];


}
