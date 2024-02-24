'use client'
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
import { MagnifyingGlassIcon, PlusIcon, PieChartIcon, ChevronUpIcon, TriangleUpIcon, EyeOpenIcon, ReaderIcon, BellIcon } from '@radix-ui/react-icons'
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data1 = [];
const data2 = [];
const data3 = [];

const rand = 200;
for (let i = 0; i < 12; i++) {
  let d = {
    value: { x: Math.random() * (rand + 50) + 100 }
  };

  data1.push(d);
}

const rand2 = 200;
for (let i = 0; i < 12; i++) {
  let d = {
    value: { x: Math.random() * (rand + 50) + 100 }
  };

  data2.push(d);
}
const rand3 = 200;
for (let i = 0; i < 12; i++) {
  let d = {
    value: { x: Math.random() * (rand + 50) + 100 }
  };

  data3.push(d);
}
import { Input } from "@/components/ui/input"
import Sidebar from '@/components/Sidebar';
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="w-full h-screen">
        <div className=" w-full p-6 pt-10 h-screen bg-slate-100">
          <div className="flex w-full items-center space-x-2">
            <Input type="text" placeholder="Pesquisar Ação, FII, Stocks, ..." className="w-full h-12 bg-white" />
            <Button variant="outline" size="icon" className="h-12 w-12">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12">
              <BellIcon className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex flex-col p-5 mt-5">
            <div className="flex justify-between">
              <p className="leading-7 font-bold">
                Visão Geral
              </p>
              <p className="leading-7">
                Ver Tudo
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-3">

              <Card className="bg-blue-600	">
                <CardHeader>
                  <div className="flex flex-row items-center text-white">
                    <div className="w-16 h-16 rounded-lg bg-blue-500 flex items-center justify-center">
                      <PieChartIcon className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col ml-5">
                      <small className="text-sm font-medium leading-none">Investimento</small>
                      <p className="text-xl font-bold mt-2 flex flex-row items-center">R$ 100,00 <TriangleUpIcon className="stroke-[4px] ml-2" /></p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-0">
                  <Separator className="mb-4" />
                  <ResponsiveContainer width="100%" height={150}>
                    <LineChart width={150} height={150} data={data1}>
                      <Line type="monotone" dataKey="value.x" stroke="#fff" dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-green-500">
                <CardHeader>
                  <div className="flex flex-row items-center text-white">
                    <div className="w-16 h-16 rounded-lg bg-green-400 flex items-center justify-center">
                      <EyeOpenIcon className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col ml-5">
                      <small className="text-sm font-medium leading-none">Ganho Total</small>
                      <p className="text-xl font-bold mt-2 flex flex-row items-center">R$ 100,00 <TriangleUpIcon className="stroke-[4px] ml-2" /></p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-0">
                  <Separator className="mb-4" />
                  <ResponsiveContainer width="100%" height={150}>
                    <LineChart width={150} height={150} data={data2}>
                      <Line type="monotone" dataKey="value.x" stroke="#fff" dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-violet-500	">
                <CardHeader>
                  <div className="flex flex-row items-center text-white">
                    <div className="w-16 h-16 rounded-lg bg-violet-400 flex items-center justify-center">
                      <ReaderIcon className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col ml-5">
                      <small className="text-sm font-medium leading-none">Lucro Líquido</small>
                      <p className="text-xl font-bold mt-2 flex flex-row items-center">R$ 100,00 <TriangleUpIcon className="stroke-[4px] ml-2" /></p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-0">
                  <Separator className="mb-4" />
                  <ResponsiveContainer width="100%" height={150}>
                    <LineChart width={150} height={150} data={data3}>
                      <Line type="monotone" dataKey="value.x" stroke="#fff" dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>


          </div>
        </div>
      </div>
      <div className="w-96 p-7 flex flex-col">
        <div className="flex flex-col">
          <div className="mb-5">
            <div className="mb-5">
              <div className="flex flex-row items-center text-slate-400	">
                <div className="w-16 h-16 rounded-lg bg-blue-500 flex items-center justify-center">
                  <PieChartIcon className="w-8 h-8" />
                </div>
                <div className="flex flex-col ml-5">
                  <small className="text-sm font-medium leading-none">Investimento</small>
                  <p className="text-xl font-bold mt-2 flex flex-row items-center">R$ 100,00 <TriangleUpIcon className="stroke-[4px] ml-2" /></p>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex flex-row items-center text-slate-400	">
                <div className="w-16 h-16 rounded-lg bg-green-400 flex items-center justify-center">
                  <EyeOpenIcon className="w-8 h-8" />
                </div>
                <div className="flex flex-col ml-5">
                  <small className="text-sm font-medium leading-none">Ganho Total</small>
                  <p className="text-xl font-bold mt-2 flex flex-row items-center">R$ 100,00 <TriangleUpIcon className="stroke-[4px] ml-2" /></p>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex flex-row items-center text-slate-400	">
                <div className="w-16 h-16 rounded-lg bg-violet-400 flex items-center justify-center">
                  <ReaderIcon className="w-8 h-8" />
                </div>
                <div className="flex flex-col ml-5">
                  <small className="text-sm font-medium leading-none">Lucro Líquido</small>
                  <p className="text-xl font-bold mt-2 flex flex-row items-center">R$ 100,00 <TriangleUpIcon className="stroke-[4px] ml-2" /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
