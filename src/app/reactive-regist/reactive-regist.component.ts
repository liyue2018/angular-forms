import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';
import { mobileValidator, equalValidator,mobileAsyncValidator } from '../validator/validators';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {

    formModel: FormGroup; 
  // constructor() {
  //     this.formModel = new FormGroup({
  //       username: new FormControl(),
  //       mobile: new FormControl(),
  //       passwordsGroup: new FormGroup({
  //           password: new FormControl(),
  //           pconfirm: new FormControl()
  //       })
  //   })
  //  }


  // 创建校验器

  // mobileValidator(control:FormControl):any {
  //     var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  //     let valid = myreg.test(control.value);
  //     console.log("mobile的校验结果是：" + valid);
  //     return valid ? null : { mobile: true};
  // }

// 创建密码和确认密码校验器

  // equalValidator(group: FormGroup): any{
  //     let password: FormControl = group.get("password") as FormControl;
  //     let pconfirm: FormControl = group.get("pconfirm") as FormControl;
  //     let valid:boolean = (password.value === pconfirm.value);
  //     console.log("密码校验器的结果是：" + valid);
  //     return valid ? null : { equal: true };
  // }

  // 使用formBuilder重构表单

  constructor(fb: FormBuilder) {
      this.formModel = fb.group({
          username: ['', [Validators.required, Validators.minLength(2)]],
          mobile: ['', mobileValidator, mobileAsyncValidator],
          passwordsGroup: fb.group({
              password: ['', Validators.minLength(6)],
              pconfirm: ['']
          }, { validator: equalValidator})
      })
  }


  ngOnInit() {
  }

  onSubmit() {
      // let isValid: boolean = this.formModel.get("username").valid;
      // console.log('username的校验结果是：' + isValid);
      // let errors: any = this.formModel.get("username").errors;
      // console.log('username教研错误信息是：' + JSON.stringify(errors));
      
      if(this.formModel.valid){
         console.log(this.formModel.value);
      }
  }

}
