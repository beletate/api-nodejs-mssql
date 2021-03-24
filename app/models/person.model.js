const { poolPromise } = require('../../config/database')

exports.create = async (date) => {
    const pool = await poolPromise;

    const rs = await pool
        .request()
        .query(`INSERT INTO person (name)
                VALUES ('${date.name}')`)

    return rs.rowsAffected;
}

exports.read = async () => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`SELECT *
                FROM person`)

    return rs.recordset;
}

exports.update = async (id, date) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`UPDATE person SET
                name = '${date[0].name}'                    
                WHERE id = ${id}`);

    return rs.rowsAffected;
}

exports.delete = async (id) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`DELETE FROM person
                WHERE id = ${id}`)

    return rs.rowsAffected;
}

exports.readById = async(id) =>{
    const pool = await poolPromise;
    const rs = await pool
            .request()
            .query(`SELECT *
                    FROM person 
                    WHERE id = ${id} `);
    
            return rs.recordset;
}
