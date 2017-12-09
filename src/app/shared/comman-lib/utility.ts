import { Injectable, ElementRef } from "@angular/core";

@Injectable()

export class UtilityService {
    constructor() {

    }

    addClass(sele: any, classname: string, elementRef: ElementRef = null): Promise<any> {
        return new Promise((resolve, reject) => {
            let eleRef = elementRef;
            if (eleRef != null && (typeof (sele) == "object" || sele.length > 2)) {
                let eleList = (typeof (sele) == "object") ? sele : this.setBy(sele, eleRef);
                if (typeof (eleList) == "object" && typeof (eleList.length) == "undefined") {
                    eleList.className += " " + classname;
                }
                else if (Array.isArray(eleList) || typeof (eleList) == "object") {
                    // eleList.forEach((ele) => {
                    //     ele.className += " " + classname;
                    // });
                    for (let i = 0; i < eleList.length; i ++) {
                        eleList[i].className += " " + classname;
                    }
                    resolve(true);
                }
            }
            resolve(false);
        });
    }

    removeClass(sele: string, classname: string, elementRef: ElementRef = null): Promise<any> {
        return new Promise((resolve, reject) => {
            let eleRef = elementRef;
            if (eleRef != null && sele.length > 2) {
                let eleList = this.setBy(sele, eleRef);
                if (Array.isArray(eleList) || typeof (eleList) == "object") {
                    // eleList.forEach((ele) => {
                    //     ele.classList.remove(classname);
                    // });
                    for (let i = 0; i < eleList.length; i++) {
                        eleList[i].classList.remove(classname);
                    }
                    resolve(true);
                }
            }
            resolve(false);
        });
    }

    hasClass(sele: string, classname: string, elementRef: ElementRef = null): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let eleRef = elementRef;
            if (eleRef != null && sele.length > 2) {
                let eleList = eleRef.nativeElement.querySelector(sele);
                if (eleList != null) {
                    eleList.classList.contains(classname);
                    resolve(true);
                }
                resolve(false);
            }
            resolve(false);
        });
    }

    private setBy(sele: string, eleRef: ElementRef = null): any {
        if (sele.length <= 0 || eleRef == null) {
            return false;
        }
        if (sele.indexOf(".") === 0 && sele.length >= 2) {
            return eleRef.nativeElement.querySelectorAll(sele);
        }
        else if (sele.indexOf("#") === 0 && sele.split(" ").length <= 0 && sele.length >= 2) {
            return eleRef.nativeElement.querySelector(sele);
        } else if (sele.length > 2) {
            return eleRef.nativeElement.querySelectorAll(sele);
        }

    }
}