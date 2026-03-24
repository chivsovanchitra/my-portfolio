import { userInfo } from "../config/data";

export default function Footer() {
  return (
    <footer className="text-center py-10 border-t text-sm text-gray-500">
      © {new Date().getFullYear()} {` `} {userInfo.fullName}. All rights
      reserved.
    </footer>
  );
}
