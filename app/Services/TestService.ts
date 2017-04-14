import { Collection } from '../Bootstrap/CollectionDecorator';

@Collection('test')
export default class TestService {
    constructor() {}

    getAllTest() {
        return typeof (this as any).test;
        // return (this as any).test.find({});
    }
}