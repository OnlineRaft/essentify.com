"use client";

import clsx from "clsx";
import { useFormStatus } from "react-dom";
import { sendiii } from "../../lib/actions";
import * as React from "react";
//import { toast } from "sonner";
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

  const [message, dispatch] = React.useActionState(sendiii, null);
 React.useEffect(() => {
    if (!message) {
      return;
    }

/* 
    if ("data" in message) {
     toast(message.data);
  } else if ("error" in message) {
      toast(`Error when sending email: ${message.error}`);
    }
  */    
  }, [message]);


  return (
    <div> 
          <form
            className="mt-10 flex max-w-md gap-4 items-start w-full"
            action={dispatch}
          >
<div className="table w-full">
  <div className="table-row-group">

    <div className="table-row">
      <div className="table-cell"><label className="mt-3 w-full">Име и Фамилия</label></div>
      <div className="table-cell"><input
              id="name"
              name="name"
              type="name"
              required
              defaultValue=""
              placeholder=""
              autoComplete="phone"
              className="w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            /></div>
    </div>

    <div className="table-row">
      <div className="table-cell"><label className="mt-3 w-full">Телефон:</label></div>
      <div className="table-cell"><input
              id="phone"
              name="phone"
              type="phone"
              required
              defaultValue=""
              placeholder=""
              autoComplete="phone"
              className="w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            /></div>
    </div>

    <div className="table-row">
      <div className="table-cell"><label className="mt-3 w-full">Адрес на офис на Спиди или Еконт:</label></div>
      <div className="table-cell"><input
              id="address"
              name="address"
              type="address"
              required
              defaultValue=""
              placeholder=""
              autoComplete="address"
              className="w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            /></div>
    </div>

    <div className="table-row">
      <div className="table-cell"><label className="mt-3 w-full">Email:</label></div>
      <div className="table-cell"><input
              id="email"
              name="email"
              type="email"
              required
              defaultValue=""
              placeholder=""
              autoComplete="email"
              className="w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            /></div>
    </div>

    <div className="table-row">
      <div className="table-cell w-full"><label className="mt-3 w-full"><SubmitButton /></label></div>       
  </div>

  </div>
</div>
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
      Изпратете поръчката
    </button>
  );
}
