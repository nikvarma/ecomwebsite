import { Component, AfterViewInit, ElementRef, OnInit } from "@angular/core";

@Component({
    selector: "home",
    templateUrl: "home.html",
    styleUrls: ["home.scss"]
})

export class HomeComponent implements AfterViewInit, OnInit {
    boxSliderIndex: number = 0;
    addClssIndex: number = 0;
    liList: any;
    liListLength: number;
    aBottomList: any;
    userDetails:any = [];
    productList: any;
    //isUserLiked

    constructor(protected elementRef: ElementRef) {

    }

    ngAfterViewInit(): void {
        this.liList = this.elementRef.nativeElement.querySelectorAll("#home-silder li");
        this.aBottomList = this.elementRef.nativeElement.querySelectorAll("#home-silde-bottom li a");
        this.liListLength = this.liList.length;
        setInterval(() => {
            //console.log(liList);
            this.slideSlider(this.addClssIndex);
            this.addClssIndex++;
            if (this.addClssIndex >= this.liListLength) {
                this.addClssIndex = 0;
            }
        }, 100000);
        setInterval(() => {
            this.boxSlider();
        }, 8000);
    }

    slideSlider(addClssIndex: number): void {
        this.addClssIndex = addClssIndex;
        // this.liList.forEach(element => {
        //     element["classList"].remove("active-slide");
        // });
        // this.aBottomList.forEach(element => {
        //     element["classList"].remove("active");
        // });
        for (let i = 0; i < this.liList.length; i ++) {
            this.liList[i]["classList"].remove("active-slide");
        }

        for (let i = 0; i < this.aBottomList.length; i ++) {
            this.aBottomList[i]["classList"].remove("active");
        }

        this.liList[this.addClssIndex].classList.add("active-slide");
        this.aBottomList[this.addClssIndex].classList.add("active");
    }
    slideRightArrow(): void {
        let len = this.liListLength - 1;
        let index = ((Number(this.addClssIndex) + 1) > len) ? 0 :
            (Number(this.addClssIndex) + 1);
        this.slideSlider(index);
    }

    silderTabClick(event: Event): void {
        event.preventDefault();
        let index = event.target["dataset"].index;
        this.slideSlider(index);
    }
    slideLeftArrow(): void {
        let len = this.liListLength - 1;
        let index = ((Number(this.addClssIndex) - 1) < 0) ? len :
            (Number(this.addClssIndex) - 1);
        this.slideSlider(index);
    }

    ratingProduct(event: Event): void {
        let parentID = event.target["parentElement"].dataset["parentid"];
        let ratingValue = event.target["parentElement"].dataset["value"];
        let parentChild = this.elementRef.nativeElement.querySelectorAll("#" + parentID + " li");
        // parentChild.forEach((element) => {
        //     element["classList"].remove("active");
        // });
        for (let i = 0; i < parentChild.length; i++) {
            parentChild[i]["classList"].remove("active");
        }
        let len = Number(ratingValue);
        for (let i = 0; i < len; i++) {
            parentChild[i].classList.add("active");
        }
    }

