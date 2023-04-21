// const { describe } = require('node:test');
const Component = require('../lib/component')

describe("Component",()=>{
    describe("Instantiate", ()=>{
        it('should be an instance of Component class', ()=>{
            const child = new Component();

            expect(child).toBeInstanceOf(Component)
        })
    })
    describe("Initialize", ()=>{
        it('should return an empty array if no child given',()=>{
            const component = new Component()
            const child = []

            expect(component.child).toStrictEqual(child)
        })
    })
    describe('render() method',()=>{
        it('should throw an error saying `Child class must implement render() method.`', ()=>{
            const cb = ()=> new Component().render();
            const err = new Error("Child class must implement render() method.");
            expect(cb).toThrowError(err);
            
        })
    })
    describe('renderInnerHTML() method',()=>{
        it('should loop over the children', ()=>{
        const child = 5
        const component = new Component().renderInnerHTML(child);
        
        expect(component).toBe('5')
        })
    })
})