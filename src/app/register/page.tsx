import Navbar from "@/components/Navbar";
import React from "react";

const Page = () => {
  return (
    <main className="w-screen h-screen bg-white overflow-x-hidden">
        <Navbar isDark />
      <div
        dangerouslySetInnerHTML={{
          __html: `
  <div class="visme_d" data-title="MetaRegistration" data-url="90xe846k-metaregistration" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="53222"></div><script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>
  `,
        }}
        className="w-full h-full mt-[4rem]"
      />
    </main>
  );
};

export default Page;
