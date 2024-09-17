"use client"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { createUser } from "@/db/queries/insert"

export default function Form(){
 const {register , handleSubmit,reset} = useForm({
    defaultValues:{
     name: "",
    },
    });

  const onSubmit = async (data) => {
     createUser(data);
     reset({
      name:""
      });
    }
return(
 <div className="flex justify-center items-center mt-20 ">
  <Card className="w-[450px]   drop-shadow-md backdrop-blur">
  <CardHeader>
    <CardTitle>Fill your details</CardTitle>
  </CardHeader>
  <CardContent>
    <form>
    <div className="flex flex-col space-y-4">
    <Label>Enter your name</Label>
    <Input placeholder="Prathamesh Jakkula" {...register("name")}/>
    <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
    </div>
    </form>
  </CardContent>
</Card>
</div>
);
}
