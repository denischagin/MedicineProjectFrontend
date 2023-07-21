import axios from "axios";
import { CityResponse } from "../models/api/CityResponse";

export class CityService {
  private static BASE = "http://ip-api.com/json/?lang=ru"
  
  public static async fetch(): Promise<CityResponse> {
    const response = await axios.get<CityResponse>(this.BASE)
    return response.data
  }
}
