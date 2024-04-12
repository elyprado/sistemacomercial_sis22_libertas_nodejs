
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
   const sql = "INSERT INTO cliente " +
               "(nome, cpf, logradouro, numero, bairro, cep, telefone) " +
               "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
   const values = [req.body.nome, req.body.cpf, 
       req.body.logradouro, req.body.numero, req.body.bairro, req.body.cep, 
       req.body.telefone];
   await conn.query(sql, values);
   res.status(201).send('Rota POST!');
};
   
 exports.put = async (req, res, next) => {
    let id = req.params.id;
    const conn = await connect();
    const sql = "UPDATE cliente " +
                " SET nome = ?, cpf = ?, logradouro = ?, numero = ?, bairro = ?, cep = ?, telefone = ?" +
                " WHERE idcliente = ?";
    const values = [req.body.nome, req.body.cpf, 
        req.body.logradouro, req.body.numero, req.body.bairro, req.body.cep, 
        req.body.telefone];
    await conn.query(sql, values);
    res.status(201).send(`Rota PUT com ID! ${id}`);
  };
   
  exports.delete = async (req, res, next) => {
    let id = req.params.id;
    const conn = await connect();
    const sql = "DELETE FROM cliente " +
                " WHERE idcliente = ?";
    const values = [id];
    await conn.query(sql, values);
    res.status(200).send("Rota DELETE com ID! " + id);
  };
   
  exports.get = async (req, res, next) => {
     const conn = await connect();
     const pesquisa = req.query.pesquisa;
     const sql = "SELECT * FROM cliente " +
                 " WHERE nome like ?" +
                 " ORDER BY nome";
     const values = ["%" + pesquisa + "%"];
     const [rows] = await conn.query(sql, values);
     res.status(200).send(rows);
  };
   
  exports.getById = async (req, res, next) => {
     let id = req.params.id;
     const conn = await connect();
     const sql = "SELECT * FROM cliente WHERE idcliente = " + id;
     const [rows] = await conn.query(sql);
     if (rows.length > 0) {
       res.status(200).send(rows[0]);
     } else {
       res.status(404).send("ID não existe");
     }    
  };
 