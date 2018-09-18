import { vuex as page1 } from './page1'

const vuex = { page1 }
const keys = Object.keys(vuex)

const isFunction = (functionToCheck) => functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'

const modules = keys.reduce((acc, key) => ({ ...acc, [key]: vuex[key].module }), {})
const plugins = keys.reduce((acc, key) => [...acc, vuex[key].plugin], []).filter(isFunction)

export default { modules, plugins }
