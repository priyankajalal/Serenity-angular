import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class LiveService {
    constructor(private http: HttpClient) {}

    getWatchList(watchListId) {
        return this.http.get(environment.baseUrl + "/watchlist/" + watchListId);
    }

    getTechnicals(symbols) {
        return this.http.get(
            environment.baseUrl + "/symbol/technical/" + symbols.join(",")
        );
    }

    getDetailNews() {
        return this.http.get(environment.baseUrl + "/newsDetail/");
    }

    get(marketType) {
        return this.http.get(
            environment.baseUrl + "/broadMarket/" + marketType
        );
    }

    getNotableMoves() {
        return this.http.get(environment.baseUrl + "/notablemoves");
    }

    getNotableMoveSymbols(typeid) {
        return this.http.get(environment.baseUrl + "/notablemoves/" + typeid);
    }

    getSectorsPercentages(symbols) {
        return this.http.get(
            environment.baseUrl + "/sectors/" + symbols.join(",")
        );
    }

    getSymbolsHistorical(symbols) {
        return this.http.get(
            environment.baseUrl +
                "/symbol/technical/history/" +
                symbols.join(",")
        );
    }

    getSynopsis(symbol) {
        return this.http.get(
            environment.baseUrl + "/symbol/synopsis/" + symbol
        );
    }

    getMulticharts() {
        return this.http.get(environment.baseUrl + "/multicharts");
    }

    getSectorIndustryMapping() {
        return this.http.get(environment.baseUrl + "/sector/industryMapping");
    }

    getHeatMapByType(typeid) {
        return this.http.get(environment.baseUrl + "/heatmap/" + typeid);
    }
    getUrlData(url) {
        return this.http.get(environment.baseUrl + url);
    }

    postRequest(url, postData) {
        let bodyString = JSON.stringify(postData);
        return this.http.post(environment.baseUrl + url, bodyString);
    }

    getDataInArray(url) {
        return this.http.get(environment.baseUrl + url).map((res) => res || []);
    }
}
