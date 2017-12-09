import {
    Component, ViewEncapsulation, ViewChildren, QueryList, AfterViewInit, ViewChild,
    ComponentFactoryResolver, ViewContainerRef, ElementRef, OnInit
} from "@angular/core";
import { AlertComponentDirective } from "../shared/directives/alert-box/alert.component.directive";
import { AlertConfig } from "../shared/directives/alert-box/alert-config";
import { SignInUpComponent } from "../shared/sign-in-up/sign-in-up.component";

@Component({
    selector: "layout",
    templateUrl: "layout.html",
    styleUrls: ["layout.scss"],
    providers: [SignInUpComponent],
    encapsulation: ViewEncapsulation.Emulated
})

export class LayoutComponent implements AfterViewInit, OnInit {
    menuList: any;
    alertBox: AlertComponentDirective;
    alertBoxConfig: AlertConfig;
    //signInUp: SignInUpComponent;
    constructor(protected componentFactoryResolver: ComponentFactoryResolver,
        protected viewContainerRef: ViewContainerRef, protected signInUp: SignInUpComponent,
        protected elementRef: ElementRef) {

    }

    authenticate(): void {
        //this.signInUp = new SignInUpComponent();
        this.signInUp.SignInUpBoxOpen(this.componentFactoryResolver, this.viewContainerRef);
    }

    menuOpen(eleobj: any): void {
        let ele = eleobj;
        let offTop = ele.offsetTop;
        let offleft = ele.offsetLeft;
        let offHeight = ele.offsetHeight;
        // let menu = document.createElement("div");
        // let menuclassfor = (window.outerWidth < 800) ? "menu-smalldevice-list" : "menu-largedevice-list";
        // menu.setAttribute("class", menuclassfor);
        // ele.appendChild(menu);
        // this.getMenus().then((res) => {
        //     console.log(res);
        // });
        // console.log(offTop, offHeight);
        // if (eleobj.classList.contains("active")) {
        //     eleobj.classList.remove("active");
        // } else {
        //     eleobj.classList.add("active");
        // }
    }

    closePanel(event: Event): void {
        let searchboxinput = this.elementRef.nativeElement.querySelector("#searchbox");
        if (typeof (event.target["dataset"]) != "undefined" && typeof(event.target["dataset"].text) != "undefined")
            searchboxinput.value = event.target["dataset"].text;
    }

    getMenus(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.menuList = Array<{}>();
            this.menuList.push({
                menu: "Electonics",
                icon: "fa-television",
                submenu: [
                    {
                        "Washing Machine": ["Two Droos", "Three Droos"]
                    },
                    {
                        "TV": ["3D", "2D"]
                    }
                ]
            });
            this.menuList.push({
                menu: "Mobile",
                icon: "fa-phone",
                submenu: [
                    {
                        "Mobile": ["LG", "Nokia"]
                    }
                ]
            });
            resolve(this.menuList);
        });
    }

    ngOnInit(): void {
        this.getMenus().then((res) => {
        });
        let bodyEle = document.getElementsByTagName("body");
        bodyEle[0].addEventListener("click", () => {
            let closeEle = this.elementRef.nativeElement.querySelectorAll(".ecom-box-open");
            // closeEle.forEach(element => {
            //     element.classList.remove("ecom-box-open");
            // });
            for (let i = 0; i < closeEle.length; i++) {
                closeEle[i].classList.remove("ecom-box-open");
            }
        });
    }

    getObjectKeys(obj: object): object {
        return Object.keys(obj);
    }

    searchAll(obj: object): void {
        let searchBoxWidth = obj["clientWidth"];
        let searchpanel = obj["dataset"].target;
        let searchpanelbox = this.elementRef.nativeElement.querySelector(searchpanel);
        if (obj["value"].length <= 0) {
            searchpanelbox.classList.remove("ecom-box-open");
        }
        else {
            searchpanelbox.setAttribute("style", "max-width:" + searchBoxWidth + "px;width:" + searchBoxWidth + "px;height:auto;left:" + obj["offsetLeft"] + "px;");
            searchpanelbox.classList.add("ecom-box-open");
        }
    }

    ngAfterViewInit() {
        // this.alertBox = new AlertComponentDirective();
        // this.alertBoxConfig = {
        //     displayAlert: true,
        //     alertBoxTimeout: 8000
        // };
        // this.alertBox.showAlertBox(this.componentFactoryResolver, this.viewContainerRef,
        //     this.alertBoxConfig).then(() => {

        //     });

    }
}