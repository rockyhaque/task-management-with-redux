import { Button } from "@/components/ui/button";
import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  user: IUser;
}

export default function UserCard({ user }: IProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="border px-5 py-3 rounded-md mb-5">
      <div className="flex justify-between">
        <div>
          <h1>{user.name}</h1>
        </div>
        <div>
          <Button
            onClick={() => dispatch(removeUser(user.id))}
            variant="link"
            className="p-0 text-red-500"
          >
            <Trash2 />
          </Button>
        </div>
      </div>
    </div>
  );
}
