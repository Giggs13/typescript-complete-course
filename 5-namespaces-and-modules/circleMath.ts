namespace MyMath {
    export const PI = 3.14;

    export namespace Circle {
        export function calculateCircumference(diameter: number): number {
            return diameter * MyMath.PI;
        }
    }
}