import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function(
  context: Context,
  req: HttpRequest
): Promise<void> {
  const joke = {
    lead: "3 fish are in a tank",
    punch:
      'One of them looks at the other two and says, "How do you drive this thing?"'
  };

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: joke
  };
};

export default httpTrigger;
