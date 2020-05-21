import { NewsService } from "./../../services/news.services";

import { Component, OnInit, Input, SimpleChanges } from "@angular/core";

@Component({
    selector: "app-news-datatable",
    templateUrl: "./news-datatable.component.html",
    styleUrls: ["./news-datatable.component.css"],
})
export class NewsDatatableComponent implements OnInit {
    news;

    @Input() symbols;
    @Input() title = "Portfolio News";
    @Input() newsClass = "news";
    cols = [
    { field: "symbol", header: "Symbol" },
    { field: "link", header: "Link" },
    { field: "date_raw", header: "date_raw" },
    { field: "time", header: "Time" }
    ];

    constructor(private newsService: NewsService) {}

    ngOnInit() {}
    ngOnChanges(changes: SimpleChanges) {
        this.news = [];
        console.log(this.symbols);
        if (this.symbols != null && this.symbols.length > 0) {
          console.log(this.symbols);
            let requestSymbols = this.symbols.join(",");
            if (requestSymbols != "") {
                this.newsService
                    .getNews(requestSymbols)
                    .subscribe((d) => this.setNews(d));
            }
        }
    }
    setNews(d){
     console.log(d);
     this.news = d;
    }
}
