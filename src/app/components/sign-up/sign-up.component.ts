import { Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit, NgZone } from "@angular/core";
import { LiveService } from "../../services/live.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-sign-up",
    templateUrl: "./sign-up.component.html",
    styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent implements OnInit {
    displayDialog = false;
    displayPromo = false;

    expYears = [
        { year: 2019 },
        { year: 2020 },
        { year: 2021 },
        { year: 2022 },
        { year: 2023 },
        { year: 2024 },
        { year: 2025 },
        { year: 2026 },
        { year: 2027 },
        { year: 2028 },
        { year: 2029 },
        { year: 2030 },
    ];
    expMonths = [
        { month: 1 },
        { month: 2 },
        { month: 3 },
        { month: 4 },
        { month: 5 },
        { month: 6 },
        { month: 7 },
        { month: 8 },
        { month: 9 },
        { month: 10 },
        { month: 11 },
        { month: 12 },
    ];
    loading = false;
    stripeMessage = "";
    user = {
        card_id: "",
        firstName: "",
        email: "",
        lastName: "",
        cardNumber: "",
        expMonth: 10,
        expYear: 2020,
        promoCode: "",
        nameOnCard: "",
        cardType: "Visa",
        password: "",
        subscription: "Monthly",
        cvc: "",
    };
    emailPattern = "^[A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
    creditCards = [
        { name: "Visa" },
        { name: "Master Card" },
        { name: "American Express" },
        { name: "Discover" },
    ];

    subscriptionType = [
        { name: "Monthly RiaPro ($29.95)", id: "Monthly" },
        { name: "Annual RiaPro ($329.45)", id: "Annual" },
        { name: "LifeTime ($2999.00)", id: "LifeTime" },
    ];

    submitted = false;
    agreementSigned = false;
    subscription: any;

    constructor(
        private liveService: LiveService,
        private _zone: NgZone,
        private router: Router
    ) {}
    onSubmit() {
        this.submitted = true;
    }

    register() {
        this.loading = true;
        this.liveService
            .postRequest("/user/check", this.user)
            .subscribe((d) => this.checkStatus(d));
    }
    checkStatus(d) {
        if (d.status == "ok") {
            this.getToken();
        } else {
            this.stripeMessage = d.message;
            this.loading = false;
        }
    }
    getToken() {
        this.stripeMessage = "Validating";
        (<any>window).Stripe.card.createToken(
            {
                number: this.user.cardNumber,
                exp_month: this.user.expMonth,
                exp_year: this.user.expYear,
                cvc: this.user.cvc,
            },
            (status: number, response: any) => {
                this._zone.run(() => {
                    if (status === 200) {
                        this.user.card_id = response.id;
                        this.stripeMessage =
                            "Credit Card Validated . Please Wait !";
                        this.liveService
                            .postRequest("/register", this.user)
                            .subscribe((d) => this.setStatus(d));
                    } else {
                        this.stripeMessage = response.error.message;
                        this.loading = false;
                    }
                });
            }
        );
    }

    ngOnInit() {}

    setStatus(d) {
        this.loading = false;
        if (d.status == "ok") {
            this.router.navigate(["/register-success"]);
        } else {
            this.stripeMessage = d.message;
        }
    }

    showPlanDetails() {
        this.displayDialog = true;
    }
    showPromoCode() {
        this.displayPromo = true;
    }
}
