import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LeftSideComponent } from './left-side/left-side.component';

export const EXPORT_COMPONENT = [
  LeftSideComponent
];

export const EXPORT_MODULE = [
  FormsModule,
  NgZorroAntdModule,
  CommonModule,
  RouterModule
];

@NgModule({
  declarations: [
    ...EXPORT_COMPONENT
  ],
  imports: [
    ...EXPORT_MODULE
  ],
  exports: [
    ...EXPORT_MODULE,
    ...EXPORT_COMPONENT
  ]
})
export class SharedModule { }
