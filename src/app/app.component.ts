import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-template';
  features=[
    {
      title:"About",
      description:"At Dedalus, every day we do something special by helping caregivers and health professionals deliver better care to their served communities. See their stories, understand how we helped them achieve valuable results for professionals, patients, communities."
    },
    {
      title:"Company",
      description:"You can help to improve the quality of the care delivered to patients, helping doctors, nurses and all healthcare staff to work better.We have over 40 years experience of delivering healthcare software and services to over 6,300 healthcare organizations."
    },
    {
      title:"Services",
      description:"Our software is used widely across the world, managing each year more than 3 billion diagnostic results, serving 540 millions of population, 28 million Inpatient and 35 million Emergency admissions, and in primary care, we serve more than 120 million Citizens."
    }
  ];
}
