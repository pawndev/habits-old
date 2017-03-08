import * as Hapi from 'hapi';
import { 
    TestController
} from '../Controllers';

let Routes : Array<Hapi.IRouteConfiguration> = [];

export default Routes.concat(
    new TestController().routes()
);