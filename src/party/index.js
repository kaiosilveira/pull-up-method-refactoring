export class SubclassResponsibilityError extends Error {
  constructor() {
    super('This should be implemented by a subclass');
    this.name = 'SubclassResponsibilityError';
  }
}

export class Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }

  get monthlyCost() {
    throw new SubclassResponsibilityError();
  }
}
