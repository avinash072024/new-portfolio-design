import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  experienceYears = 5; // Example dynamic data
  projectsCompleted = 50;

  education = [
    { year: '2015 - 2018', degree: 'Master of Computer Application', school: 'Shivaji University, Kolhapur', desc: 'Specialized in Computer Science with a focus on Web Technologies.' },
    { year: '2012 - 2015', degree: 'Bachelor of Science', school: 'Shivaji University, Kolhapur', desc: 'Focused on Computer Science and Mathematics.' },
    { year: '2011 - 2012', degree: 'Higher Secondary', school: 'Science Academy', desc: 'Focused on Mathematics and Physics.' }
  ];

  experience = [
    { year: '2024 - Present', role: 'Senior Web Developer', company: 'Manorama Infosolutions Pvt. Ltd.', desc: 'Leading the frontend team to build scalable Angular applications.' },
    { year: '2022 - 2024', role: 'Web Developer', company: 'Bluebenz Digitizations Pvt. Ltd.', desc: 'Developed responsive UI components using Bootstrap and Angular.' },
    { year: '2021 - 2022', role: 'Junior Web Developer', company: 'MindLine Technologies Pvt. Ltd.', desc: 'Designed & developed responsive websites using Bootstrap.' }
  ];
}
