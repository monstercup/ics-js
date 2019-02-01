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
<<<<<<< HEAD
    STANDARDC:         [singleton(), unique(['DAYLIGHTC'])],
    DAYLIGHTC:         [singleton(), unique(['STANDARDC'])],
=======
    STANDARDC:         [singleton()], unique(['DAYLIGHTC'])],
    DAYLIGHTC:         [singleton()], unique(['STANDARDC'])],
>>>>>>> cf066fef1c0ba4bf9f373e23d73bc4322c820d17
    'X-PROP':          []
    /* eslint-enable key-spacing */
  }
}
