import { CustomValidators } from "./../../common/validators";
import { Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-sign-up",
    templateUrl: "./sign-up.component.html",
    styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent implements OnInit {
    subcriptionTypes = [
        "Monthly RiaPro ($29.95)",
        "Annual RiaPro ($329.45)",
        "Lifetime ($2999.00)",
    ];

    agreementSigned;

    cardTypes = ["Visa", "Master Card", "American Express", "Discover"];

    signUpForm = new FormGroup({
        firstName: new FormControl("", [
            Validators.required,
            Validators.minLength(3),
        ]),
        lastName: new FormControl("", [
            Validators.required,
            Validators.minLength(3),
            CustomValidators.cannotContainSpace,
        ]),
        email: new FormControl("", [
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
        ]),
        password: new FormControl("", [
            Validators.required,
            Validators.minLength(3),
        ]),
        subType: new FormControl("", [Validators.required]),
        promoCode: new FormControl("", [Validators.maxLength(3)]),
        nameOnCard: new FormControl("", [Validators.required]),
        cardType: new FormControl("", [Validators.required]),
        cardNumber: new FormControl("", [Validators.required]),
        cvc: new FormControl("", [Validators.required]),
        expDate: new FormGroup({
            expMonth: new FormControl("", Validators.required),
            expYear: new FormControl("", Validators.required),
        }),
    });

    isSubmitted = false;

    constructor() {}

    ngOnInit() {}
}
