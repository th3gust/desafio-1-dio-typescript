abstract class Account {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = () : string => {
    return this.name
  }

  deposit = (value: number) : void =>{
    if (this.validateStatus()){
      this.balance += value
    }
  }

  withdraw = (value: number) :  void => {
    if (this.validateStatus() && this.balance >= value){
      this.balance -= value
    } 

    throw new Error('Saldo inválido.')
  }

  showBalance = () : void =>{
    console.log(this.balance)
  }

  validateStatus = () : boolean => {
    if (this.status){
      return this.status
    }

    throw new Error ('Conta inativa.')
  }

}

export default Account