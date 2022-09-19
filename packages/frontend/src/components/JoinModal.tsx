import styled from "styled-components";
import { BigNumber, utils } from "ethers";
import { useEffect, useState } from "react";
import { CustomModal } from "./modal/index";
import { FormInput } from "./common/FormInput";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { env } from '@shared/environment'
import { useRouter } from 'next/router'
import { UploadBox } from "./common/UploadBox";
import ModalContainer from "./modal/ModalContainer";
import { Button } from "./common/Button";
import {NFTStorage} from 'nft.storage'
import toast from 'react-hot-toast';
import {message} from "antd";

async function storeDataToIpfs(image : any, inputName : String, inputDescription : String, otherDetails : any) {
  const ipfs = new NFTStorage({
    token: env.NFTStorageAPIKEY
  });
  const nftMetadata = await ipfs.store({
    image,
    name : inputName ? inputName : "No Name",
    description : inputDescription ? inputDescription : "No Description",
    ...otherDetails
  });
  console.log(`https://ipfs.io/ipfs/${nftMetadata.ipnft}/metadata.json`);
  return nftMetadata.ipnft;
}
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
  const [image, SetImage] = useState<File>();
  const [goToDashBoard, setGoToDashboard] = useState<Boolean>(false);
  const router = useRouter();


  const onJoin = async () => {
    if(goToDashBoard){
      router.push(`/dashboard/`);
    }
    setButtonMsg("Loading...");
    //TODO : UNCOMMENT
    // let cid = await storeDataToIpfs(image,name,description,{email,twitter,telegram});
    toast.success('Metadata stored successfully');
    setGoToDashboard(true)
    setButtonMsg("Go to Dashboard");
  };
  const onFileChanged = async (e : any) => {
    const {status} = e.file;

    if (status === 'done') {
      SetImage(e.file.originFileObj || e.file)
    } 
  }

  return (
    <Wrapper>
      <ModalContainer title="Join Lepak DAO">
        <FormInputContainer>
          <AmountFormInput
            style={{ marginRight: "46px" }}
            placeholder="Email"
            value={email}
            onChange={(e)=>{SetEmail(e.target.value)}}
          />
          <AmountFormInput
            placeholder="Name"
            value={name}
            onChange={(e) => {SetName(e.target.value)}}
          />
        </FormInputContainer>
        <FormInputContainer>
          <AmountFormInput
            style={{ marginRight: "46px" }}
            placeholder="Twitter"
            value={twitter}
            onChange={(e)=>{SetTwitter(e.target.value)}}
          />
          <AmountFormInput
            placeholder="Telegram"
            value={telegram}
            onChange={(e)=>{SetTelegram(e.target.value)}}
          />
        </FormInputContainer>
        <AmountFormInput
          style={{ width: "564px", height: "135px" }}
          placeholder="why do you want to join Lepak DAO"
          value={description}
          onChange={(e)=>{SetDescription(e.target.value)}}
        />
        <UploadBox title="Drop profile pic" onFileChanged={onFileChanged}/>
        <Button onClick={onJoin}>{buttonMsg}</Button>
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
