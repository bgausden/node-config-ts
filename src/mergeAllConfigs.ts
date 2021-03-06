/**
 * Created by tushar on 30/12/17.
 */
import R from 'ramda'
import { loadCLIConfigs } from './loadCliConfigs.js'
import { loadFileConfigs } from './loadFileConfigs.js'
import { replaceWithEnvVar } from './replaceWithEnvVar.js'
import { mergeFileConfigs } from './mergeFileConfigs.js'

/**
 * Loads all the configs from files and cli and merges them.
 */
export const mergeAllConfigs = R.converge(R.mergeDeepRight, [
  R.converge(replaceWithEnvVar, [
    R.compose(mergeFileConfigs, loadFileConfigs),
    R.identity
  ]),
  loadCLIConfigs
])
