'use strict'

const chai = require('chai')
const flatten = require('./../src/flatten')

describe(
    'flatten',
    () => {
        it(
            'Is a function',
            () => chai.assert.isFunction(flatten)
        )

        it(
            'Returns an Array',
            () => chai.assert.isArray(flatten([]))
        )

        describe(
            'Calculation',
            () => {
                [
                    {
                        input: [1],
                        expectedString: `[1]`,
                    },
                    {
                        input: [1,2,3],
                        expectedString: `[1,2,3]`,
                    },
                    {
                        input: [1,2,[1,2,3]],
                        expectedString: `[1,2,1,2,3]`,
                    },
                    {
                        input: [[1,2,[3]],4],
                        expectedString: `[1,2,3,4]`,
                    },
                ]
                    .forEach(
                        ({input, expectedString}) => {
                            it(
                                `${input} → ${expectedString}`,
                                () => chai.assert.equal(expectedString, JSON.stringify(flatten(input)))
                            )
                        }
                    )
            }
        )
    }
)
