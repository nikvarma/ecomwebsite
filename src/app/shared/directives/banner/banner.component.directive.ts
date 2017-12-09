import { Component, ViewEncapsulation, OnInit } from "@angular/core";

@Component({
    selector: "banner-box",
    templateUrl: "banner.html",
    styleUrls: ["banner.scss"],
    encapsulation: ViewEncapsulation.None
})

export class BannerComponentDirective implements OnInit {
    bannerImage: any = [];
    updateImagePath: string;
    updateImagePathIndex: number = 0;
    constructor() {

    }

    runBanner(): void {
        if (this.updateImagePathIndex >= this.bannerImage.length) {
            this.updateImagePathIndex = 0;
        }
        this.updateImagePath = this.bannerImage[this.updateImagePathIndex].imagepath;
        this.updateImagePathIndex++;
    }

    ngOnInit(): void {
        this.bannerImage.push({ imagepath: "assets/images/offer-images/banner.jpeg" });
        this.bannerImage.push({ imagepath: "assets/images/offer-images/banner-1.jpeg" });
        setInterval(() => {
            this.runBanner();
        }, 5000);
        if (this.bannerImage.length > 0)
            this.updateImagePath = this.bannerImage[this.updateImagePathIndex].imagepath;
    }
}
