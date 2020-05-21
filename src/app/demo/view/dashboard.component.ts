import { LiveService } from "./../../services/live.service";
import { Component, OnInit } from "@angular/core";
import { CarService } from "../service/carservice";
import { EventService } from "../service/eventservice";
import { Car } from "../domain/car";
import { BreadcrumbService } from "../../breadcrumb.service";
import { SelectItem } from "primeng/primeng";
import { MenuItem } from "primeng/primeng";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

@Component({
    templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
    cities: SelectItem[];

    cars: Car[];

    cols: any[];

    chartData: any;

    events: any[];

    selectedCity: any;

    selectedCar: Car;

    items: MenuItem[];

    fullcalendarOptions: any;

    constructor(
        private liveService: LiveService,
        private carService: CarService,
        private eventService: EventService,
        private breadcrumbService: BreadcrumbService
    ) {
        this.breadcrumbService.setItems([{ label: "" }]);
    }

    ngOnInit() {
        this.carService.getCarsSmall().then((cars) => (this.cars = cars));

        this.cols = [
            { field: "vin", header: "Vin" },
            { field: "year", header: "Year" },
            { field: "brand", header: "Brand" },
            { field: "color", header: "Color" },
        ];

        this.eventService.getEvents().then((events) => {
            this.events = events;
        });

        this.cities = [];
        this.cities.push({ label: "Select City", value: null });
        this.cities.push({
            label: "New York",
            value: { id: 1, name: "New York", code: "NY" },
        });
        this.cities.push({
            label: "Rome",
            value: { id: 2, name: "Rome", code: "RM" },
        });
        this.cities.push({
            label: "London",
            value: { id: 3, name: "London", code: "LDN" },
        });
        this.cities.push({
            label: "Istanbul",
            value: { id: 4, name: "Istanbul", code: "IST" },
        });
        this.cities.push({
            label: "Paris",
            value: { id: 5, name: "Paris", code: "PRS" },
        });

        this.chartData = {
            labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
            ],
            datasets: [
                {
                    label: "First Dataset",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: "#FFC107",
                },
                {
                    label: "Second Dataset",
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: "#03A9F4",
                },
            ],
        };

        this.items = [
            { label: "Save", icon: "ui-icon-check" },
            { label: "Update", icon: "ui-icon-refresh" },
            { label: "Delete", icon: "ui-icon-delete" },
        ];

        this.fullcalendarOptions = {
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
            defaultDate: "2016-01-12",
            header: {
                left: "prev,next, today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
            },
        };
    }
}
