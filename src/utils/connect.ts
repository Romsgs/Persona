import mongoose from "mongoose";
import config from 'config'

async function connect(){
  const dbUri = config.get<string>('DATABASE_URI')
  
  try {
    await mongoose.connect(dbUri)
    console.log('conectado ao banco de dados...')
  } catch (error) {
    console.log('não foi possível conectar ao banco de dados...' )
    process.exit(1);
    console.log(error)
  }

}

export default connect















  // return mongoose.connect(dbUri).then(()=>{
  //   console.log('connected do DB')
  // }).catch((error) => {
  //   console.log('não foi possível conectar ao banco de dados' )
  //   process.exit(1);
  // })