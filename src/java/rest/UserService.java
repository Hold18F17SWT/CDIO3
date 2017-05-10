package rest;

import data.UserDAO;
import data.UserDAOMem;
import data.UserDTO;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("users")
public class UserService {
    private static UserDAO users = new UserDAOMem();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<UserDTO> getUserList() {
        return users.getUserList();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public boolean createUser(UserDTO user) {
        System.out.println("User created");
        return users.createUser(user);
    }

    @PUT
    public boolean updateUser(UserDTO user) {
        return users.updateUser(user);
    }

    @DELETE
    public boolean deleteUser(UserDTO user) {
        return users.deleteUser(user.getUserId());
    }
}
