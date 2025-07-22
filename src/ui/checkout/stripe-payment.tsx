"use client";

import clsx from "clsx";
import { useFormStatus } from "react-dom";
// import { send } from "../../lib/actions";
import * as React from "react";
// import { toast } from "sonner";
import type * as Commerce from "commerce-kit";

export const StripePayment = ({
	shippingRateId,
	shippingRates,
	allProductsDigital,
	locale,
}: {
	shippingRateId?: string | null;
	shippingRates: Commerce.MappedShippingRate[];
	allProductsDigital: boolean;
	locale: string;
}) => {
	return (
		<PaymentForm
			locale={locale}
			shippingRates={shippingRates}
			cartShippingRateId={shippingRateId ?? null}
			allProductsDigital={allProductsDigital}
		/>
	);
};

const PaymentForm = ({
	shippingRates,
	cartShippingRateId,
	allProductsDigital,
	locale,
}: {
	shippingRates: Commerce.MappedShippingRate[];
	cartShippingRateId: string | null;
	allProductsDigital: boolean;
	locale: string;
}) => {

//export default function Page() {

//  const [state, dispatch] = React.useActionState(send, undefined);
//  React.useEffect(() => {
//    if (!state) {
//      return;
//    }

//    if ("data" in state) {
//     toast(state.data);
//    } else if ("error" in state) {
//      toast(`Error when sending email: ${state.error}`);
//    }
//  }, [state]);

  return (
    <div> 
          <form
            className="mt-10 flex max-w-md gap-4 items-start w-full"
            //action={dispatch}
          >
            <label>
              Име и Фамилия
            </label><br />

            <label>
              Телефон:
            </label><br />

            <label>
              Адрес на офис на Спиди или Еконт:
            </label><br />            

            <label htmlFor="email" className="sr-only">
              Email:
            </label><br />

            <input
              id="email"
              name="email"
              type="email"
              required
              defaultValue="delivered@resend.dev"
              placeholder="jane@example.com"
              autoComplete="email"
              className="w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            />

            <SubmitButton />
          </form>
    </div>          
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={clsx(
        "flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
        pending && "opacity-50 cursor-not-allowed",
      )}
    >
      Invite
    </button>
  );
}
