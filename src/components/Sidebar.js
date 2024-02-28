import Image from "next/image"
import { PlusIcon } from "@radix-ui/react-icons"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"

import logo from '@/assets/logo.svg'

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
})

export default function Sidebar() {

  const form = useForm({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="w-full p-3 flex sm:h-20 sm:align-center sm:flex-row lg:w-28 lg:h-screen  md:flex-col md:justify-center ">
      <Image src={logo} alt="site logo" className="w-14" />
      <Drawer>
        <DrawerTrigger>
          <Button
            variant="outline"
            size="icon"
            className="h-14 w-14 shrink-0 rounded-full bg-primary hover:bg-primary-foreground"
          >
            <PlusIcon className="h-6 w-6 text-white hover:text-zinc-700" />
            <span className="sr-only">Criar nova compra/venda</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Criar movimentação</DrawerTitle>
              <DrawerDescription>Crie aqui a compra ou venda de um papel.</DrawerDescription>
            </DrawerHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid gap-4 py-4">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="stockSymbol">
                      Código
                    </Label>
                    <Input id="stockSymbol" value="MXRF11, PETR4, SANB11, ..." className="col-span-3" />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="quantity">
                      Quantidade
                    </Label>
                    <Input id="quantity" value="1, 2, 3, ..." className="col-span-3" />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="unitValue">
                      Valor por Unidade
                    </Label>
                    <Input id="unitValue" type="number" value="10.57" className="col-span-3" />
                  </div>
                  <div className="grid items-center gap-1.5">
                    {/* <Label htmlFor="date">
                  Valor por Unidade
                </Label>
                <Calendar
                  mode="single"
                  id="data"
                  // selected={date}
                  // onSelect={setDate}
                  className="rounded-md border"
                /> */}
                    <FormField
                      control={form.control}
                      name="dob"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date of birth</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-[240px] pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormDescription>
                            Your date of birth is used to calculate your age.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                </div>
                <DrawerFooter>
                  <Button type="submit">Criar</Button>

                  <DrawerClose asChild>
                    <Button variant="outline">Cancelar</Button>
                  </DrawerClose>
                </DrawerFooter>
              </form>
            </Form>
          </div>
        </DrawerContent>
      </Drawer>
    </div >
  )
}