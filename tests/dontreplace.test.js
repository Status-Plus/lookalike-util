import { clearSimilar } from '../src/index'

test('remove nothing from plain string', () => {
    let testString = clearSimilar("Hello, World!")

    expect(testString).toBe("Hello, World!")
})

test('remove nothing from string with special chars', () => {
    let testString = clearSimilar("\`Foo(); Bar();\`")

    expect(testString).toBe("\`Foo(); Bar();\`")
})

test('remove nothing from string with numbers and special chars', () => {
    let testString = clearSimilar("Hello! I made $5,000,345.683 last year! I am very rich  & famous #living@la #h*ll!")

    expect(testString).toBe("Hello! I made $5,000,345.683 last year! I am very rich  & famous #living@la #h*ll!")
})


