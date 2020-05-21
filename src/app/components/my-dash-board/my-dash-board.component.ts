import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-my-dash-board",
    templateUrl: "./my-dash-board.component.html",
    styleUrls: ["./my-dash-board.component.css"],
})
export class MyDashBoardComponent implements OnInit {
    // RIA Pro properties
    portfolioSymbols = [];
    // symbols = ["aapl", "msft", "ibm", "nflx"];
    constructor() {}

    ngOnInit() {
        this.portfolioSymbols = ["AAPL", "MSFT"];
    }
}
