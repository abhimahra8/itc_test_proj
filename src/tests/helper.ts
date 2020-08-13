import * as chai from "chai";

export const chaiExpect = chai.expect;
export const chaiShould = chai.should;

export function checkAnyKey(searchObj, searchList) {
  return chaiExpect(searchObj).to.have.any.keys(...searchList);
}

export function checkLength(payload, propertyName, length = 0) {
  return chaiExpect(payload)
    .to.have.property(propertyName)
    .length.above(length);
}

export function checkKeys(payload, list) {
  for (const name of list) {
    chaiExpect(payload).to.have.property(name);
  }
}

export function checkEqualVal(payload, equalTo: any) {
  return chaiExpect(payload).to.equal(equalTo);
}