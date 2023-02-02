import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'

import {
	findCommaSeparator,
	roundUpToFive,
	addEnding,
	checkNumberIsPrime,
	filterSameValues,
	showMultiplicationTableInConsole,
} from './index.js'

describe('Task 1: should return a string where cities are separated by commas', () => {
	context('Throw error', () => {
		it('Argument is not array', () => {
			expect(() => findCommaSeparator('some string')).to.throw(Error)
		})
	})

	context('With arguments', () => {
		it('Should return corrrect string', () => {
			const arr = [
				['moscow', 'moscow, piter.', 'chelyabinsk'],
				['moscow', 'moscow piter.', 'chelyabinsk, moskow, piter.'],
				['moscow', 'moscow, piter', 'chelyabinsk, moskow.'],
			]

			expect(findCommaSeparator(arr[0])).to.equal('moscow, piter.')
			expect(findCommaSeparator(arr[1])).to.equal(
				'chelyabinsk, moskow, piter.'
			)
			expect(findCommaSeparator(arr[2])).to.equal('chelyabinsk, moskow.')
		})

		it('Should return null', () => {
			const arr = [
				['moscow', 'moscow, piter', 'chelyabinsk'],
				['moscow', 'moscow piter.', 'chelyabinsk moskow, piter.'],
				['moscow', 'moscow, piter', 'chelyabinsk, moskow'],
			]

			expect(findCommaSeparator(arr[0])).to.equal(null)
			expect(findCommaSeparator(arr[1])).to.equal(null)
			expect(findCommaSeparator(arr[2])).to.equal(null)
		})
	})
})

describe('Task 2: should return a number rounded up to 5', () => {
	context('With arguments', () => {
		it('Should return corrrect number', () => {
			const arr = [27, 27.8, 41.7, 49, 47, 43, 99]

			expect(roundUpToFive(arr[0])).to.equal(25)
			expect(roundUpToFive(arr[1])).to.equal(30)
			expect(roundUpToFive(arr[2])).to.equal(40)
			expect(roundUpToFive(arr[3])).to.equal(50)
			expect(roundUpToFive(arr[4])).to.equal(45)
			expect(roundUpToFive(arr[5])).to.equal(45)
			expect(roundUpToFive(arr[6])).to.equal(100)
		})
	})
})

describe('Task 3: should add ending', () => {
	context('With arguments', () => {
		it('Should return corrrect string', () => {
			const arr = [1, 2, 3, 4, 20, 101]

			expect(addEnding(arr[0])).to.equal('1 Компьютер')
			expect(addEnding(arr[1])).to.equal('2 Компьютера')
			expect(addEnding(arr[2])).to.equal('3 Компьютера')
			expect(addEnding(arr[3])).to.equal('4 Компьютера')
			expect(addEnding(arr[4])).to.equal('20 Компьютеров')
			expect(addEnding(arr[5])).to.equal('101 Компьютер')
		})
	})
})

describe('Task 4: should check a number is prime', () => {
	context('With arguments', () => {
		it('Should return corrrect value', () => {
			const arr = [1, 2, 3, 4, 6, 101]

			expect(checkNumberIsPrime(arr[0])).to.equal(true)
			expect(checkNumberIsPrime(arr[1])).to.equal(true)
			expect(checkNumberIsPrime(arr[2])).to.equal(true)
			expect(checkNumberIsPrime(arr[3])).to.equal(false)
			expect(checkNumberIsPrime(arr[4])).to.equal(false)
			expect(checkNumberIsPrime(arr[5])).to.equal(true)
		})
	})
})

describe('Task 5: should return same values in arrays', () => {
	context('With arguments', () => {
		it('Should return corrrect value', () => {
			const arr = [
				[
					[7, 17, 1, 9, 1, 17, 56, 56, 23],
					[56, 17, 17, 1, 23, 34, 23, 1, 8, 1],
				],
				[
					[7, 3, 1, 9, 1, 17, 56, 56, 3],
					[56, 17, 17, 3, 23, 34, 3, 1, 8, 1],
				],
			]

			expect(filterSameValues(arr[0][0], arr[0][1])).to.eql([1, 17])
			expect(filterSameValues(arr[1][0], arr[1][1])).to.eql([1, 3])
		})
	})
})

describe('Task 6: should show multiplication table on console', () => {
	it('Should work console log', () => {
		showMultiplicationTableInConsole(5)
	})
})
