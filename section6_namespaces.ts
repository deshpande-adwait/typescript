namespace MyMath {
	const PI = 3.14;
	
	export function calculateCirumcumference(diameter: number) {
		return diameter * PI;
	}
	
	export function calculateRectangle(width: number, length: number) {
		return width * length;
	}
}

const PI = 6.28;
console.log(PI);
console.log(MyMath.calculateCirumcumference(10));
console.log(MyMath.calculateRectangle(10, 20));