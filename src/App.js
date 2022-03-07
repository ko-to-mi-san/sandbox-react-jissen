import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atom/button/PrimaryButton";
import { SecondaryButton } from "./components/atom/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/Organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";

const user = {
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  name: "ぴーつん",
  email: "12345@example.com",
  phone: "0120-123-456",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <HeaderOnly>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </HeaderOnly>
    </BrowserRouter>
  );
}
