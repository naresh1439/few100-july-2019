import { isEven } from "../src/utils";
import { data } from "./data";

describe('Array methods', () => {
    describe('examples', () => {
        let numbers: number[];
        beforeEach(() => {
            numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        });
        it('has a foreach', () => {
            numbers.forEach(f => console.log(f))
        });
        describe('methods that produce a new array', () => {
            it('has a filter', () => {
                const evens = numbers.filter(isEven);
                expect(evens).toEqual([2, 4, 6, 8]);
            });
            it('creating new array from each element', () => {
                const doubled = numbers.map(num => num * 2)
                expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
                const stringEvens = numbers.filter(isEven).map(n => n * 2).map(n => n.toString())
                expect(stringEvens).toEqual(['4', '8', '12', '16']);
            });
        });
        describe('methods to produce a single scalar value', () => {
            it('checking the memebrship of an array against a predicate', () => {
                const hasSomeEvens = numbers.some(isEven);//some will return true if all elements  are verify
                expect(hasSomeEvens).toBe(true);

                const hasAllEvens = numbers.every(isEven);//evry is do they all match the condition
                expect(hasAllEvens).toBe(false);
            });
            it('reduce', () => {
                const total = numbers.reduce((s, n) => s + n);
                expect(total).toBe(45);

                const totalPlusSome = numbers.reduce((s, n) => s + n, 100);
                expect(totalPlusSome).toBe(145);
            });
            it('fising things', () => {
                // const four = numbers.find()
                const four = numbers.filter(n => n === 4)[0];
                expect(four).toBe(4);

                const sixteen = numbers.filter(n => n === 16)[0];
                expect(sixteen).toBeUndefined();

                const [five] = numbers.filter(n => n === 5);
                expect(five).toBe(5);
            });
        });
    });
    describe('parctical use', () => {
        let vehicles = [
            { vin: '8398398397', info: { make: 'Ford', model: 'Explorer', year: 2012 }, mileage: 132_000 },
            { vin: '55567478473', info: { make: 'Toyota', model: 'Camry', year: 2018 }, mileage: 8_000 },
            { vin: '1234947848', info: { make: 'Chevy', model: 'Bolt', year: 2018 }, mileage: 152_000 },
        ];

        it('your practice 1', () => {
            const answer: string[] = vehicles.filter(n => n.mileage > 100_000).map(n => `${n.info.make} ${n.info.model}`);
            // The make and model of all vehicles with > 100_000 miles on them.
            expect(answer).toEqual(['Ford Explorer', 'Chevy Bolt']);
        });
        it('second practicw with data', () => {
            const customers = data;
            interface Answer1 {
                name: string;
                email: string;
                phone: string;
            }
            interface Answer2 {
                totalBalance: number;
                count: number;
            }
            function covertToCurrency(currency: String): number {
                return Number(currency.replace(/[^0-9\.-]+/g, ""));
            }
            //         const answer1: Answer1 = data.filter(d => covertToCurrency(d.balance) > 1000 && d.isActive)
            //             .map(c => {
            //                 return {
            //                     name: `${c.name.first} ${c.name.last}`,
            //                     email: c.email,
            //                     phone: c.phone
            //                 } as Answer1
            //             })
            //         console.log(answer1);

            //         const initialState: Answer2 = {
            //             totalBalance: 0,
            //             count: 0
            //         }

            //         const answer2 = data.filter(cust => covertToCurrency(cust.balance) > 1_000 && cust.isActive)
            //             .map(cust => cust.balance)
            //             .map(covertToCurrency)
            //             .reduce((s, n) => ({
            //                 totalBalance: s.totalBalance + n,
            //                 count: s.count + 1
            //             }), initialState);


            //         console.log(answer2);
            //         expect(answer2).toEqual({
            //             totalBalance: 24976.55,
            //             count: 9
            //         }));
            // }));
        });
    });
});
