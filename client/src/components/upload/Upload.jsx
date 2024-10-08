import React from "react";
import { IKContext, IKImage, IKUpload } from "imagekitio-react";

// here i have crate an const function for the authentaction:
const urlEndpoint = import.meta.env.VITE_IMAGE_KIT_PUBLIC;
const publicKey = import.meta.env.VITE_IMAGE_KIT_PRIVATE_KEY;

const authenticator = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/upload");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch {
    throw new Error(`Authenticaton request failed: ${error.message}`);
  }
};

const Upload = () => {

    const onError = err =>{
        console.log("Error", err);
    };

    const onSuccess = res => {
        console.log("Success", res);
    }

    const onUploadProgress = progress =>{
        console.log("Progress", progress);
    };

    const onUploadStart = evt =>{
        console.log("Start", evt);
    };

  return (
    <IKContext
      urlEndpoint={urlEndpoint}
      publicKey={publicKey}
      authenticator={authenticator}
    >
      <IKUpload
        fileName="test-upload.png"
        onError={onError}
        onSuccess={onSuccess}
        useUniqueFileName={true}
        onUploadProgress={onUploadProgress}
        onUploadStart={onUploadStart}
      />
    </IKContext>
  );
};

export default Upload;
