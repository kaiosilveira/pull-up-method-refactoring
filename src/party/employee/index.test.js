import { Employee } from '.';

describe('Employee', () => {
  it('should calculate the annual cost by multiplying the monthly cost by 12', () => {
    const department = new Employee(10);
    expect(department.annualCost).toEqual(120);
  });
});
