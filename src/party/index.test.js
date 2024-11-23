import { Party } from '.';

describe('Party', () => {
  it('should return the annual cost by multiplying monthlyCost by 12', () => {
    class DerivedParty extends Party {
      constructor(monthlyCost) {
        super();
        this.monthlyCost = monthlyCost;
      }
    }

    const derivedParty = new DerivedParty(10);
    expect(derivedParty.annualCost).toEqual(120);
  });
});
