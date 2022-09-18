import { appState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { sandboxServer } from "./AxiosService.js"



class QuotesService {
  async getQuote() {
    const res = await sandboxServer.get('quotes')
    appState.quote = new Quote(res.data)
  }

}

export const quotesService = new QuotesService()