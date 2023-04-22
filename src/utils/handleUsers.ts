type ConvertsType = Array<string>;

type User = {
	uid: string;
	converts?: ConvertsType;
};

interface IHandleUsers {
	addUser: (arg0: User) => Array<User>
	checkUser: (arg0: User) => boolean
	getAll: () => Array<User>
}

const users: Array<User> = [];

const handleUsers: IHandleUsers = {
	addUser(user) {
		users.push(user)
		return users;
	},

	checkUser(newUser: User) {
		const check =
			users.length > 0 ||
			users.some((users: User) => {
				return users.uid == newUser.uid;
			});

		return check;
	},

	getAll() {
		return users;
	},
};

export default handleUsers;
