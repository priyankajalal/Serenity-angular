import { CustomValidators } from "./../../common/validators";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';

import {  AuthenticationService } from '../../_services/index';
@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {

model: any = {};
loading = false;
returnUrl: string;
serverError:String="";

    loginForm = new FormGroup({
        username: new FormControl("", [
            Validators.required,
            Validators.minLength(3)
            //,CustomValidators.cannotContainSpace,CustomValidators.shouldBeUnique,
        ]),
        password: new FormControl("", [
            Validators.required,
            Validators.minLength(1) //,CustomValidators.cannotContainSpace,
        ]),
    });

constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        //this.loading = true;
        this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
        data=> {
          if(data.status =="fail"){
            this.router.navigate(["/upgrade",data.userId]);
          }
          else{
          if(this.returnUrl =="/")
                    {
                     this.router.navigate(["/dashboard"]);
                    }
                    else{
                    this.router.navigate([this.returnUrl]);
                    }
          }

        },
        err=>{

          this.serverError = err.error.message;
        }

        );
    }
}
