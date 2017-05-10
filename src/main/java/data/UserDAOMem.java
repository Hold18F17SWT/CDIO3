package data;

import java.util.ArrayList;
import java.util.List;

public class UserDAOMem implements UserDAO {
	private ArrayList<UserDTO> userList = new ArrayList<>();

	@Override
	public UserDTO getUser(int userId) {
		for (UserDTO user : userList) {
			if (user.getUserId()==userId) {
				return user;
			}
		}
		return null;
	}

	@Override
	public boolean createUser(UserDTO user) {
		if (getUser(user.getUserId())!= null)
			return false;
		userList.add(user);
		return true;
	}

	@Override
	public boolean updateUser(UserDTO user) {
		if (getUser(user.getUserId())==null)
			return false;
		userList.set(user.getUserId(), user);
		return true;
	}

	@Override
	public boolean deleteUser(int userId) {
		if (getUser(userId)==null)
			return false;
		userList.remove(getUser(userId));
		return true;
	}

	@Override
	public List<UserDTO> getUserList() {
		return userList;
	}
}