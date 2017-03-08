import * as Hapi from 'hapi';
import { IPlugin } from '../Interface/IPlugin';
import { 
    TestPlugin
} from '../Plugins';

let Plugins : Array<IPlugin> = [
    new TestPlugin()
];

export default Plugins