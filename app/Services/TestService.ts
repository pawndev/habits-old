import { Collection } from '../Bootstrap/CollectionDecorator';

@Collection('test')
export default class TestService {
    constructor() {}

    getAllTest() {
        return (this as any).test.find({});
    }
}