import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  categories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', icon: 'fa-brands fa-html5', level: 98, color: '#e34f26' },
        { name: 'CSS3, SCSS, SASS', icon: 'fa-brands fa-css3-alt', level: 98, color: '#264de4' },
        { name: 'JavaScript', icon: 'fa-brands fa-js', level: 90, color: '#f7df1e' },
        { name: 'Angular 14+', icon: 'fa-brands fa-angular', level: 90, color: '#dd0031' },
        { name: 'React, Next.js', icon: 'fa-brands fa-react', level: 70, color: '#61dafb' },
        { name: 'TypeScript', icon: 'bi bi-typescript', level: 85, color: '#3178c6' },
        { name: 'Bootstrap, Tailwind CSS', icon: 'bi bi-bootstrap-fill', level: 95, color: '#7952b3' },
        { name: 'jQuery', icon: 'fa-brands fa-js', level: 80, color: '#0769ad' }
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: 'ti ti-brand-nodejs', level: 80, color: '#339933' },
        { name: 'SQL Server', icon: 'bi-database-fill', level: 75, color: '#4479a1' },
        { name: 'MongoDB', icon: 'bi bi-leaf-fill', level: 85, color: '#47a248' }, // Added MongoDB
        { name: 'Firebase', icon: 'ti ti-brand-firebase', level: 70, color: '#ffca28' }
      ]
    },
    {
      title: 'Tools & Design',
      skills: [
        { name: 'VS Code', icon: 'bi bi-code-slash', level: 95, color: '#007acc' },
        { name: 'Figma', icon: 'ti ti-brand-figma', level: 85, color: '#f24e1e' },
        { name: 'Postman', icon: 'bi bi-send-fill', level: 90, color: '#ff6c37' }
      ]
    },
    {
      title: 'Version Control & DevOps',
      skills: [
        { name: 'Git', icon: 'fa-brands fa-git-alt', level: 92, color: '#f05032' },
        { name: 'GitHub', icon: 'fa-brands fa-github', level: 95, color: '#181717' },
        { name: 'GitLab', icon: 'fa-brands fa-gitlab', level: 80, color: '#fc6d26' }
      ]
    },
    {
      title: 'Payment Gateways',
      skills: [
        { name: 'Stripe', icon: 'bi bi-stripe', level: 90, color: '#635bff' },
        { name: 'Razorpay', icon: 'bi bi-credit-card-2-front-fill', level: 85, color: '#0d94fb' },
        { name: 'BillDesk', icon: 'bi bi-wallet2', level: 75, color: '#f58220' }
      ]
    }
  ];
}
