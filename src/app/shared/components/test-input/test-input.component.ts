import {Component, Input, OnInit} from '@angular/core';
import {FileStructureType} from "../../../../types/file-structure.type";
import {ChoicesType} from "../../../../types/choices.type";
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {TestFormComponent} from "../../../view/components/test-form/test-form.component";

@Component({
    selector: 'test-input',
    templateUrl: './test-input.component.html',
    styleUrls: ['./test-input.component.scss'],
})
export class TestInputComponent implements OnInit {
    @Input() field!: FileStructureType;
    inpForm!: FormGroup;
    fieldIdString: string = '';
    valueForSingleInput: string = '';
    choices: ChoicesType[] = [];
    inpDoubleForm!: FormGroup;
    numOfChoice: number = 1;

    constructor(public parentForm: FormGroupDirective,
                private testFormComponent: TestFormComponent) {
    }

    ngOnInit(): void {
        this.fieldIdString = this.field.id.toString();
        this.inpForm = this.parentForm.form;
        this.inpDoubleForm = this.parentForm.form;
        this.choices = [{option: '', value: '0', checked: false}];
    }

    addInput(): void {
        this.choices.push({option: '', value: this.numOfChoice.toString(), checked: false});
        this.testFormComponent.testForm.addControl((this.fieldIdString + '/' + this.numOfChoice.toString()),
            this.field.required
                ? new FormControl<string | null>('', Validators.required)
                : new FormControl<string | null>(''));
        this.numOfChoice++;
    }

    closeInput(value: string): void {
        if (this.choices && this.choices.length > 1) {
            this.choices = this.choices.filter((item: ChoicesType): boolean => {
                return item.value !== value;
            });
        this.testFormComponent.testForm.removeControl((this.fieldIdString + '/' + value));
        }
    }

    changeInputValue(inpVal: string, i: string): void {
        const input: ChoicesType | undefined = this.choices.find((item: ChoicesType): boolean => item.value === i);
        if (input) input.option = inpVal;
    }

}
