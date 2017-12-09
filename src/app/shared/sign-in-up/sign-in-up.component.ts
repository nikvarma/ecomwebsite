import { Component, ViewContainerRef, ComponentFactoryResolver, OnDestroy, ViewEncapsulation, ElementRef } from "@angular/core";
import { UtilityService } from "../comman-lib/utility";

@Component({
    selector: "signinup",
    templateUrl: "sign-in-up.html",
    styleUrls: ["sign-in-up.scss"],
    encapsulation: ViewEncapsulation.None
})

export class SignInUpComponent implements OnDestroy {
    SignInUpInstance: any = null;
    displaySignInUpBox: boolean = false;
    isVerifing: boolean = false;
    isClickForVerifing: boolean = false;
    isCodeVerification: boolean = false;
    isCodeVerificationCancel: boolean = true;
    constructor(protected elementRef: ElementRef, protected utility: UtilityService) {

    }

    SignInUpBoxOpen(componentFactoryResolver: ComponentFactoryResolver
        , viewContainerRef: ViewContainerRef): void {
        const factory = componentFactoryResolver.resolveComponentFactory(SignInUpComponent);
        const ref = viewContainerRef.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
        ref.instance.displaySignInUpBox = true;
        ref.instance.SignInUpInstance = ref;
    }

    closeSignInUpBox(): void {
        if (this.SignInUpInstance != null) {
            this.SignInUpInstance.destroy();
        }
    }

    tabs(event: Event): void {
        this.utility.removeClass("#signinuptabs .tabs-btn", "active", this.elementRef);
        this.utility.removeClass("#signinuptabs .tabs-container", "active", this.elementRef);
        event.target["classList"].add("active");
        let tabContainerId = event.target["dataset"].target;
        this.utility.addClass("#" + tabContainerId, "active", this.elementRef);
    }

    verify(event: Event): void {
        this.isClickForVerifing = true;
        this.isVerifing = true;
        setTimeout(() => {
            this.utility.addClass("#signupinfofill", "ecom-hidden", this.elementRef);
            this.utility.removeClass("#signupinfoconfirm", "ecom-hidden", this.elementRef);
        }, 8000);
    }

    editforverify(): void {
        this.isClickForVerifing = false;
        this.isVerifing = false;
        this.utility.addClass("#signupinfoconfirm", "ecom-hidden", this.elementRef);
        this.utility.removeClass("#signupinfofill", "ecom-hidden", this.elementRef);
    }

    codeVerify(event: Event): void {
        this.isCodeVerification = true;
        this.isCodeVerificationCancel = false;
        setTimeout(() => {
            this.isCodeVerification = false;
            this.isCodeVerificationCancel = true;
        }, 8000);
    }
    ngOnDestroy(): void {

    }
}