import Component from '../Component'
import { singleton, unique } from './validators'

/**
 * VTIMEZONE class.
 *
 */
export default class VTIMEZONE extends Component {
  static componentName = 'VTIMEZONE'

  static requiredProps = ['TZID']

  static validProps = {
    /* eslint-disable key-spacing */
    TZID:              [singleton()],
    'LAST-MOD':        [singleton()],
    TZURL:             [singleton()],
    STANDARDC:         [singleton()], unique(['DAYLIGHTC'])],
    DAYLIGHTC:         [singleton()], unique(['STANDARDC'])],
    'X-PROP':          []
    /* eslint-enable key-spacing */
  }
}
