import { TemplateRef, Type } from '@angular/core';

//基础配置项参数
export class BaseOptions {
    visible: false;
    title: string | TemplateRef<void>;
    content: string | TemplateRef<void> | Type<void>;
    width: string | number;
    style: object;
    footer: boolean | TemplateRef<void>;
    wrapClass: string;
    okText: string;
    cancelText: string;

    onOk: () => void;
    onCancel: () => void;
}

export class ModalOptions extends BaseOptions {

    coloseable = true;

    componentParams: object;
}

export class ConfirmOptions extends BaseOptions {

    iconType: string;

    confirmType: string;
}
