import { Component, ViewEncapsulation, Input, ComponentFactoryResolver, OnDestroy, ViewContainerRef } from "@angular/core";
import { AlertConfig } from "./alert-config";

@Component({
    selector: "alert-box",
    templateUrl: "alert.html",
    styleUrls: ["alert.scss"],
    encapsulation: ViewEncapsulation.None
})

export class AlertComponentDirective implements OnDestroy, AlertConfig {
    alertType: string = "alert-success";
    showFooter: boolean = true;
    showHeader: boolean = true;
    showBody: boolean = true;
    isCustomLayout: boolean = false;
    customLayout: string;
    isCustomBodyMessage: boolean = false;
    bodyMessage: string;
    alertBoxTimeout: number;
    displayAlert: boolean = false;
    alertInstance: any = null;
    constructor() {
        this.bodyMessage = "Data saved successfully...";
    }

    closeAlertBox(): void {
        if (this.alertInstance != null) {
            this.alertInstance.destroy();
        }
    }

    showAlertBox(componentFactoryResolver: ComponentFactoryResolver,
        viewContainerRef: ViewContainerRef, options: AlertConfig): Promise<any> {
        return new Promise((resolve, reject) => {
            const factory = componentFactoryResolver.resolveComponentFactory(AlertComponentDirective);
            const ref = viewContainerRef.createComponent(factory);
            ref.instance.displayAlert = false || options.displayAlert;
            ref.instance.bodyMessage = "" || options.bodyMessage;
            ref.instance.showFooter = false || options.showFooter;
            ref.instance.alertType = this.alertType || options.alertType;
            ref.instance.alertBoxTimeout = 3000 || options.alertBoxTimeout;
            ref.instance.alertInstance = ref;
            ref.changeDetectorRef.detectChanges();
            setTimeout(() => {
                ref.destroy();
            }, options.alertBoxTimeout);
            resolve();
        });
    }

    ngOnDestroy(): void {

    }
}
