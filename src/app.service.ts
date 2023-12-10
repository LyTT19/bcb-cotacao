import { Injectable } from "@nestjs/common"
import axios from "axios"
import puppeteer from "puppeteer"

@Injectable()
export class AppService {
  async getContent(page, selector) {
    return page.$eval(selector, (el) => el.textContent)
  }

  async getCotacaoScrapping(): Promise<any> {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    try {
      await page.goto("https://www.bcb.gov.br")
      const baseSelector = "div.componente div.box table:nth-child(1) tbody"
      const tipoCotacaoPTAX = await this.getContent(
        page,
        `${baseSelector} tr:nth-child(1) td:nth-child(1) span`,
      )
      const compraTipoPTAX = await this.getContent(
        page,
        `${baseSelector} tr:nth-child(1) td:nth-child(2) span`,
      )
      const vendaTipoPTAX = await this.getContent(
        page,
        `${baseSelector} tr:nth-child(1) td:nth-child(3) span`,
      )
      const tipoCotacao13 = await this.getContent(
        page,
        `${baseSelector} tr:nth-child(2) td:nth-child(1) span`,
      )
      const compraTipo13 = await this.getContent(
        page,
        `${baseSelector} tr:nth-child(2) td:nth-child(2) span`,
      )
      const vendaTipo13 = await this.getContent(
        page,
        `${baseSelector} tr:nth-child(2) td:nth-child(3) span`,
      )
      const cotacao = {
        CotacaoDoDia: [
          {
            Data: await tipoCotacaoPTAX,
            Compra: await compraTipoPTAX,
            Venda: await vendaTipoPTAX,
          },
          {
            Data: await tipoCotacao13,
            Compra: await compraTipo13,
            Venda: await vendaTipo13,
          },
        ],
      }
      return cotacao
    } catch (error) {
      console.error(error)
    } finally {
      await browser.close()
    }
  }
  async getCotacaoApi(): Promise<any> {
    try {
      const response = await axios.get(
        "https://api.bcb.gov.br/dados/serie/bcdata.sgs.10813/dados?formato=json",
      )
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
  getHello(): string {
    return "Hello World!"
  }
}
