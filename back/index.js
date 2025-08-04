const app = require("./src/server");
const dbCon = require("./src/config/dbCon")

dbCon().then((res)=>{
    app.listen(3000,()=>{
        console.log("server corriendo en puerto 3000")
    })

})
.catch((err)=>{
    console.log("error al conectar a la base de datos",err)
})