import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../restaurant-detail/shopping-cart/item-cart.model';
import { RadioOption } from '../shared/radio/radio-option.model';
import { Order, OrderItem } from './order.model';
import { OrderService } from './order.service';
import {FormGroup, FormBuilder, Validators, AbstractControl, FormControl} from '@angular/forms'
import {tap } from 'rxjs/operators'
@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern = /^[0-9]*$/;

  delivery: number = 2

  orderId: string

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Vale Refeição', value: 'VR'}
  ]

  constructor(private orderService: OrderService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = new FormGroup({
      name: new FormControl('', {
       validators:  [Validators.required, Validators.minLength(5)],
       updateOn: 'blur'
      }),  //or: name: ''
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, {validators: [OrderComponent.equalsTo], updateOn: 'blur'})
  }

  static equalsTo(group: AbstractControl):{[key: string]:boolean}{
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')

    if(!email || !emailConfirmation){
      return undefined
    }
    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch:true}
    }

    return undefined;

  }

  itemsValue():number{
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }

  increaseQty(item:CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item:CartItem){
    this.orderService.decreaseQty(item)
  }

  remove(item:CartItem){
    this.orderService.remove(item)
  }

  checkOrder(order:Order){
    order.orderItems = this.cartItems()
    .map((item:CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order)
    .pipe(
      tap((orderId:string)=>{
        this.orderId = orderId;
      })
    )
    
    .subscribe((orderId:string) =>{
      this.router.navigate(['/order-sumary'])
      // console.log(`Compra concluída: ${orderId}`);
      this.orderService.clear();
    })
  }

  isOrderCompleted():boolean{
    return this.orderId !== undefined
  }


}
