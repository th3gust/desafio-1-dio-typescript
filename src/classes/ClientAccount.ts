import Account from "./Account"

class ClientAccount extends Account{
  id: number
  constructor(id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.id = id
  }
}

export default ClientAccount