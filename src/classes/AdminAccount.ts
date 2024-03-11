import Account from "./Account"

class AdminAccount extends Account{
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number) : void =>{
    if (this.validateStatus()){
      this.balance += value
    }
  }
}

export default AdminAccount