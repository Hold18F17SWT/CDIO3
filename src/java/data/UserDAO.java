package data;

import java.util.List;

public interface UserDAO {
	UserDTO	getUser(int userId);
	boolean createUser(UserDTO user);
	boolean deleteUser(int userId);
	boolean updateUser(UserDTO user);
	List<UserDTO> getUserList();

	class DALException extends Exception {
		private static final long serialVersionUID = 7355418246336739229L;

		public DALException(String msg, Throwable e) {
			super(msg,e);
		}

		public DALException(String msg) {
			super(msg);
		}
	}
}
