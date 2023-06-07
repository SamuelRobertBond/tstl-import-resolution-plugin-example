import { TestService } from "./test/test.service"
import { OtherTestService, foo } from "tstl-import-test-nested-lib"

export function test(){
    console.log("Testing 123")
}

foo()

let x = new TestService()
x.bip()

let y = new OtherTestService()
y.zorp();

