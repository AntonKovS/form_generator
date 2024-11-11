import {Component, Input, OnInit} from '@angular/core';
import {FileStructureType} from "../../../../types/file-structure.type";
import {FormGroup, FormGroupDirective} from "@angular/forms";
import {TestFormComponent} from "../../../view/components/test-form/test-form.component";

@Component({
    selector: 'test-number',
    templateUrl: './test-number.component.html',
    styleUrls: ['./test-number.component.scss']
})
export class TestNumberComponent implements OnInit {
    @Input() field!: FileStructureType;
    numForm!: FormGroup;
    inputValue: number = 0;
    fieldIdString: string = '';

    constructor(public parentForm: FormGroupDirective, private testFormComponent: TestFormComponent) {
    }

    ngOnInit(): void {
        this.fieldIdString = this.field.id.toString();
        this.numForm = this.parentForm.form;
    }

    increaseValue(): void {
        this.testFormComponent.testForm.markAsDirty();
        if (this.inputValue >= 0 && this.inputValue < 100) {
            this.inputValue++;
        } else if (!this.inputValue) {
            this.inputValue = 1;
        }
        this.testFormComponent.testForm.controls[this.fieldIdString].setValue(this.inputValue);
    }

    decreaseValue(): void {
        this.testFormComponent.testForm.markAsDirty();
        if (this.inputValue > 1) {
            this.inputValue--;
        } else if (!this.inputValue || this.inputValue <= 1) {
            this.inputValue = 0;
        }
        this.testFormComponent.testForm.controls[this.fieldIdString].setValue(this.inputValue);
    }

    changeValue(val: string): void {
        if (parseInt(val)) this.inputValue = parseInt(val);
    }

    keyValue(ev: any): void {
        if (!/^[0-9]$/.test(ev.key) && ev.key !== 'Delete' && ev.key !== 'Backspace') ev.target.blur();
    }

}
