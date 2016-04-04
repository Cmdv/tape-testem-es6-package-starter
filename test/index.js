import test from "tape"
import {sample} from '../src'

test("Sample Test", (t) => {
  t.plan(1)
  t.equal(true, sample(), "sample() is true")
})
