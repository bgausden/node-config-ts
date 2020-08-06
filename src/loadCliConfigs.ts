/**
 * Created by tushar on 30/12/17.
 */

import minimist from "minimist"
import * as R from 'ramda'

type ProcessArgv = {
  argv: string[]
}

/**
 * Loads config from the command line
 * @param process
 * @return {{cliConfig: any}}
 */
export const loadCLIConfigs = <T extends ProcessArgv>(process: T) => {
  return R.omit(['_'], minimist(process.argv))
}
