import { Component } from '@angular/core';

@Component({
  selector: 'app-box-page',
  templateUrl: './box-page.component.html',
  styleUrls: ['./box-page.component.css']
})
export class BoxPageComponent {
  sContentTitle:string="Content";
  sContentText:string="A wide and comprehensive approach to deliver true integration of services across the Continuum of Care, through a dedicated platform that offers full semantic interoperability based on Open Standards (FHIR) that enables the modernization of existing applications and the creation of an open ecosystem of solutions in a “API Economy” model.";
  sSubContentTitle:string="Sub Header";
  sSubContentText:string=`In this new approach, the role of Information Technology is essential: it enables an effective and efficient flow of information across multiple settings and stakeholders to ensure the best outcomes in each phase: from prevention to early detection, from diagnosis to treatment, from rehabilitation to follow-up and end-of-life. Patients, caregivers, health professionals are always aware of the overall pathway and they are able to contribute effectively to the final outcome.
  Dedalus offers multiple and diverse solutions for each phase of the continuum of care, ensuring the integration of every single care setting, institution and system in the process.`;
}

