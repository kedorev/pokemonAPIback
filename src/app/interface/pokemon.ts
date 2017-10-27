import {Abilities} from "./abilities";


export interface Pokemon {
  name:string,
  id: number,
  height?: number,
  weight?: number,
  abilities?: [Abilities],
  types?: string
  species?: string
  location_area_encounters?: string
  base_experience?: number
  order?: number
  spriteFront?: string
}
