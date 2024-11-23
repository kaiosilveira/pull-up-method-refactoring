import { Department } from '.';

describe('Department', () => {
  it('should calculate the annual cost by multiplying the monthly cost by 12', () => {
    const department = new Department(10);
    expect(department.totalAnnualCost).toEqual(120);
  });
});
