//UsuarioCotroller.js
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
   const sql = "INSERT INTO vendedor " +
               "(nome, cpf, logradouro, numero, bairro, cep, telefone, perc_comissao, idcidade) " +
               "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
   const values = [req.body.nome, req.body.cpf, 
       req.body.logradouro, req.body.numero, req.body.bairro, req.body.cep, 
       req.body.telefone, req.body.perc_comissao, req.body.idcidade];
   await conn.query(sql, values);
   res.status(201).send('Rota POST!');
};
   
 exports.put = async (req, res, next) => {
    let id = req.params.id;
    const conn = await connect();
    const sql = "UPDATE vendedor " +
                " SET nome = ?, cpf = ?, logradouro = ?, numero = ?, bairro = ?, cep = ?, telefone = ?, per_comissao = ?, idcidade = ? " +
                " WHERE idvendedor = ?";
    const values = [req.body.nome, req.body.cpf, 
        req.body.logradouro, req.body.numero, req.body.bairro, req.body.cep, 
        req.body.telefone, req.body.perc_comissao, req.body.idcidade, id];
    await conn.query(sql, values);
    res.status(201).send(`Rota PUT com ID! ${id}`);
  };
   
  exports.delete = async (req, res, next) => {
    let id = req.params.id;
    const conn = await connect();
    const sql = "DELETE FROM vendedor " +
                " WHERE idvendedor = ?";
    const values = [id];
    await conn.query(sql, values);
    res.status(200).send("Rota DELETE com ID! " + id);
  };
   
  exports.get = async (req, res, next) => {
     const conn = await connect();
     const pesquisa = req.query.pesquisa;
     const sql = "SELECT * FROM vendedor " +
                 " WHERE nome like ?" +
                 " ORDER BY id";
     const values = ["%" + pesquisa + "%"];
     const [rows] = await conn.query(sql, values);
     res.status(200).send(rows);
  };
   
  exports.getById = async (req, res, next) => {
     let id = req.params.id;
     const conn = await connect();
     const sql = "SELECT * FROM vendedor WHERE idvendedor = " + id;
     const [rows] = await conn.query(sql);
     if (rows.length > 0) {
       res.status(200).send(rows[0]);
     } else {
       res.status(404).send("ID não existe");
     }    
  };
 