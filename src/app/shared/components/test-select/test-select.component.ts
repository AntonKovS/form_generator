import {Component, HostListener, Input, OnInit} from '@angular/core';
import {FileStructureType} from "../../../../types/file-structure.type";
import {FormGroup, FormGroupDirective} from "@angular/forms";
import {TestFormComponent} from "../../../view/components/test-form/test-form.component";

@Component({
  selector: 'test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss']
})
export class TestSelectComponent implements OnInit {
  bodyOpen: boolean = false;
  grayBackground: boolean = false;
  @Input() field!: FileStructureType;
  highlightOrCut: string = '';
  chosenOption: string = '';
  selForm!: FormGroup;
  fieldIdString: string = '';

  constructor(public parentForm: FormGroupDirective, private testFormComponent: TestFormComponent) {
  }

  ngOnInit(): void {
    this.fieldIdString = this.field.id.toString();
    this.selForm = this.parentForm.form;

    // if (this.field.choices && this.field.required) {
    //   this.chosenOption = this.field.choices[0].option;
    //   this.testFormComponent.testForm.controls[this.fieldIdString].setValue(this.chosenOption);
    // }

    if (this.field.viewType) {
      this.highlightOrCut = this.field.viewType;
    }
  }

  toggleBodyOpen(): void {
    this.bodyOpen = !this.bodyOpen;
    if (this.bodyOpen && this.highlightOrCut === 'cut') {
      this.grayBackground = true;
    }
    this.testFormComponent.testForm.markAsTouched();
    this.testFormComponent.testForm.controls[this.fieldIdString].setValue(this.chosenOption);
  }

  chooseOption(name: string): void {
    if (this.highlightOrCut === 'highlight') {
      this.chosenOption = name;
    } else if (this.highlightOrCut === 'cut') {
      this.chosenOption = name;
    }
  }

  @HostListener('document:click', ['$event'])
  click(event: Event) {
    if (this.bodyOpen &&
      !(event.target as HTMLElement).classList.contains("for-ignore-closing")) {
      this.bodyOpen = false;
      this.grayBackground = false;
    } else if (!this.bodyOpen) {
      this.grayBackground = false;
    }
  }

}
