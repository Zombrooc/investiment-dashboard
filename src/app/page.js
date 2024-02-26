'use client'
import { MagnifyingGlassIcon, PieChartIcon, TriangleUpIcon, EyeOpenIcon, ReaderIcon, BellIcon, BookmarkIcon } from '@radix-ui/react-icons'
import { ResponsiveContainer, Tooltip, AreaChart, Area } from 'recharts';

import { columns } from "@/components/columns.js"
import { DataTable } from "@/components/data-table.js"

async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

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

const rand2 = 150;
for (let i = 0; i < 12; i++) {
  let d = {
    value: { x: Math.random() * (rand2 + 50) + 100 }
  };

  data2.push(d);
}
const rand3 = 500;
for (let i = 0; i < 12; i++) {
  let d = {
    value: { x: Math.random() * (rand3 + 50) + 100 }
  };

  data3.push(d);
}

import { Input } from "@/components/ui/input"
import Sidebar from '@/components/Sidebar';
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"


export default function Home() {

  const data = getData()

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="sm:w-full lg:w-screen bg-slate-100 p-6">
        <div className="flex w-full items-center space-x-2">
          <Input type="text" placeholder="Pesquisar Ação, FII, Stocks, ..." className="w-full h-10 bg-white" />
          <Button variant="outline" size="icon" className="h-10 w-10">
            <MagnifyingGlassIcon className="h-6 w-6" />
          </Button>
          <Button variant="outline" size="icon" className="h-10 w-10">
            <BellIcon className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex flex-col p-5 mt-5">
          <div className="flex justify-between">
            <p className=" font-bold text-base">
              Visão Geral
            </p>
            <p className=" text-sm">
              Ver Tudo
            </p>
          </div>
          <div className="container grid sm:grid-cols-1 gap-4 mt-5 lg:grid-cols-3">

            <Card className="bg-blue-600">
              <CardHeader>
                <div className="flex flex-row items-center text-white">
                  <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
                    <PieChartIcon className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col ml-3">
                    <small className="text-xs leading-none">Investimento</small>
                    <p className=" font-bold mt-1 flex flex-row items-center">R$ 100,00 <TriangleUpIcon className="stroke-[4px] ml-2" /></p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-0">
                <Separator className="mb-4" />
                <ResponsiveContainer width="100%" height={150}>
                  <AreaChart width={150} height={150} data={data1}>
                    <Tooltip />
                    <Area type="monotone" dataKey="value.x" stroke="#fff" dot={true} fill="#3b82f6" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-green-500">
              <CardHeader>
                <div className="flex flex-row items-center text-white">
                  <div className="w-12 h-12 rounded-lg bg-green-400 flex items-center justify-center">
                    <EyeOpenIcon className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col ml-3">
                    <small className="text-xs  leading-none">Ganho Total</small>
                    <p className=" font-bold mt-1 flex flex-row items-center">R$ 100,00 <TriangleUpIcon className="stroke-[4px] ml-2 text-base" /></p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-0">
                <Separator className="mb-4" />
                <ResponsiveContainer width="100%" height={150}>
                  <AreaChart width={150} height={150} data={data2}>
                    <Tooltip />
                    <Area type="monotone" dataKey="value.x" stroke="#fff" dot={true} fill="#4ade80" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-violet-500	">
              <CardHeader>
                <div className="flex flex-row items-center text-white">
                  <div className="w-12 h-12 rounded-lg bg-violet-400 flex items-center justify-center">
                    <ReaderIcon className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col ml-3">
                    <small className="text-xs leading-none">Lucro Líquido</small>
                    <p className="text-llg font-bold mt-1 flex flex-row items-center">R$ 100,00 <TriangleUpIcon className="stroke-[4px] ml-2 text-base" /></p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-0">
                <Separator className="mb-4" />
                <ResponsiveContainer width="100%" height={150}>
                  <AreaChart width={150} height={150} data={data3}>
                    <Tooltip />
                    <Area type="monotone" dataKey="value.x" stroke="#fff" dot={true} fill="#a78bfa" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>


        </div>
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
      <div className="h-screen max-w-full md:w-1/4 lg:h-screen p-7 flex flex-col">
        <div className="h-1/3 flex flex-col mb-3 ">
          <div className="flex">
            <BookmarkIcon className="w-6 h-6 mr-5" />
            <p className=" font-bold text-sm ">
              Favoritos
            </p>
          </div>
          <Separator className="my-4" />
          <ScrollArea className=" w-full rounded-md px-4 flex flex-col">
            <div className="flex flex-row items-center mb-5 md:flex-col lg:flex-row">
              <div className="md:w-full lg:w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                <PieChartIcon className="w-6 h-6 " />
              </div>
              <div className="flex flex-col text-gray-700 w-full">
                <div className="flex flex-row md:flex-col 2xl:flex-row ml-2 align-center justify-between md:justify-start lg:justify-between">
                  <p className="text-sm font-bold">MXRF11</p>
                  <p className="text-sm ml-4 font-bold md:ml-0 2xl:ml-4">3 un. | R$ 100,00</p>
                </div>
                <div className="mt-1 ml-2 text-xs">
                  <p><span className="font-bold">10%</span> dos investimentos</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center mb-5 md:flex-col lg:flex-row">
              <div className="md:w-full lg:w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                <PieChartIcon className="w-6 h-6 " />
              </div>
              <div className="flex flex-col text-gray-700 w-full">
                <div className="flex flex-row md:flex-col 2xl:flex-row ml-2 align-center justify-between md:justify-start lg:justify-between">
                  <p className="text-sm font-bold">MXRF11</p>
                  <p className="text-sm ml-4 font-bold md:ml-0 2xl:ml-4">3 un. | R$ 100,00</p>
                </div>
                <div className="mt-1 ml-2 text-xs">
                  <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center mb-5 md:flex-col lg:flex-row">
              <div className="md:w-full lg:w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                <PieChartIcon className="w-6 h-6 " />
              </div>
              <div className="flex flex-col text-gray-700 w-full">
                <div className="flex flex-row md:flex-col 2xl:flex-row ml-2 align-center justify-between md:justify-start lg:justify-between">
                  <p className="text-sm font-bold">MXRF11</p>
                  <p className="text-sm ml-4 font-bold md:ml-0 2xl:ml-4">3 un. | R$ 100,00</p>
                </div>
                <div className="mt-1 ml-2 text-xs">
                  <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center mb-5 md:flex-col lg:flex-row">
              <div className="md:w-full lg:w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                <PieChartIcon className="w-6 h-6 " />
              </div>
              <div className="flex flex-col text-gray-700 w-full">
                <div className="flex flex-row md:flex-col 2xl:flex-row ml-2 align-center justify-between md:justify-start lg:justify-between">
                  <p className="text-sm font-bold">MXRF11</p>
                  <p className="text-sm ml-4 font-bold md:ml-0 2xl:ml-4">3 un. | R$ 100,00</p>
                </div>
                <div className="mt-1 ml-2 text-xs">
                  <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
        <div className="h-1/3  flex flex-col mb-3 ">
          <div className="flex">
            <BookmarkIcon className="w-6 h-6 mr-5" />
            <p className=" font-bold text-sm">
              Maiores Altas
            </p>
          </div>
          <Separator className="my-4" />
          <ScrollArea className="w-full rounded-md px-4 flex flex-col">
            <div className="flex flex-row items-center mb-5 md:flex-col lg:flex-row">
              <div className="md:w-full lg:w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                <PieChartIcon className="w-6 h-6 " />
              </div>
              <div className="flex flex-col text-gray-700 w-full">
                <div className="ml-2 align-center justify-between md:justify-start lg:justify-between">
                  <p className="text-sm font-bold">MXRF11</p>
                </div>
                <p className="text-sm font-bold ml-2 text-green-500">+1,5% | R$ 10,00</p>
              </div>
            </div>
          </ScrollArea>
        </div>
        <div className="h-1/3 flex flex-col">
          <div className="flex">
            <BookmarkIcon className="w-6 h-6 mr-5" />
            <p className="font-bold text-sm">
              Maiores Baixas
            </p>
          </div>
          <Separator className="my-4" />
          <ScrollArea className="w-full rounded-md px-4 flex flex-col">
            <div className="flex flex-row items-center mb-5 md:flex-col lg:flex-row">
              <div className="md:w-full lg:w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                <PieChartIcon className="w-6 h-6 " />
              </div>
              <div className="flex flex-col text-gray-700 w-full">
                <div className="ml-2 align-center justify-between md:justify-start lg:justify-between">
                  <p className="text-sm font-bold">MXRF11</p>
                </div>
                <p className="text-sm font-bold ml-2 text-red-500">-1,5% | R$ 10,00</p>
              </div>
            </div>



          </ScrollArea>
        </div>
      </div>
    </div >
  );
}
