import * as tstl from "typescript-to-lua"
import * as path from "path"

const targetModules = new Set([
    "apis"
])

const plugin : tstl.Plugin  = {
    moduleResolution(moduleIdentifier: string, dependencyPath: string) {
        console.log("[Plugin] Plugin Info:")
        console.log("[Plugin] Module Identifier:", moduleIdentifier)
        console.log("[Plugin] Dependency Path", dependencyPath)

        // throw new Error("Stinky Smelly")

        let modulesStart = moduleIdentifier.split(".")

        if(modulesStart.length > 0 && targetModules.has(modulesStart[0])){
            console.log("[Plugin] Included in lib:", modulesStart[0], targetModules.has(modulesStart[0]))
            let index = dependencyPath.lastIndexOf(path.sep)
            let fixedPath =  dependencyPath.substring(0, index) + "." + dependencyPath.substring(index + 1)
            console.log("[Plugin] Fixed Path", fixedPath)
            return fixedPath;
        }

        console.log("[Plugin] Could not transform", dependencyPath)
    }
}

export default plugin;