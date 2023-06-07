import * as tstl from "typescript-to-lua"
import * as path from "path"

const plugin : tstl.Plugin  = {
    onImportResolutionFailure(packageRoot: string, dependencyPath: string) {

        // console.log("-------------------------------------")
        // console.log("Directory", packageRoot)
        // console.log("Original Path", dependencyPath)

        let lastSep = dependencyPath.lastIndexOf(path.sep)
        let fixedDepPath = dependencyPath.substring(0, lastSep) + "." + dependencyPath.substring(lastSep + 1)
        let fullFixedPath = packageRoot + path.sep + "dist" + path.sep + fixedDepPath + ".lua";

        // console.log("Fixed Dependency Path", fixedDepPath)
        // console.log("Full Path", fullFixedPath)
        

        return fullFixedPath;
        
        // let resolvedPath = fileDirectory + path.sep + dependencyPath.substring(0, lastSep) + "." + dependencyPath.substring(lastSep + 1)
        // return resolvedPath + ".lua";

    }
}

export default plugin;