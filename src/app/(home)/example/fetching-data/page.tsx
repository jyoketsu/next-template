import { ApiRoutes } from "./api-routes";
import { ServerActions } from "./server-actions";

export default function Page() {
  return (
    <div className="w-full space-y-6">
      <ServerActions />
      <ApiRoutes />
    </div>
  );
}
