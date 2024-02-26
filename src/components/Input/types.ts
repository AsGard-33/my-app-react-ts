type InputTypes =
  | "text"
  | "email"
  | "password"
  | "number"
  | "date"
  | "url"
  | "tel"
  | "search"
  | "color"
  | "button"
  | "submit"
  | "reset"
  | undefined;

export interface InputProps {
  name: string;
  type: InputTypes;
  placeholder?: string;
  label: string;
}
 
export{}