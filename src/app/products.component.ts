import { Subscription } from 'rxjs';
import { ProductServiceService } from './product-service.service';
import { OnInit, Component, ViewChild, OnDestroy,  } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms';



@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
    // this is page title
    Title = 'This is title Angular';
    // this is product array
    productsData = [];
    // define FormGroup Name here. which is apply on Html file
    FormReactiveApproch: FormGroup;
    private productSubcription: Subscription;

    // Constructor add FormBuiolder and which is declare to in another varable public
    constructor(public formbuilder: FormBuilder,
        public ProdService: ProductServiceService,
       ) {
    }
    // this is ngOnit when constructor is loaded and which load what ever we give in this scope
    ngOnInit() {
        this.productsData = this.ProdService.getProduct();
        this.productSubcription = this.ProdService.productDataArrayUpdate.subscribe(() => {
            this.productsData = this.ProdService.getProduct();
        });

        // Reactive Form Approach Apply For Form Submit
        this.FormReactiveApproch = this.formbuilder.group({
            // add FormControlName Here
            productName : ['', [Validators.required]],
        });

    }
    // Form Submit
    onSubmitfun() {
        const formsInputValues = this.FormReactiveApproch.controls['productName'].value;
        this.ProdService.addProd(formsInputValues);
    }
    // Remove Product Name not equal to exist prod array
    removedProd(productName) {
      this.ProdService.removeProd(productName);
        // this.ProdService.productDataArrayUpdate.subscribe(() => {
        //     this.ProdService.removeProd(productName);
        // });

    }

    ngOnDestroy() {
        this.productSubcription.unsubscribe();
    }
}
