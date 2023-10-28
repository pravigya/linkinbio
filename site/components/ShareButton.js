import React, { use } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const ShareButton = () => {
  const router = useRouter();
  const copyLink = () => {
    navigator.clipboard.writeText(
      `http://localhost:3000/${router.query.handle}`
    );
    toast("copied");
  };
  return (
    <div
      className="absolute cursor-pointer top-28 left-10 bg-indigo-200 p-2 rounded-md z-10 shadow-md border-2"
      onClick={copyLink}
    >
      <img className="w-4" src="/svg/share.svg" alt="" />
    </div>
  );
};

export default ShareButton;
