import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class NewsService {
    constructor(private http: HttpClient) {}

    getNews(requestSymbols) {
        return this.http.get(
            environment.baseUrl + "/symbol/news/" + requestSymbols
        );
    }
}
