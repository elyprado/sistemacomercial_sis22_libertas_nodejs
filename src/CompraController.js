async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection(
       {host:'54.91.193.137', user: 'libertas', 
       password:'123456', database: 'libertas5per'});
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
 }
 
 exports.post = async (req, res, next) => {
    const conn = await connect();
    const sql = "INSERT INTO compra " +
                " (numeronf, data, quantidade, valor, idproduto, idfornecedor) " +
                " VALUES (?, ?, ?, ?, ?, ?)";
    const values = [req.body.numeronf, req.body.data, 
       req.body.quantidade, req.body.valor, req.body.idproduto, req.body.idfornecedor];
    await conn.query(sql, values);
    res.status(201).send('Rota POST!');
 };
 
 exports.put = async (req, res, next) => {
    let id = req.params.id;
    const conn = await connect();
    const sql = "UPDATE compra " +
                " SET numeronf = ?, data = ?, quantidade = ?, valor =?, idproduto = ?, idfornecedor = ? " +
                " WHERE idcompra = ?";
    const values = [req.body.numeronf, req.data, 
       req.body.quantidade, req.body.valor, req.body.idproduto, req.body.idfornecedor];
    await conn.query(sql, values);
    res.status(201).send(`Rota PUT com ID! ${id}`);
  };
 
  exports.delete = async (req, res, next) => {
    let id = req.params.id;
    const conn = await connect();
    const sql = "DELETE FROM compra " +
                " WHERE idcompra = ?";
    const values = [id];
    await conn.query(sql, values);
    res.status(200).send("Rota DELETE com ID! " + id);
  };
 
  exports.get = async (req, res, next) => {
     const conn = await connect();
     const pesquisa = req.query.pesquisa;
     const sql = "SELECT * FROM compra " +
                 " WHERE numero nf like ?" +
                 " ORDER BY numeronf";
     const values = ["%" + pesquisa + "%"];
     const [rows] = await conn.query(sql, values);
     res.status(200).send(rows);
  };
 
  exports.getById = async (req, res, next) => {
     let id = req.params.id;
     const conn = await connect();
     const sql = "SELECT * FROM compra WHERE idcompra = " + id;
     const [rows] = await conn.query(sql);
     if (rows.length > 0) {
       res.status(200).send(rows[0]);
     } else {
       res.status(404).send("ID não existe");
     }    
  };
