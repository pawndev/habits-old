import * as Hapi from 'hapi';
import { IPlugin } from '../Interface/IPlugin';

export interface IConfig {
    isProd: Boolean;
    DB: Object;
    ServerSettings: any;
    Uri: any;
    Routes: Array<Hapi.IRouteConfiguration>;
    Plugins: Array<IPlugin>
}