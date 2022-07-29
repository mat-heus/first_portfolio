import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactSService } from '../contact-s.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  FormData: FormGroup = this.builder.group({
    Fullname: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
    Email: ['', Validators.compose([Validators.required, Validators.email])],
    Comment: ['', Validators.required],
  });

  /** o formulário só será enviado se o nome tiver entre 3 e 50 caracteres, o e-mail for válido, e houver um comentário preenchido */

  constructor(private builder: FormBuilder, private contact: ContactSService) { }

  onSubmit(FormData: any) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
      location.href = 'https://mailthis.to/confirm'
      console.log(response)
    },
    error => {
      console.warn(error.responseText)
      console.log({ error })
    })
  }

  ngOnInit(): void {

  }

}
