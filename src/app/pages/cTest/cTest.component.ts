import { AfterViewInit, Component, HostListener, OnInit, Injector, ElementRef, QueryList, TemplateRef, ViewChildren, ViewContainerRef, ViewEncapsulation, ViewChild, InjectionToken } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { DOWN_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { CdkPortal, Portal, TemplatePortal, ComponentPortal, PortalInjector } from '@angular/cdk/portal';



import { Router } from '@angular/router';
//import { ModalCustomizeComponent } from '../../components/dialog/dialog.customize.component';
import { ButtonComponent } from '../../components/button/button.component';
// import { ComboxOptionComponent } from '../../components/combox/combox.option.component';
import { SModalService } from '../../components/dialog/dialog.service';
import { SurveyInputDirective } from '../../directives/surveyInput.directive';
import { GlobalConfigService } from '../../services/global-config.service';


@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 's-test',
    providers: [SModalService],
    templateUrl: './cTest.html',
    styleUrls: ['./cTest.scss']
})

export class CtestComponent implements AfterViewInit, OnInit {

    @ViewChildren(SurveyInputDirective) surveyInputs: QueryList<SurveyInputDirective>;
    @ViewChildren(CdkPortal) templatPortals: QueryList<CdkPortal>;
    @ViewChild("template") template3: TemplateRef<any>;
    @ViewChild("overBtn", { read: ElementRef }) overBtn: ElementRef;
    overlayRef: OverlayRef;

    keyManage: FocusKeyManager<SurveyInputDirective>;
    isvisible = false;
    currentPortal: Portal<any>;
    testName: '组件内传递参数测试还没成功';//TODO

    //combox data
    options: object[] = [];
    selectedOption: any;
    val = 2;
    deliverSwitch=false;

    constructor(
        private gcService: GlobalConfigService,
        private router: Router,
        private smodalservice: SModalService,
        private viewContainerRef: ViewContainerRef,
        private overlay: Overlay,

        private injector: Injector
    ) { }
    /**

    * 键盘监听事件设定focus状态
     * @param event
     */
    @HostListener('keydown', ['$event']) keydown($event: KeyboardEvent) {
        if ($event.keyCode === UP_ARROW) {
            this.keyManage.setPreviousItemActive();
        } else if ($event.keyCode === DOWN_ARROW) {
            this.keyManage.setNextItemActive();
        }
    }

    showModal(event: Event, modalcontent): void {
        const subject = this.smodalservice.open({
            title: "使用自定义组件渲染",
            width: 600,
            content:'ssss',// ModalCustomizeComponent,
            okText: '确定',
            cancelText: '取消',
            onOk: () => {
                // alert('123');
                // return new Promise((resolve) => {
                //   setTimeout(resolve, 1000);
                // });
            },
            onCancel: () => {
                //alert('d')
            },
            footer: true,
            wrapClass: 'test1',
            componentParams: {
                name: '我是来渲染name的值'
            },
            style: {
                top: '150px'
            }
        });

        subject.subscribe(ret => {
            console.log('-----------------' + ret);
        })
    }

    showDropdown(event: Event, modalcontent): void {

    }

    //tab测试动态变更内容-模板
    changePortal1() {

        this.currentPortal = this.templatPortals.first;
        this.templatPortals.first.context = { nameInObject: "我是参数" };
    }

    changePortal2() {
        this.currentPortal = this.templatPortals.last;
    }
    //tab测试动态变更内容-模板(传参)
    changePortal3() {
        this.currentPortal = new TemplatePortal(this.template3, this.viewContainerRef, { nameInObject: "我也是参数" });
    }
    //tab测试动态变更内容-组件
    changePortal4() {
        // const portalInjector=this.icreateInjector();
        // this.currentPortal = new ComponentPortal(ModalCustomizeComponent,undefined,portalInjector);
        //this.currentPortal = new ComponentPortal(ModalCustomizeComponent);
    }

    // icreateInjector(): PortalInjector {
    //     const injectiontokens = new WeakMap();
    //     injectiontokens.set(PORTAL4_INJECT_DATA, this.testName);
    //     return new PortalInjector(this.injector, injectiontokens);
    // }

    clickOverlay(event: Event, modalContent) {

        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
        } else {
            this.overlayRef.attach(new TemplatePortal(modalContent, this.viewContainerRef));
        }
    }

    comboxChange(v): void {
        //alert('我的值写入了ngModel');
        console.dir(this.selectedOption);
    }

    searchChange(searchText:string):void{
    //    debugger;
    }

    ngOnInit() {

        //连接到点击按钮方位
        // const strategy = this.overlay.position().connectedTo(this.overBtn, { originX: 'end', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' });
        //不连接到任何组件边
        const strategy = this.overlay.position().global().centerHorizontally().centerVertically();
        this.overlayRef = this.overlay.create({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-dark-backdrop',
            panelClass: 'test',
            positionStrategy: strategy
            //与所连接组件随滚动条滚动
            // scrollStrategy:this.overlay.scrollStrategies.reposition()
        });

        //点击backdropback时触发事件
        this.overlayRef.backdropClick().subscribe(() => {
            this.overlayRef.detach();
        });

        // setTimeout(_ => {
        //     this.options = [
        //         { value: 'jack', name: 'Jack' },
        //         { value: 'lucy', name: 'Lucy' },
        //         { value: 'disabled', name: 'Disabled' }
        //     ];
        //     this.selectedOption = this.options[0];

        // }, 100);
    }

    pageIndexClickChange(value){
        console.log("pageIndexClickChange-------------"+value)
    }
    pageIndexChange(value) {
        console.log("pageIndexChange-------------" + value)
    }
    pageSizeChanger(value) {
        console.log("pageSizeChanger-------------" + value)
    }

    ngAfterViewInit(): void {
        this.keyManage = new FocusKeyManager(this.surveyInputs).withWrap();
        this.keyManage.setActiveItem(0);
    }
}