    silderProducts(): void {
        this.productList = [
            {
                id: "100100100",
                priceoffer: "30% OFF",
                images: [
                    {
                        image: "assets/images/products-images/img-0.jpg",
                        alt: ""
                    }
                ],
                productdetail: {
                    name: "dell",
                    detail: "",
                    describtion: "Dell 1 Inspiron 3567 Notebook (6th Gen Intel Core i3- 4GB RAM- 1TB HDD- 39.62cm(15.6)- Ubuntu) (Black)",
                    rating: 3,
                    totalrating: 30,
                    offerprice: 23000,
                    discountprice: 25000
                },
                currency: {
                    type: "Rs",
                    htmlcode: "&#8377;",
                    sign: "₹"
                }
            }, {
                id: "100100200",
                priceoffer: "30% OFF",
                images: [
                    {
                        image: "assets/images/products-images/img-1.jpg",
                        alt: ""
                    }
                ],
                productdetail: {
                    name: "dell",
                    detail: "",
                    describtion: "Dell 2 Inspiron 3567 Notebook (6th Gen Intel Core i3- 4GB RAM- 1TB HDD- 39.62cm(15.6)- Ubuntu) (Black)",
                    rating: 3,
                    totalrating: 30,
                    offerprice: 23000,
                    discountprice: 25000
                },
                currency: {
                    type: "Rs",
                    htmlcode: "&#8377;",
                    sign: "₹"
                }
            }, {
                id: "100100300",
                priceoffer: "30% OFF",
                images: [
                    {
                        image: "assets/images/products-images/img-1.jpg",
                        alt: ""
                    }
                ],
                productdetail: {
                    name: "dell",
                    detail: "",
                    describtion: "Dell 3 Inspiron 3567 Notebook (6th Gen Intel Core i3- 4GB RAM- 1TB HDD- 39.62cm(15.6)- Ubuntu) (Black)",
                    rating: 3,
                    totalrating: 30,
                    offerprice: 23000,
                    discountprice: 25000
                },
                currency: {
                    type: "Rs",
                    htmlcode: "&#8377;",
                    sign: "₹"
                }
            }, {
                id: "100100400",
                priceoffer: "30% OFF",
                images: [
                    {
                        image: "assets/images/products-images/img-1.jpg",
                        alt: ""
                    }
                ],
                productdetail: {
                    name: "dell",
                    detail: "",
                    describtion: "Dell 4 Inspiron 3567 Notebook (6th Gen Intel Core i3- 4GB RAM- 1TB HDD- 39.62cm(15.6)- Ubuntu) (Black)",
                    rating: 3,
                    totalrating: 30,
                    offerprice: 23000,
                    discountprice: 25000
                },
                currency: {
                    type: "Rs",
                    htmlcode: "&#8377;",
                    sign: "₹"
                }
            }, {
                id: "100100500",
                priceoffer: "30% OFF",
                images: [
                    {
                        image: "assets/images/products-images/img-1.jpg",
                        alt: ""
                    }
                ],
                productdetail: {
                    name: "dell",
                    detail: "",
                    describtion: "Dell 5 Inspiron 3567 Notebook (6th Gen Intel Core i3- 4GB RAM- 1TB HDD- 39.62cm(15.6)- Ubuntu) (Black)",
                    rating: 3,
                    totalrating: 30,
                    offerprice: 23000,
                    discountprice: 25000
                },
                currency: {
                    type: "Rs",
                    htmlcode: "&#8377;",
                    sign: "₹"
                }
            }, {
                id: "100100600",
                priceoffer: "30% OFF",
                images: [
                    {
                        image: "assets/images/products-images/img-1.jpg",
                        alt: ""
                    }
                ],
                productdetail: {
                    name: "dell",
                    detail: "",
                    describtion: "Dell 6 Inspiron 3567 Notebook (6th Gen Intel Core i3- 4GB RAM- 1TB HDD- 39.62cm(15.6)- Ubuntu) (Black)",
                    rating: 3,
                    totalrating: 30,
                    offerprice: 23000,
                    discountprice: 25000
                },
                currency: {
                    type: "Rs",
                    htmlcode: "&#8377;",
                    sign: "₹"
                }
            }
        ];
    }

    boxSlider(): void {
        let len = this.productList.length;
        let newLen = len - 1;
        let leftArrow = this.elementRef.nativeElement.querySelector("#slider-left-btn-arrow");
        let rightArrow = this.elementRef.nativeElement.querySelector("#slider-right-btn-arrow");
        let silderBox = this.elementRef.nativeElement.querySelector("#ecom-box-slider-boxs");
        silderBox.children[0].classList.add("slider-slide-hidden");
        setTimeout(() => {
            //silderBox.children[0].remove();
            silderBox.children[0].classList.remove("slider-slide-hidden");
            silderBox.appendChild(silderBox.children[0]);
        }, 2000);
        //console.dir(silderBox.children[0].classList.add(""));       

        leftArrow.dataset.index = (this.boxSliderIndex == 0) ? 0 : Number(this.boxSliderIndex) - 1;
        rightArrow.dataset.index = (this.boxSliderIndex == 0) ? 1 : Number(this.boxSliderIndex) + 1;
        if (this.boxSliderIndex > len) {
            this.boxSliderIndex = 0;
        } else {
            this.boxSliderIndex++;
        }

        //console.dir(leftArrow.dataset.index);
    }
    ngOnInit(): void {
        this.silderProducts();
        this.userDetails.push({ isUserLiked: false });
    }
}