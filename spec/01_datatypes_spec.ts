describe('data types', () => {
    describe('declaring variables', () => {
        it('using let', () => {
            let x: any;
            x = 'Blue';
            x = 19;
            expect(x).toBe(19);
            let y = 34;
            expect(y).toBe(34);
        });
        it('using const', () => {
            const PI = 3.1415;
            const favoritecolors = ['blue', 'red', 'green'];
            favoritecolors[0] = 'purple';
            expect(favoritecolors[0]).toBe('purple');

        });
        describe('test function', () => {
            it('veriffies function', () => {
                function name() {
                    const n = "not sure";
                    return n;
                }
                expect(name()).toBe('not sure');
            });
            it('has a var keyword but dont use it as it is broken', () => {

            });
        });
        describe('literals in typescript', () => {
            it('has numeric literals', () => {
                let x1 = 12;
                let x2 = 12.3;
                let x3 = 1_000_000; //you can put underscores in the thousands places   
                let x4 = 0xff; //0x is hexadecimal
                let x5 = 0o22; //0o means it is base
                let x6 = 0b1101;
            });
            it('string literals', () => {
                let name = 'sean';
                expect(name).toBe('sean');
                let quote = 'As Emerson said, "A foolish consistency is the hobgoblin of small minds".';
                quote = "As Emerson said, \"A foolish consistency is the hobgoblin of small minds\".";
            });
            it('has template strings', () => {
                let story = `chapter 1.
                It was a dark night.
                The End`;
                console.log(story);
                let name = 'Bob', age = 53;
                let info = `The name is ${name} and the age is ${age}`
                expect(info).toBe('The name is Bob and the age is 53');
                let message = `This is just a "string" by "jeff"`;
            });
            it('has standard stuff', () => {
                let oldEnough = true;
                let tooYoung = false;
                expect("dog").toBeTruthy();
                expect("").toBeFalsy();
                expect(99).toBeTruthy();
                expect(0).toBeFalsy();
                expect(-1).toBeTruthy();
                expect([]).toBeTruthy();
                expect(undefined).toBeFalsy();
                expect(null).toBeFalsy();
            });
            it('check the array', () => {
                const favoritearray = [9, 21, 108];
                expect(favoritearray).toEqual([9, 21, 108]);
            });
            it('validate strings', () => {
                let firstname = `luffy`;
                let lastname = `dragon`;

                expect(firstname + lastname).toBe("luffydragon");
            });
            it('has array literals', () => {
                let shoppinglist: string[] = [];

                shoppinglist[0] = 'bread';
                shoppinglist[1] = 'shampoo';
                shoppinglist[999] = 'beer';
                expect(shoppinglist[999]).toBe('beer');
                expect(shoppinglist[22]).toBeUndefined();

            });
            it('destructuring arrays', () => {
                const shoppinglist = ['shampoo', 'bread', 'beer']
                const [first, , third, fourth] = shoppinglist
                expect(first).toBe('shampoo');
                expect(third).toBe('beer');
                expect(fourth).toBe(undefined);


                const [head, ...rest] = shoppinglist;
                expect(head).toBe('shampoo');
                expect(rest).toEqual(['bread', 'beer']);
            });
            it('also has spread operator', () => {
                let numbers = [1, 2, 3, 4, 5, 6];
                let numbers1 = [0, ...numbers, 7];
                expect(numbers1).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
                expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);

            });
            it('has tuples', () => {
                type Musician = [string, string, number, string]
                let warren: Musician = ['warren', 'ellis', 51, 'musician']

                const [, lastName, howOld] = warren;
                expect(lastName.toUpperCase()).toBe('ELLIS');
                expect(howOld).toBe(51);

            });
        });
    });
});