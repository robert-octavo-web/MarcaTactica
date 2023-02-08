import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  form: FormGroup;
  
  constructor(private FormBuilder:FormBuilder){
    this.buildForm();
  }

  private buildForm() {

    this.form = this.FormBuilder.group({
      name: ['',  [Validators.required]],
      telefono: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required, Validators.maxLength(80)]],
    });
    // this.form.valueChanges
    // .pipe(
    //   debounceTime(500)
    // )
    // .subscribe(value => {
    //   console.log(value);
    // });
  }
  save(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
  }

  ngOnInit(){

  }

  // const formu =document.querySelector('form')

  // $formu.addEventListener('submit',handledSumit)

  // async function handledSumit(event){
  //   event.preventDefault()
  //   const form =new FormData(this)
  //   const response= await fetch(this.action,{
  //     method:this.method,
  //     body:form,
  //     headers:{
  //       'Accept':'aplication/json'
  //     }
  //   })
  //   if (response.ok){
  //     this.reset()
  //     alert('Gracias por contactarnos, te escribiremos pronto.')
  //   }
  // }
}
