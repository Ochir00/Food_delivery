import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">food</Button>
      </DialogTrigger>
      <DialogContent className="min-w-[830px]">
        <div className="flex gap-[20px]">
          <div className="w-[377px] h-[364px] bg-white"></div>
          <div className="w-[377px] h-[364px]">
            <p>food name</p>
            <p>flute</p>
            <p>Total price</p>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">okey</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
