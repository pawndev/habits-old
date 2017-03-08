import { IRegister } from '../Interface/IRegister'
import { IPlugin } from '../Interface/IPlugin'

export default class TestPlugin implements IPlugin {
    constructor() {
        this.register.attributes = {
            name: 'test-plugin',
            version: '0.1.0'
        };
    }

    register: IRegister = (server, options: Object, next: Function) => {
        server.bind(this);
        this._register(server, options);
        next();
    };

    protected _register(server, options) {
        return 'register';
    }
}