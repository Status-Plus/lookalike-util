import { clearSimilar } from '../src/index'

test('replace ', () => {
    let testString = clearSimilar("Hello, World!")

    expect(testString).toBe("Hello, World!")
})
