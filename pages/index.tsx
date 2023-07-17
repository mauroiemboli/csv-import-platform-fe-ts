import React, { useEffect } from "react";
import Head from "next/head";
import { useGetProducts } from "@Hooks//products";
import {
  ErrorAnimation,
  InitializeAnimation,
} from "@Components/Common/Animations";
import UploadFileContent from "@Components/Home/UploadFileContent";
import AuthWrapper from "@Components/Hoks/AuthWrapper";
import DataContentTable from "@Components/Home/DataContent";
import { SearchInput } from "@Components/Common/Inputs/SearchInput";

function Home() {
  const [uploadComplete, setUploadComplete] = React.useState<boolean>(false);
  const [search, setSearch] = React.useState<string>("");

  const inputRef = React.useRef<HTMLInputElement>(null);

  const { data, errorDescription, loadingData, loaded } =
    useGetProducts(uploadComplete);

  const simulateClick = () => {
    if (inputRef && inputRef.current) inputRef.current.click();
  };

  return (
    <>
      <Head>
        <title>midigital - Data</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="content mt-5 data__content home">
        <div className="data__content__header">
          <UploadFileContent
            inputRef={inputRef}
            setUploadComplete={setUploadComplete}
            uploadComplete={uploadComplete}
            productsLength={data?.length}
          />
          {data && data.length > 0 && (
            <SearchInput search={search} setSearch={setSearch} />
          )}
        </div>
        {loadingData && <div className="loadingstate visible" />}
        {data && data.length > 0 ? (
          <DataContentTable search={search} data={data} />
        ) : (
          loaded &&
          data &&
          data.length == 0 &&
          inputRef &&
          inputRef.current && (
            <div onClick={simulateClick}>
              <InitializeAnimation />
            </div>
          )
        )}
        {errorDescription && errorDescription.length > 0 && (
          <ErrorAnimation message={errorDescription} />
        )}
      </div>
    </>
  );
}

export default AuthWrapper(Home);
