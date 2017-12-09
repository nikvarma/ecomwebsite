import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: "product",
    templateUrl: "product.html",
    styleUrls: ["product.scss"],
    encapsulation: ViewEncapsulation.Emulated
})

export class ProductComponent implements OnInit {

    productID: string;
    categorieID: string;
    productName: string;
    categorieName: string;
    constructor(protected activatedRoute: ActivatedRoute) {

    }

    displayProductInfo(): void {
        
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.productID = params.productid;
            this.productName = params.product;
            this.categorieID = params.categorieid;
            this.categorieName = params.categorie;
        }).unsubscribe();
    }
}