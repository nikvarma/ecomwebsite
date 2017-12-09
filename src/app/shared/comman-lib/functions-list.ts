import { Injectable, ElementRef, AfterContentInit, OnInit } from "@angular/core";
import { AlertComponentDirective } from "../directives/alert-box/alert.component.directive";

@Injectable()

export class FunctionService {
    constructor(protected elementRef: ElementRef) {

    }

    addAlert(attachTagName: string): Promise<any> {
        return new Promise((resolve) => {
            let body = document.getElementsByTagName(attachTagName)[0];
            let alertbox = document.createElement("alert-box");
            body.appendChild(alertbox);
            resolve();
        })
    }

}