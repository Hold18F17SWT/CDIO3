package data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class UserDTO implements Serializable{
	private static final long serialVersionUID = 4545864587995944260L;

	private int	userId;
	private String userName;
	private String initials;
	private String cpr;
	private String password;
	private List<String> roles;

	public UserDTO(int userId, String userName, String initials, String cpr, String password, String role) {
		this.userId = userId;
		this.userName = userName;
		this.initials = initials;
		this.cpr = cpr;
		this.password = password;
		this.roles = new ArrayList<>();
		this.roles.add(role);
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getInitials() {
		return initials;
	}

	public void setInitials(String initials) {
		this.initials = initials;
	}

	public String getCpr() {
		return cpr;
	}

	public void setCpr(String cpr) {
		this.cpr = cpr;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}

	public void addRole(String role){
		if (!this.getRoles().contains(role))
			this.roles.add(role);
		else
			System.out.println("Role already added to user");
	}

	public boolean removeRole(String role){
		return this.roles.remove(role);
	}

	@Override
	public String toString() {
		return "UserDTO [userId=" + userId + ", userName=" + userName + ", initials=" + initials + ", cpr=" + cpr + ", password=" + password + ", roles=" + roles + "]";
	}
}