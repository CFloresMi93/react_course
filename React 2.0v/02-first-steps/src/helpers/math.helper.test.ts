import { describe, expect, test } from 'vitest'
import { add, multiply, substract } from './math.helper'

describe('add', () => {

    test('should add two positive numbers', () => {

        // ! 1.Arrange

        const a = 1
        const b = 2

        // ! 2.Act

        const result = add(a, b)

        // ! 3.Assert
        expect(result).toBe(a + b)
    })

    test('should add two negative numbers', () => {

        // ! 1.Arrange

        const a = -2
        const b = -4

        // ! 2.Act

        const result = add(a, b)

        // ! 3.Assert
        expect(result).toBe(a + b)
    })

})

describe('substract', () => {
    test('should substract two positive numbers', () => {

        // ! 1.Arrange

        const a = 5
        const b = 3

        // ! 2.Act

        const result = substract(a, b)

        // ! 3.Assert
        expect(result).toBe(a - b)
    })

    test('should substract two negative numbers', () => {

        // ! 1.Arrange

        const a = -5
        const b = -3

        // ! 2.Act

        const result = substract(a, b)

        // ! 3.Assert
        expect(result).toBe(a - b)
    })

})

describe('multiply', () => {
    test('should multiply a positive number and negative number', () => {

        // ! 1.Arrange

        const a = 6
        const b = -2

        // ! 2.Act

        const result = multiply(a, b)

        // ! 3.Assert
        expect(result).lte(0)
    })

    test('should multiply a integer and 0', () => {

        // ! 1.Arrange

        const a = 5
        const b = 0

        // ! 2.Act

        const result = multiply(a, b)

        // ! 3.Assert
        expect(result).toBe(0)
    })

})
