import { AddUserModal } from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

const Users = () => {
  const users = useAppSelector(selectUsers);
  //   const dispatch = useAppDispatch();
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-extrabold py-10 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent ">
          All Users
        </h1>
      </div>
      <div className="mb-5 flex justify-between">
        <AddUserModal />
      </div>
      <div className="">
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
