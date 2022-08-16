import { AppState } from "../AppState.js"
import { Date } from "../models/Date.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class DatesService{

    async getDates(){ 
        const res = await api.get('')
        logger.log('is it working', res.data)
        AppState.dates = res.data
    }

}

export const datesService = new DatesService()
