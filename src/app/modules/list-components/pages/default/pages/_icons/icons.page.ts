import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'icons',
    templateUrl: './icons.page.html',
    styleUrls: ['./icons.page.scss']
})
export class IconsPage implements OnInit
{
    public code: any;
    public listIcons: string[] = [];

    constructor() 
    {
        this.code = require('html-loader!./examples/code.html').default;
    }

    ngOnInit(): void 
    {
        this.buildListIcons();
    }

    private buildListIcons(): void
    {
        this.listIcons = [
            "alarm",
            "archive",
            "card-add",
            "card-edit",
            "card-pos",
            "card-pos",
            "card-receive",
            "card-remove-2",
            "card-remove",
            "card-send",
            "card-slash",
            "card-tick-2",
            "card-tick",
            "card",
            "cards",
            "chart-square",
            "check",
            "coin-2",
            "coin",
            "convert-card",
            "discount-circle",
            "discount-shape",
            "document",
            "dollar-circle",
            "dollar-square",
            "empty-wallet-add",
            "empty-wallet-change",
            "empty-wallet-remove",
            "empty-wallet-tick",
            "empty-wallet-time",
            "empty-wallet",
            "eye-slash",
            "eye",
            "finger-cricle",
            "finger-scan",
            "frame",
            "key-square",
            "key",
            "lock-2",
            "lock-circle",
            "lock-slash",
            "lock",
            "math",
            "money-2",
            "money-3",
            "money-4",
            "money-add",
            "money-change",
            "money-forbidden",
            "money-recive",
            "money-remove",
            "money-send",
            "money-tick",
            "money-time",
            "money",
            "moneys",
            "password-check",
            "percentage-circle",
            "percentage-square",
            "radar",
            "receipt-2",
            "receipt-3",
            "receipt-4",
            "receipt-add",
            "receipt-discount",
            "receipt-disscount",
            "receipt-edit",
            "receipt-item",
            "receipt-minus",
            "receipt-search",
            "receipt-text",
            "receipt",
            "scan-barcode",
            "scan",
            "scanner",
            "scanning",
            "security-card",
            "security-safe",
            "security-user",
            "security",
            "shield-cross",
            "shield-search",
            "shield-slash",
            "shield-tick",
            "shield",
            "strongbox-2",
            "strongbox",
            "tag-2",
            "tag",
            "ticket-2",
            "ticket-discount",
            "ticket-expired",
            "ticket-star",
            "ticket",
            "transaction-minus",
            "unlock",
            "wallet-2",
            "wallet-3",
            "wallet-4",
            "wallet-add-2",
            "wallet-add",
            "wallet-check",
            "wallet-money",
            "wallet-remove",
            "wallet-search",
            "wallet",
        ];
    }
}