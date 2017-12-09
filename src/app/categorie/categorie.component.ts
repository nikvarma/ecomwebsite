import { Component, ElementRef, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "categories",
    templateUrl: "categories.html",
    styleUrls: ["categories.scss"],
    encapsulation: ViewEncapsulation.None
})

export class CategorieComponent implements OnInit {

    userDetails: any = [];
    constructor(protected elementRef: ElementRef) {

    }

    ratingProduct(event: Event): void {
        let parentID = event.target["parentElement"].dataset["parentid"];
        let ratingValue = event.target["parentElement"].dataset["value"];
        let parentChild = this.elementRef.nativeElement.querySelectorAll("#" + parentID + " li");
        for (let i = 0; i < parentChild.length; i++) {
            parentChild[i]["classList"].remove("active");
        }
        // parentChild.forEach((element) => {
        //     element["classList"].remove("active");
        // });
        let len = Number(ratingValue);
        for (let i = 0; i < len; i++) {
            parentChild[i].classList.add("active");
        }
    }

    expandCollapse(event: Event): void {
        let ele = event.currentTarget;
        let parentID = ele["dataset"].target;
        let parentObj = this.elementRef.nativeElement.querySelector(parentID);
        if (parentObj.classList.contains("expanded")) {
            ele["classList"].remove("minuse-icon");
            parentObj.classList.remove("expanded");
        } else {
            ele["classList"].add("minuse-icon");
            parentObj.classList.add("expanded");
        }
    }
    filterSelected(event: Event): void {
        let ele = event.target;
        //console.dir(ele);
        let parentEle = ele["parentNode"].classList;
        if (parentEle.contains("active")) {
            parentEle.remove("active");
        } else {
            parentEle.add("active");
        }
    }

    ngOnInit(): void {
        this.userDetails.push({ isUserLiked: false });
    }
}