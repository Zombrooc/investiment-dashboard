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
            <Input type="text" placeholder="Pesquisar Ação, FII, Stocks, ..." className="w-full" />
            <Button variant="outline" size="icon">
              <MagnifyingGlassIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <PlusIcon className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-row gap-5">
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
      <div className="w-52">
        asjhaushuahsh
      </div>
    </div >
  );
}
