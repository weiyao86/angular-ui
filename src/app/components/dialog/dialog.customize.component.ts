import { Component, Input, InjectionToken, Inject } from '@angular/core';
import { SModalSubject } from './dialog-subject-service';

@Component({
    selector: 'demo-component',
    template: `
    <div>
      <h4>{{iname}}</h4>
      <br/>
      <p>可以通过Subject传递数据</p>
      <div class="customize-footer">
        <s-button type="primary" (click)="emitDataOutside()">
          <span>传递数据到上层</span>
        </s-button>
        <s-button  type="primary" (click)="handleCancel()">
          返 回{{portalName}}
        </s-button>
      </div>
    </div>
    `,
    styles: [
        `:host ::ng-deep .customize-footer {
        border-top: 1px solid #e9e9e9;
        padding: 10px 18px 0 10px;
        text-align: right;
        border-radius: 0 0 0px 0px;
        margin: 15px -16px -5px -16px;
      }`
    ]
})

export class ModalCustomizeComponent {
    iname: string;

    @Input()
    set name(value: string) {
        this.iname = value;
    }

    emitDataOutside() {
        this.subject.next("传出数据");
    }

    handleCancel() {
        this.subject.destroy('onCancel');
    }

    constructor(private subject: SModalSubject) {
        this.subject.on('onDestroy', () => {
            console.log('destory_1');
        })
    }
}
