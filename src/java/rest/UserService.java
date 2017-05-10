package rest;

import data.UserDAO;
import data.UserDAOMem;
import data.UserDTO;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("users")
public class UserService {
    private UserDAO idao = new UserDAOMem();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<UserDTO> getUserList() {
        return idao.getUserList();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public boolean createUser(UserDTO user) {
        return idao.createUser(user);
    }

    @PUT
    public boolean updateUser(UserDTO user) {
        return idao.updateUser(user);
    }

    @DELETE
    public boolean deleteUser(UserDTO user) {
        return idao.deleteUser(user.getUserId());
    }
}
