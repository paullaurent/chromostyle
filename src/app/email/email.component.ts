import { Component } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators, FormBuilder } from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  groupeNom: FormGroup;
  groupeEntreprise: FormGroup;
  groupeEmail: FormGroup;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(
    private _formBuilder: FormBuilder
  ){}


  ngOnInit() {
    this.groupeEmail = this._formBuilder.group({
      objet: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
    this.groupeEntreprise = this._formBuilder.group({
      nomEntreprise: ['', Validators.required],
      villeEntreprise: ['', Validators.required]
    });
    this.groupeNom = this._formBuilder.group({
      nomClient: ['', Validators.required]
    });
  }

  envoyer(){
    
  }
}
