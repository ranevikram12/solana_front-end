import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { IdlAccounts, Program, } from "@coral-xyz/anchor";
import { Keypair, PublicKey } from "@solana/web3.js";
import * as anchor from '@coral-xyz/anchor';
import SUPERADMIN_WALLLET from '../anchor/spin/superadmin.json';
import { program } from "../anchor/spin/setupTransfer";


export default function TransgerBtn() {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [isLoading, setIsLoading] = useState(false);
  const superadmin = anchor.web3.Keypair.fromSecretKey(Buffer.from(SUPERADMIN_WALLLET));

  const keypair = Keypair.generate();
  const onClick = async () => {
    if (!publicKey) return;

    setIsLoading(true);
    try {

      console.log(publicKey)
      console.log(superadmin.publicKey)
      const data = new anchor.BN(2 * anchor.web3.LAMPORTS_PER_SOL);

      console.log(data)
      const transaction = await program.methods
        .transferLamports(data).accounts({ from: publicKey, to: superadmin.publicKey })
        .transaction();

      const transactionSignature = await sendTransaction(
        transaction,
        connection
      );

      console.log(`View on explorer: https://solana.fm/tx/${transactionSignature}?cluster=devnet-alpha`);

      const newAccountBalance = await program.provider.connection.getBalance(
        publicKey
      );

      const newAccountBalance1 = await program.provider.connection.getBalance(
        superadmin.publicKey
      );

      console.log(newAccountBalance, newAccountBalance1)

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        className="w-24"
        onClick={onClick}
        disabled={!publicKey}
      >
        {isLoading ? "Loading" : "Transfer"}
      </button>
    </>
  );
}
