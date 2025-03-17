"use client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full space-y-6">
      <div className="w-full pb-6 border-b">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6">
          Sonner
        </h3>

        <div className="mb-6">
          <Link
            className="underline"
            href="https://sonner.emilkowal.ski/"
            target="_blank"
          >
            Sonner Doc
          </Link>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={() => toast("Event has been created")}
          >
            Default
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              toast.message("Event has been created", {
                description: "Monday, January 3rd at 6:00pm",
              })
            }
          >
            Description
          </Button>

          <Button
            variant="outline"
            onClick={() => toast.success("Event has been created")}
          >
            Success
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              toast.info("Be at the area 10 minutes before the event time")
            }
          >
            Info
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              toast.warning("Event start time cannot be earlier than 8am")
            }
          >
            Warning
          </Button>

          <Button
            variant="outline"
            onClick={() => toast.error("Event has not been created")}
          >
            Error
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              toast("Event has been created", {
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
          >
            Action
          </Button>

          <Button
            variant="outline"
            onClick={() => {
              const promise = () =>
                new Promise((resolve) =>
                  setTimeout(() => resolve({ name: "Sonner" }), 2000)
                );

              toast.promise(promise, {
                loading: "Loading...",
                success: (data: any) => {
                  return `${data.name} toast has been added`;
                },
                error: "Error",
              });
            }}
          >
            Promise
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              toast(<div>A custom toast with default styling</div>)
            }
          >
            Custom
          </Button>
        </div>
      </div>
    </div>
  );
}
