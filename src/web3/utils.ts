import { ethers } from "ethers";
import { getKeys } from "../vault";

export async function blockchainConnection() {
    const keys = getKeys()
    return new ethers.JsonRpcProvider(keys.ALCHEMY_URL_BASE_SEPOLIA);
  }
  
export async function signerConnection(signerPrivateKey: string) {
    const provider = await blockchainConnection();
  
    const signer = new ethers.Wallet(signerPrivateKey, provider);
    
    return signer;
  }