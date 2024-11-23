import { Party } from '..';

export class Department extends Party {
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

  get totalAnnualCost() {
    return this.monthlyCost * 12;
  }
}
