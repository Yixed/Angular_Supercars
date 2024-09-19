import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  //Define variable for password sight config
  passwordType: string = 'password';
  form!: FormGroup;

  constructor(
    private builder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = builder.group({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      pwd: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  //^(?=.*[A-Z]):                 min 1 mayuscula
  // (?=.*[a-z]):                 min 1 minuscula
  // (?=.*\d):                    min un numero
  // [A-Za-z\d$@$!%*?&]{4,12}:    [caracteres permitidos], y {min y max}.
  //
  signup() {
    this.authService
      .signup(this.form.value.name, this.form.value.email, this.form.value.pwd)
      .subscribe({
        next: () => {
          //if OK then pop up ok and login
          console.log(Response);
          
          this.router.navigateByUrl('/login');
          //if not, pop up not ok
        },
        error: () => {},
      });
  }
}
