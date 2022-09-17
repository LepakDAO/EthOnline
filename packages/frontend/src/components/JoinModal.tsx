import styled from "styled-components";
import { BigNumber, utils } from "ethers";
import { useState } from "react";
import { CustomModal } from "./modal/index";
import { FormInput } from "./common/FormInput";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { UploadBox } from "./common/UploadBox";
import ModalContainer from "./modal/ModalContainer";
import { Button } from "./common/Button";
export default function JoinModal({
  isOpen,
  onClose,
  id,
}: {
  isOpen: boolean;
  onClose: () => void;
  id: any;
}) {
  const { address, isConnected, connector } = useAccount();
  const [value, setValue] = useState<any>();
  const [buttonMsg, setButtonMsg] = useState<any>("Join");
  const [email, SetEmail] = useState<string>("");
  const [name, SetName] = useState<string>("");
  const [twitter, SetTwitter] = useState<string>("");
  const [telegram, SetTelegram] = useState<string>("");
  const [description, SetDescription] = useState<string>("");

  const [parsedValue, setParsedValue] = useState<any>();
  const onChangeValue = (e: any) => {
    if (e.target.value.toString() != "")
      setParsedValue(utils.parseEther(e.target.value.toString()));
  };
  const onDonateSubmit = async () => {
    setButtonMsg("Loading...");
    // const Account = await connector?.account();
    // const balance =
    //   await // const finalBalance = uint256ToBN(balance[0]).toString();

    //   // await
    setButtonMsg("Join");
  };

  return (
    <Wrapper>
      <ModalContainer title="Join Lepak DAO">
        <FormInputContainer>
          <AmountFormInput
            style={{ marginRight: "46px" }}
            placeholder="Email"
            value={email}
            onChange={onChangeValue}
          />
          <AmountFormInput
            placeholder="Name"
            value={name}
            onChange={onChangeValue}
          />
        </FormInputContainer>
        <FormInputContainer>
          <AmountFormInput
            style={{ marginRight: "46px" }}
            placeholder="Twitter"
            value={twitter}
            onChange={onChangeValue}
          />
          <AmountFormInput
            placeholder="Telegram"
            value={telegram}
            onChange={onChangeValue}
          />
        </FormInputContainer>
        <AmountFormInput
          style={{ width: "564px", height: "135px" }}
          placeholder="why do you want to join Lepak DAO"
          value={description}
          onChange={onChangeValue}
        />
        <UploadBox title="Drop profile pic" />
        <Button onClick={onDonateSubmit}>{buttonMsg}</Button>
      </ModalContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bgColor};
  border-radius: 25px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 707px;
  height: 999px;
`;

const FormInputContainer = styled.div`
  display: flex;
`;

const AmountFormInput = styled(FormInput)`
  margin-bottom: 44px;
`;
