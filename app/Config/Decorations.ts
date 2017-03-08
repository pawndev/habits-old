import * as Hapi from 'hapi';
import { IPlugin } from '../Interface/IPlugin';
import { 
    BoomDecoration
} from '../Decorations';

let Decorations : Array<IPlugin> = [
    new BoomDecoration()
];

export default Decorations;