import User from '../model/user';

 interface UserDao{
   addUser(user:User);
   removeUser(user:User);
   findUser();
}

class UserDaoImpl implements UserDao{
  public addUser(user:User){
    
  }
   public removeUser(user:User){

   }
   public findUser(){

   }
}