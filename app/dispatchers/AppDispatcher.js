import { Dispatcher } from 'flux';

class AppDispatcher extends Dispatcher {

  /**
   * Le dispatcher est utilisé de cette manière pour pouvoir agir comme proxy
   * et logger toutes les actions.
   * @param action
   */
  dispatch(action = {}) {
    console.log(`Dispatched ${action}`);
    super.dispatch(action);
  }
}


export default new AppDispatcher();