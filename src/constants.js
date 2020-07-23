import { FoodModel } from "./models/FoodModel";

export const ROBBING_WATERMELON_URL =
  "https://storage.googleapis.com/is_it_bad_food/1ef7c35c-cc89-11ea-87d0-0242ac130003.png";
export const DEFAULT_FOOD_URL =
  "https://storage.googleapis.com/is_it_bad_food/b6eb9fa3-906a-4e11-ad40-6d0d36faa33e.jpg";

export const UPLOAD_VIEW = "upload_view";
export const DECIDE_VIEW = "decide_view";
export const RESULT_VIEW = "result_view";

export const foods = [
  new FoodModel(
    ROBBING_WATERMELON_URL,
    "Yeah, definitely your food looks like it could rob a bank."
  ),
];
