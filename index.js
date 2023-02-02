// 15 min with test setup
export const findCommaSeparator = (arr) => {
	if (!Array.isArray(arr)) {
		throw new Error()
	}

	const result = arr.find((str) => {
		const hasDotInTheEnd = str.match(/\.$/i)
		const hasCommas =
			str.match(/\w+,/gi)?.length === str.match(/\w+/gi)?.length - 1

		return hasCommas && hasDotInTheEnd
	})

	return result || null
}

// 15 min
export const roundUpToFive = (number) => {
	const result = Math.round(number / 5) * 5

	return result
}

// 10 min
export const addEnding = (number) => {
	const lastDigit = +String(number).match(/\d$/i)[0]
	let result = `${number} Компьютер`

	if (lastDigit >= 2 && lastDigit <= 4) {
		result += 'а'
	}

	if (lastDigit >= 5 || !lastDigit) {
		result += 'ов'
	}

	return result
}

// 10 min
export const checkNumberIsPrime = (number) => {
	if (number >= 1 && number <= 3) {
		return true
	}

	let result = true

	for (let i = 2; i <= Math.round(number / 2); ++i) {
		if (number % i === 0) {
			result = false
			break
		}
	}

	return result
}

// 15 min
export const filterSameValues = (arr1, arr2) => {
	const getCountOfValues = (arr) => {
		return arr.reduce(
			(acc, number) => ({
				...acc,
				[number]: acc[number] ? acc[number] + 1 : 1,
			}),
			{}
		)
	}

	let result = []

	const valuesInArr1 = getCountOfValues(arr1)
	const valuesInArr2 = getCountOfValues(arr2)

	Object.entries(valuesInArr1).forEach(([key, count]) => {
		if (count >= 2 && valuesInArr2[key] >= 2) {
			result.push(key)
		}
	})

	return result.map(Number)
}

// 15 min
export const showMultiplicationTableInConsole = (number) => {
	const maxValueRank = String(number ^ 2).length + 1

	for (let i = 0; i <= number; ++i) {
		let logBody = ''

		for (let j = 0; j <= number; ++j) {
			if (i === 0 && j === 0) {
				logBody += String().padStart(maxValueRank, ' ')
			} else if (j === 0) {
				logBody += String(i).padStart(maxValueRank, ' ')
			} else if (i === 0) {
				logBody += String(j).padStart(maxValueRank, ' ')
			} else {
				logBody += String(i * j).padStart(maxValueRank, ' ')
			}

			logBody += ' '
		}

		console.log(logBody)
	}
}
