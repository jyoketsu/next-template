import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page() {
  return (
    <div className="w-full space-y-6">
      <div className="w-full pb-6 border-b">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6">
          Avatar
        </h3>

        <Avatar>
          <AvatarImage src="https://img.picgo.net/2025/01/15/206319672c0ab23c4658d4e9.jpg" />
          <AvatarFallback>GOKU</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
