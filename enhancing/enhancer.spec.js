const enhancer = require('./enhancer.js');

describe("Enhancer test units", () => {
    let item1, item2;
    beforeEach(() => {
        item1 = {
            name: "Silver Daggers",
            durability: 10,
            enhancement: 5,
        }
        item2 = {
            name: "Elven Bow",
            durability: 20,
            enhancement: 18,
        }
        item3 = {
            name: "Twisted Chanter's Staff",
            durability: 62,
            enhancement: 15,
        }
        item4 = {
            name: "Assassin's Blade",
            durability: 43,
            enhancement: 8,
        }
        item5 = {
            name: "Cruel Barb",
            durability: 80,
            enhancement: 12,
        }
    })

    it("repairs", () => {
        const repairedItem1 = enhancer.repair(item1)
        expect(repairedItem1.durability).toEqual(100);

        const repairedItem2 = enhancer.repair(item2)
        expect(repairedItem2.durability).toEqual(100);

        const repairedItem3 = enhancer.repair(item3)
        expect(repairedItem3.durability).toEqual(100);

        const repairedItem4 = enhancer.repair(item4)
        expect(repairedItem4.durability).toEqual(100);

        const repairedItem5 = enhancer.repair(item5)
        expect(repairedItem5.durability).toEqual(100);
    })

    it("succeeds", () => {
        const enhancedItem1 = enhancer.succeed(item1)
        expect(enhancedItem1.enhancement).toEqual(6);

        const enhancedItem2 = enhancer.succeed(item2)
        expect(enhancedItem2.enhancement).toEqual(19);

        const enhancedItem3 = enhancer.succeed(item3)
        expect(enhancedItem3.enhancement).toEqual(16);

        const enhancedItem4 = enhancer.succeed(item4)
        expect(enhancedItem4.enhancement).toEqual(9);

        const enhancedItem5 = enhancer.succeed(item5)
        expect(enhancedItem5.enhancement).toEqual(13);
    })

    it("fails", () => {
        const failedItem1 = enhancer.fail(item1)
        expect(failedItem1.enhancement).toEqual(5);
        expect(failedItem1.durability).toEqual(5);

        const failedItem2 = enhancer.fail(item2)
        expect(failedItem2.enhancement).toEqual(17);
        expect(failedItem2.durability).toEqual(10);

        const failedItem3 = enhancer.fail(item3)
        expect(failedItem3.enhancement).toEqual(15);
        expect(failedItem3.durability).toEqual(52);

        const failedItem4 = enhancer.fail(item4)
        expect(failedItem4.enhancement).toEqual(8);
        expect(failedItem4.durability).toEqual(38);

        const failedItem5 = enhancer.fail(item5)
        expect(failedItem5.enhancement).toEqual(12);
        expect(failedItem5.durability).toEqual(75);
    })

    it("gets", () => {

    })
})
