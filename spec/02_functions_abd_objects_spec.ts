import { isEven, formatName } from "../src/utils";



describe('functions and objects', () => {
    describe('function literals', () => {
        it('the syntai', () => {
            //named function    
            function add(a: number, b: number): number {
                return a + b;
            }
            expect(add(3, 2)).toBe(5);

            //ananymous function
            const subtract = function (a: number, b: number): number {
                return a - b;
            }
            expect(subtract(3, 2)).toBe(1);

            const multiply = (a: number, b: number): number => a * b;
            expect(multiply(3, 2)).toBe(6);

            const divide = (a: number, b: number) => a / b;

            const logIt = (msg: string): void => {
                console.log('--->${msg}')

                //named anonymous function
                const factorial = function fac(x: number) {

                }
                factorial(32);
            }
        });
        it('intro higher ordered function', () => {
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            const evens = numbers.filter(isEven);
            expect(evens).toEqual([2, 4, 6, 8]);

            function isBiggerThan(x: number) {
                return function (y: number) {
                    return y > x;
                }
            }
            const topHalf = numbers.filter(isBiggerThan(4));
            expect(topHalf).toEqual([5, 6, 7, 8, 9]);
        });

        describe('arguments to functions', () => {
            it('has no overloading', () => {
                expect(formatName('han', 'solo')).toBe('solo, han');
                expect(formatName('han', 'solo', 'D')).toBe('solo, han D.');
            });
            it('having default values for arguments', () => {
                function add(a: number = 20, b: number = 10) {
                    return a + b;
                }
                expect(add(2, 2)).toBe(4);
                expect(add(4)).toBe(14);
                expect(add(undefined, 5)).toBe(25);
            });
            it('has unioned constants', () => {
                type SeatType = 'window' | 'aisle' | 'middle';
                function assignSeat(seatType: SeatType): number {
                    switch (seatType) {
                        case 'window': {
                            return 50;
                        }
                        case 'aisle': {
                            return 75;
                        }
                        case 'middle': {
                            return 40;
                        }
                    }

                }

                expect(assignSeat('window')).toBe(50);
                expect(assignSeat('aisle')).toBe(75);
            });
            it('has enums', () => {
                enum SeatType { Window, Aisle, Middle };
                function assignSeat(seatType: SeatType): number {
                    switch (seatType) {
                        case SeatType.Window: {
                            return 50;
                        }
                        case SeatType.Aisle: {
                            return 75;
                        }
                        case SeatType.Middle: {
                            return 40;
                        }
                    }

                }
                expect(assignSeat(SeatType.Window)).toBe(50);
                expect(assignSeat(SeatType.Aisle)).toBe(75);
            });
            it('has rest paraments', () => {
                function add(a: number, b: number, ...rest: number[]) {
                    const firstTwo = a + b;
                    return rest.reduce((s, n) => s + n, firstTwo);
                }
                expect(add(2, 2)).toBe(4);
                expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
            });
            //learn this afterwards
            it('demo of a reducer', () => {

                const state = 0;

                const actions = ['inc', 'inc', 'dec', 'inc'];

                const newState = actions.reduce((s, n) => {
                    switch (n) {
                        case 'inc': {
                            return s + 1;
                        }
                        case 'dec': {
                            return s - 1;
                        }
                    }
                }, state)

                expect(newState).toBe(2);
            });
            describe('objects', () => {
                describe('anomymous objects', () => {
                    it('making one', () => {

                        const actor = {
                            name: {
                                firstName: 'Harrison',
                                kasrName: 'Ford'
                            },
                            roles: [
                                'Han Solo',
                                'Decker'
                            ]
                        };
                        expect(actor.name.firstName).toBe('Harrison');
                        expect(actor.roles.some(n => n === 'Decker')).toBe(true);
                    });
                    it('duck typing', () => {
                        interface Loggable { message: string }
                        function logIt(thingy: Loggable) {
                            console.log(thingy.message);
                        }

                        // logIt('tacos');
                        const phoneCall = {
                            from: 'Stacey',
                            message: 'Get bread on the way home'
                        }

                        const email = {
                            to: 'Joe',
                            message: 'Call your mom'
                        }

                        logIt(phoneCall);
                        logIt(email);
                    });
                    it('using interfaces for shape of object', () => {
                        interface person { first: string; last: string, getInfo: () => string };
                        interface personwithMi extends person {
                            mi: string;
                        }

                        const cf: personwithMi = {
                            first: 'Carrie',
                            last: 'Fisher',
                            mi: 'A',
                            getInfo: function () {
                                return `person ${this.first} ${this.last};`
                            }
                        }

                        const mh: person = {
                            first: 'Mark',
                            last: 'Hamill',
                            getInfo: function () {
                                return `person ${this.first} ${this.last};`
                            }
                        });
                });
            });
        });
    });
});