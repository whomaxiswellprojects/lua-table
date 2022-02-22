class Table {
    constructor() {
        this.unit = {};
    }

    getTable() {
        return this.unit;
    }
}

module.exports = {
    /**
     * Table Class same as lua {}
     */
    Table: Table,

    /**
     * Adds a item using a index to a table, the index need to be a number
     * @param {Table} table 
     * @param {number} pos 
     * @param {any} value 
     */
    insert(table, pos, value) {
        table.unit[pos] = value;
    },

    /**
     * Adds a item using a key (could be anything like a string or number or float or etc)
     * @param {Table} table 
     * @param {any} key 
     * @param {any} value 
     */
    insert(table, key, value) {
        table.unit[key] = value;
    },

    /**
     * Removes a key from a table using a number
     * @param {Table} table 
     * @param {number} pos 
     */
    remove(table, pos) {
        table.unit[pos] = undefined;
    },

    /**
     * Get a Item Value from a table
     * @param {Table} table 
     * @param {number} pos 
     * @returns 
     */
    get(table, pos) {
        try {
            return table.getTable()[pos];
        } catch (err) {
            throw new Error(err);
        }
    },

    /**
     * Get a Item Value from a table
     * @param {Table} table 
     * @param {any} key 
     * @returns 
    */
    get(table, key) {
        try {
            return table.getTable()[key];
        } catch (err) {
            throw new Error(err);
        }
    },

    /**
     * Removes a key from a table using any type of stuff like number, string, float, etc
     * @param {Table} table 
     * @param {any} key 
     */
    remove(table, key) {
        table.unit[key] = undefined;
    },

    /**
     * ForEach same as lua for each
     * @param {Table} table 
     * @param {Function} callback 
     */
    forEach(table, callback) {
        for (const i in table.unit) {
            callback(i, table.getTable());
        }
    },

    /**
     * Returns to the size of the table
     * @param {Table} table 
     * @returns 
     */
    getSize(table) {
        let _num = 0;
        for (const _ in table.getTable()) {
            _num++;
        }
        return _num;
    }
}