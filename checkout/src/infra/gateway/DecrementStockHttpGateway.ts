import axios from "axios";
import DecrementStockGateway from "../../application/gateway/DecrementStockGateway";

export default class DecrementStockHttpGateway
  implements DecrementStockGateway
{
  private stockHost = process.env.STOCK_HOST || "localhost";

  async execute(idItem: number, quantity: number): Promise<void> {
    await axios.post(`http://${this.stockHost}:3003/decrementStock`, {
      idItem,
      quantity,
    });
  }
}
