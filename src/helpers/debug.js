import { inspect } from 'util';

const debug = (data) => console.log(inspect(data, {
  colors: true,
  showHidden: true,
  depth: 1,
}))

export default debug;