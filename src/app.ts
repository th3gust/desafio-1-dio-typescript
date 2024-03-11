import AdminAccount from "./classes/AdminAccount";
import ClientAccount from "./classes/ClientAccount";
import SpecialAccount from "./classes/SpecialAccount";

const personAccount: ClientAccount = new ClientAccount(1, 'Jose', 10)

personAccount.showBalance()
personAccount.deposit(500)
personAccount.showBalance()
personAccount.withdraw(600)

const adminAccount : AdminAccount = new AdminAccount('DIO', 100)

adminAccount.showBalance()
adminAccount.getLoan(100)
adminAccount.showBalance()

const specialPerson: SpecialAccount = new SpecialAccount(2, 'Maria', 20)

specialPerson.deposit(20)
specialPerson.showBalance()