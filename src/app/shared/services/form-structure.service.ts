import { Injectable } from '@angular/core';
import {FileStructureType} from "../../../types/file-structure.type";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormStructureService {

  formStructure: FileStructureType[] = [
    {
      "id": 1,
      "inputType": "input",
      "label": "Имя",
      "viewType": "single",
      "required": true,
      "description": "",
      "placeholder": "",
      "choices": [],
    },
    {
      "id": 2,
      "inputType": "input",
      "label": "Фамилия",
      "viewType": "single",
      "required": false,
      "description": "",
      "placeholder": "необязательно",
      "choices": [],
    },
    {
      "id": 3,
      "inputType": "number",
      "label": "Возраст",
      "viewType": "",
      "required": true,
      "description": "100",
      "placeholder": "",
      "choices": [],
    },
    {
      "id": 4,
      "inputType": "number",
      "label": "Стаж работы",
      "viewType": "",
      "required": false,
      "description": "70",
      "placeholder": "",
      "choices": [],
    },
    {
      "id": 5,
      "inputType": "select",
      "label": "Семейное положение",
      "viewType": "cut",
      "required": true,
      "description": "",
      "placeholder": "",
      "choices": [
        {
          "option": "Не женат / не замужем",
          "value": "1",
            "checked": false
        },
        {
          "option": "Женат / замужем",
          "value": "2",
            "checked": false
        },
      ],
    },
    {
      "id": 6,
      "inputType": "select",
      "label": "Домашние животные",
      "viewType": "cut",
      "required": false,
      "description": "",
      "placeholder": "",
      "choices": [
        {
          "option": "Есть",
          "value": "1",
            "checked": false
        },
        {
          "option": "Нет",
          "value": "2",
            "checked": false
        },
      ],
    },
    {
      "id": 7,
      "inputType": "input",
      "label": "ВУЗ",
      "viewType": "double",
      "required": true,
      "description": "Укажите заведения, в которых вы учились.",
      "placeholder": "Например, ВолгГУ",
      "choices": [],
    },
    {
      "id": 8,
      "inputType": "input",
      "label": "Школа",
      "viewType": "double",
      "required": false,
      "description": "Укажите заведения, в которых вы учились.",
      "placeholder": "Например, СШ №1",
      "choices": [],
    },
    {
      "id": 9,
      "inputType": "select",
      "label": "Место рождения",
      "viewType": "highlight",
      "required": true,
      "description": "",
      "placeholder": "",
      "choices": [
        {
          "option": "Не важно",
          "value": "1",
            "checked": false
        },
        {
          "option": "Астрахань",
          "value": "2",
            "checked": false
        },
        {
          "option": "Волгоград",
          "value": "3",
            "checked": false
        },
        {
          "option": "Волжский",
          "value": "4",
            "checked": false
        },
        {
          "option": "Ростов-на-Дону",
          "value": "5",
            "checked": false
        },
        {
          "option": "Саратов",
          "value": "6",
            "checked": false
        },
        {
          "option": "Элиста",
          "value": "7",
          "checked": false
        },
      ],
    },
    {
      "id": 10,
      "inputType": "select",
      "label": "Количество детей",
      "viewType": "highlight",
      "required": false,
      "description": "",
      "placeholder": "",
      "choices": [
        {
          "option": "0",
          "value": "1",
            "checked": false
        },
        {
          "option": "от 1 до 3",
          "value": "2",
            "checked": false
        },
        {
          "option": "Более 3",
          "value": "3",
            "checked": false
        },
      ],
    },
    {
      "id": 11,
      "inputType": "checkbox",
      "label": "Навыки",
      "viewType": "",
      "required": false,
      "description": "",
      "placeholder": "",
      "choices": [
        {
          "option": "Общение",
          "value": "communication",
          "checked": false
        },
        {
          "option": "Вождение",
          "value": "driving",
          "checked": false
        },
        {
          "option": "Иностранные языки",
          "value": "languages",
          "checked": false
        },
        {
          "option": "Программирование",
          "value": "coding",
          "checked": false
        },
        {
          "option": "Бег с препятствиями",
          "value": "running",
          "checked": false
        },
        {
          "option": "Управление вертолетом",
          "value": "helicopter",
          "checked": false
        },
        {
          "option": "Быстрое чтение",
          "value": "reading",
          "checked": false
        },
        {
          "option": "Оперное пение",
          "value": "singing",
          "checked": false
        },
        {
          "option": "Самозащита",
          "value": "protection",
          "checked": false
        },
        {
          "option": "Выделить все",
          "value": "select-all",
          "checked": false
        },
      ],
    },
    {
      "id": 12,
      "inputType": "checkbox",
      "label": "Цели",
      "viewType": "",
      "required": true,
      "description": "",
      "placeholder": "",
      "choices": [
        {
          "option": "Развитие",
          "value": "development",
          "checked": false
        },
        {
          "option": "Встречи с людьми",
          "value": "meetings",
          "checked": false
        },
        {
          "option": "Отдых",
          "value": "Relaxing",
          "checked": false
        },
        {
          "option": "Выделить все",
          "value": "select-all",
          "checked": false
        },
      ],
    },
  ];

  constructor(private http: HttpClient) {
  }

  getFormData() {
    return this.formStructure;
  }

  //example of sending the Form
  sendForm(params: any) {
    console.log(params);
    // send request for example:
    // return this.http.post<FormGroup<any>>('http://localhost:3000/api/form', params)
    //and subscribe in test-form.component.ts
  }

}
