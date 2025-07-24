"use server";

import { Resend } from "resend";
import { VercelInviteUserEmail } from "../ui/checkout/vercel-invite-user";

const resend = new Resend(process.env.RESEND_API_KEY);

//type State = { error: string } | { data: string };

export async function sendiii(prevState, queryData) {
  const email = queryData.get("email") as string;


/*    if (email === "1") {
    return "data";
  } else {
    return "error";
  }
*/

const { data, error } = await resend.emails.send({
    from: "Vercel <vercel@resend.dev>",
//    to: [email],
    to: "apps@onlineraft.com",
    subject: "Join team on Vercel AAA",
    react: VercelInviteUserEmail({}),
  });

  if (error) {
    return { error: error.message };
  }

  console.log(data);

  return { data: "Email sent!" };
  
}