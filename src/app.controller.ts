import { Controller, Get } from "@nestjs/common"
import { AppService } from "./app.service"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get("/cotacao")
  getDolar(): Promise<any> {
    return this.appService.getCotacaoScrapping()
  }

  @Get("/dolar")
  getCotacao(): Promise<any> {
    return this.appService.getCotacaoApi()
  }
}
