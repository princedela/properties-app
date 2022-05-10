import { MouseEventHandler } from "react";

export default interface AdInterface {
  imageUrl: string;
  type: string;
  category: string;
  location: string;
  description: string;
  price: string;
  age: string;
  onClick: MouseEventHandler<Element>;
}
