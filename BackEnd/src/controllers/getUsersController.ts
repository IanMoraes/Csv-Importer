import getUsersService from "../services/Users/getUsersService";

const usersController = async(param:string) =>{
    return await getUsersService(param)
}

export default usersController;