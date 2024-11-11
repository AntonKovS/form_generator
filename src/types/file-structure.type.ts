import {ChoicesType} from "./choices.type";

export type FileStructureType = {
  "id": number,
  "inputType": string,
  "label": string,
  "viewType"?: string,
  "required"?: boolean,
  "description"?: string,
  "placeholder"?: string,
  "choices": ChoicesType[]
}
