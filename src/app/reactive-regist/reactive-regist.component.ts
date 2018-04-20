import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

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

  // 使用formBuilder重构表单

  constructor(fb: FormBuilder) {
      this.formModel = fb.group({
          username: [''],
          mobile: [''],
          passwordsGroup: fb.group({
              password: [''],
              pconfirm: ['']
          })
      })
  }

  ngOnInit() {
  }

  onSubmit() {
      console.log(this.formModel.value);
  }

}
