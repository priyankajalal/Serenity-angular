import { LiveService } from "./../../services/live.service";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-news-rss",
    templateUrl: "./news-rss.component.html",
    styleUrls: ["./news-rss.component.css"],
})
export class NewsRssComponent implements OnInit {
    newsData = [];

    constructor(private liveService: LiveService) {}

    ngOnInit() {
        this.liveService.getDetailNews().subscribe((d) => this.setNews(d));
    }

    setNews(response) {
        for (const [key, value] of Object.entries(response)) {
            this.newsData.push({ source: key, value: value });
        }
    }
}
