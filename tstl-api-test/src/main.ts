import * as tstl from "typescript-to-lua"
import * as path from "path"
import * as fs from "fs"

let p = "C:\\Users\\Sam\\Desktop\\tdg\\tests\\tstl-import-test\\bundle\\tsconfig.json"
let o = "C:\\Users\\Sam\\Desktop\\tdg\\tests\\tstl-import-test\\tstl-api-test\\dist"

tstl.transpileProject(p, {
    plugins: [
        {
            inline: {
                onImportResolutionFailure: (packageRoot, dep) => {
                    console.log(packageRoot)
                    return undefined;
                }
            }
        }
    ]
}, (f, text, order, err) => {

    if(f.endsWith(".d.ts")){
        return;
    }

    let name = f.split(path.sep)
    console.log(`${o}\\${name[name.length - 1]}`)
    fs.writeFileSync(`${o}\\${name[name.length - 1]}`, text)
})