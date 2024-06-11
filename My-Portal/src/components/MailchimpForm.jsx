import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newletter } from "./Newsletter";

export const MailchimpForm = () => {
  const postUrl = `${""}?u=${""}&id=${""}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => {
          <Newletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          ></Newletter>;
        }}
      ></MailchimpSubscribe>
    </>
  );
};
