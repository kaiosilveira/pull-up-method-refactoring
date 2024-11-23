import { Party } from '.';

describe('Party', () => {
  it('should return the annual cost by multiplying monthlyCost by 12', () => {
    class DerivedParty extends Party {
      constructor(monthlyCost) {
        super();
        this.monthlyCost = monthlyCost;
      }

      set monthlyCost(value) {
        this._monthlyCost = value;
      }

      get monthlyCost() {
        return this._monthlyCost;
      }
    }

    const derivedParty = new DerivedParty(10);
    expect(derivedParty.annualCost).toEqual(120);
  });

  it('should throw an error when trying to access monthlyCost', () => {
    const party = new Party();
    expect(() => party.monthlyCost).toThrowError('This should be implemented by a subclass');
  });
});
