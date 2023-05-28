import { getTeamMembers } from "@/prisma/process";

export default async function handler(req,res){
  try{
    if(req.method === "GET"){
      const teams = await getTeamMembers()
      return res.status(200).json(teams)
    }

  }catch(error){
    return res.status(500).json({message: error.message})
  }
}