import axiosApiInstance from "./instance";
import PositionsResponse from "../types/positions/PositionsResponse";

export async function getPositions(): Promise<PositionsResponse> {
    return await axiosApiInstance.get<PositionsResponse>("positions").then(res => res.data)
}