import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../Organisms/user/UserCard";
import { SecondaryButton } from "../atom/button/SecondaryButton";
// import { UserContext } from "../../providers/UserProvider";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    name: `ぴーつん-${val}`,
    email: "12345@example.com",
    phone: "0120-123-456",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
