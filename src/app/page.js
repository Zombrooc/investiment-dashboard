import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MagnifyingGlassIcon, PlusIcon } from '@radix-ui/react-icons'

import { Input } from "@/components/ui/input"
import Sidebar from '@/components/Sidebar';


export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="w-full p-3">
        <div className=" w-full p-5">
          <div className="flex w-full items-center space-x-2">
            <Input type="text" placeholder="Pesquisar Ação, FII, Stocks, ..." className="w-full h-12" />
            <Button variant="outline" size="icon" className="h-12 w-12">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12">
              <PlusIcon className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex flex-col p-5">
            <div className="flex justify-between">
              <p className="leading-7">
                Visão Geral
              </p>
              <p className="leading-7">
                Ver Tudo
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-7">

              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </div>


          </div>
        </div>
      </div>
      <div className="w-80">
        asjhaushuahsh
      </div>
    </div >
  );
}
