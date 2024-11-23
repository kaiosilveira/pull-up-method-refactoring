import { Party } from '..';

export class Employee extends Party {
  constructor(monthlyCost) {
    super();
    this.monthlyCost = monthlyCost;
  }

  get monthlyCost() {
    return this._monthlyCost;
  }

  set monthlyCost(arg) {
    this._monthlyCost = arg;
  }

  get annualCost() {
    return this.monthlyCost * 12;
  }
}
