import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() ProductNameInput;

  @Output() productOutput = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onclose() {
    this.productOutput.emit();
  }

}
