import {testAdd} from "./App";

test("testAdd",()=>{
  const value = testAdd(7,8);
  expect(value).toEqual(15)
});


test("false test",() => {
  expect(false).toBeFalsy()
})