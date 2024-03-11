import ClientAccount from "./ClientAccount";

class SpecialAccount extends ClientAccount{
  constructor(id: number, name: string, accountNumber: number){
    super(id, name, accountNumber)
  }

  deposit = (value: number) : void =>{
    if (this.validateStatus()){
      this.balance += value + 10
    }
  }
}

export default SpecialAccount