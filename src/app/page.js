'use client'
import Image from "next/image";
import { MagnifyingGlassIcon, PlusIcon, PieChartIcon, ChevronUpIcon, TriangleUpIcon, EyeOpenIcon, ReaderIcon, BellIcon, BookmarkIcon } from '@radix-ui/react-icons'
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"


export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="sm:w-full lg:w-screen bg-slate-100 p-6">
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
            <p className="leading-7 font-bold text-lg">
              Visão Geral
            </p>
            <p className="leading-7 text-sm">
              Ver Tudo
            </p>
          </div>
          <div className="grid sm:grid-cols-1 gap-4 mt-5 lg:grid-cols-3">

            <Card className="bg-blue-600">
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
                    <p className="text-xl font-bold mt-2 flex flex-row items-center">R$ 100,00 <TriangleUpIcon className="stroke-[4px] ml-2 text-base" /></p>
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
                    <p className="text-xl font-bold mt-2 flex flex-row items-center">R$ 100,00 <TriangleUpIcon className="stroke-[4px] ml-2 text-base" /></p>
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
      <div className="w-full md:w-1/4 lg:h-screen p-7 flex flex-col">
        <div className="h-full bg-red-500 flex flex-col mb-3">
          {/* <p> Minhas ações </p> */}
          <div className="flex">
            <BookmarkIcon className="w-6 h-6 mr-5" />
            <p className="leading-7 font-bold text-lg">
              Favoritos
            </p>
            {/* <p className="leading-7 text-sm">
                Valor Total: <span className="text-xl font-bold">R$ 200</span>
              </p> */}
          </div>
          <Separator className="my-4" />
          <ScrollArea className="h-full w-full rounded-md px-4 flex flex-col">
            <div className="flex flex-row items center mb-5 md:flex-col lg:flex-row">
              <div className="md:w-full lg:w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                <PieChartIcon className="w-6 h-6 " />
              </div>
              <div className="flex flex-col text-gray-700 w-full">
                <div className="flex flex-row md:flex-col 2xl:flex-row ml-2 align-center justify-between md:justify-start lg:justify-between">
                  <p className="text-sm font-bold">MXRF11</p>
                  <p className="text-sm ml-4 font-bold md:ml-0 2xl:ml-4">3 un. | R$ 100,00</p>
                </div>
                <div className="mt-1 ml-2 text-sm">
                  <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                </div>
              </div>
            </div>
            {/* <div className="mb-5">
              <div className="flex flex-row items-center">
                <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                  <PieChartIcon className="w-6 h-6 " />
                </div>
                <div className="flex flex-col text-gray-700 w-full">
                  <div className="flex flex-row ml-2 align-center  justify-between">
                    <p className="text-sm font-bold">MXRF11</p>
                    <p className="text-sm font-bold ml-4">3 un. | R$ 100,00</p>
                  </div>
                  <div className="mt-1 ml-2 text-sm">
                    <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex flex-row items-center">
                <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                  <PieChartIcon className="w-6 h-6 " />
                </div>
                <div className="flex flex-col text-gray-700 w-full">
                  <div className="flex flex-row ml-2 align-center  justify-between">
                    <p className="text-sm font-bold">MXRF11</p>
                    <p className="text-sm font-bold ml-4">3 un. | R$ 100,00</p>
                  </div>
                  <div className="mt-1 ml-2 text-sm">
                    <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex flex-row items-center">
                <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                  <PieChartIcon className="w-6 h-6 " />
                </div>
                <div className="flex flex-col text-gray-700 w-full">
                  <div className="flex flex-row ml-2 align-center  justify-between">
                    <p className="text-sm font-bold">MXRF11</p>
                    <p className="text-sm font-bold ml-4">3 un. | R$ 100,00</p>
                  </div>
                  <div className="mt-1 ml-2 text-sm">
                    <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex flex-row items-center">
                <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                  <PieChartIcon className="w-6 h-6 " />
                </div>
                <div className="flex flex-col text-gray-700 w-full">
                  <div className="flex flex-row ml-2 align-center  justify-between">
                    <p className="text-sm font-bold">MXRF11</p>
                    <p className="text-sm font-bold ml-4">3 un. | R$ 100,00</p>
                  </div>
                  <div className="mt-1 ml-2 text-sm">
                    <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                  </div>
                </div>
              </div>
            </div> */}
          </ScrollArea>

          {/* <div className="mb-5">
            <div className="flex justify-between">
              <p className="leading-7 font-bold text-lg">
                Maiores Altas
              </p>
            </div>
            <Separator className="my-4" />
            <ScrollArea className="h-full w-full rounded-md px-4 flex flex-col">
              <div className="mb-7">
                <div className="flex flex-row items-center">
                  <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                    <PieChartIcon className="w-6 h-6 " />
                  </div>
                  <div className="flex flex-col text-gray-700 w-full">
                    <div className="flex flex-row ml-2 align-center  justify-between">
                      <p className="text-sm font-bold">MXRF11</p>
                      <p className="text-sm font-bold ml-4 text-green-500">+1,5% | R$ 10,00</p>
                    </div>
                    <div className="mt-1 ml-2 text-sm">
                      <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-7">
                <div className="flex flex-row items-center">
                  <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                    <PieChartIcon className="w-6 h-6 " />
                  </div>
                  <div className="flex flex-col text-gray-700 w-full">
                    <div className="flex flex-row ml-2 align-center  justify-between">
                      <p className="text-sm font-bold">MXRF11</p>
                      <p className="text-sm font-bold ml-4 text-green-500">+1,5% | R$ 10,00</p>
                    </div>
                    <div className="mt-1 ml-2 text-sm">
                      <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-7">
                <div className="flex flex-row items-center">
                  <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                    <PieChartIcon className="w-6 h-6 " />
                  </div>
                  <div className="flex flex-col text-gray-700 w-full">
                    <div className="flex flex-row ml-2 align-center  justify-between">
                      <p className="text-sm font-bold">MXRF11</p>
                      <p className="text-sm font-bold ml-4 text-green-500">+1,5% | R$ 10,00</p>
                    </div>
                    <div className="mt-1 ml-2 text-sm">
                      <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </div>

          <div className="">
            <div className="flex justify-between">
              <p className="leading-7 font-bold text-lg">
                Maiores Baixas
              </p>
            </div>
            <Separator className="my-4" />
            <ScrollArea className="h-full w-full rounded-md px-4 flex flex-col">
              <div className="mb-7">
                <div className="flex flex-row items-center">
                  <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                    <PieChartIcon className="w-6 h-6 " />
                  </div>
                  <div className="flex flex-col text-gray-700 w-full">
                    <div className="flex flex-row ml-2 align-center  justify-between">
                      <p className="text-sm font-bold">MXRF11</p>
                      <p className="text-sm font-bold ml-4 text-red-500">-1,5% | R$ 10,00</p>
                    </div>
                    <div className="mt-1 ml-2 text-sm">
                      <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-7">
                <div className="flex flex-row items-center">
                  <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                    <PieChartIcon className="w-6 h-6 " />
                  </div>
                  <div className="flex flex-col text-gray-700 w-full">
                    <div className="flex flex-row ml-2 align-center  justify-between">
                      <p className="text-sm font-bold">MXRF11</p>
                      <p className="text-sm font-bold ml-4 text-red-500">-1,5% | R$ 10,00</p>
                    </div>
                    <div className="mt-1 ml-2 text-sm">
                      <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-7">
                <div className="flex flex-row items-center">
                  <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                    <PieChartIcon className="w-6 h-6 " />
                  </div>
                  <div className="flex flex-col text-gray-700 w-full">
                    <div className="flex flex-row ml-2 align-center  justify-between">
                      <p className="text-sm font-bold">MXRF11</p>
                      <p className="text-sm font-bold ml-4 text-red-500">-1,5% | R$ 10,00</p>
                    </div>
                    <div className="mt-1 ml-2 text-sm">
                      <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                    </div>
                  </div>
                </div>
              </div>

            </ScrollArea>
          </div> */}
        </div>
        <div className="h-full bg-purple-500 flex flex-col mb-3">
          {/* <p> Minhas ações </p> */}
          <div className="flex">
            <BookmarkIcon className="w-6 h-6 mr-5" />
            <p className="leading-7 font-bold text-lg">
              Favoritos
            </p>
            {/* <p className="leading-7 text-sm">
                Valor Total: <span className="text-xl font-bold">R$ 200</span>
              </p> */}
          </div>
          <Separator className="my-4" />
          <ScrollArea className="h-full w-full rounded-md px-4 flex flex-col">
            <div className="flex flex-row items center mb-5 md:flex-col lg:flex-row">
              <div className="md:w-full lg:w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                <PieChartIcon className="w-6 h-6 " />
              </div>
              <div className="flex flex-col text-gray-700 w-full">
                <div className="flex flex-row md:flex-col 2xl:flex-row ml-2 align-center justify-between md:justify-start lg:justify-between">
                  <p className="text-sm font-bold">MXRF11</p>
                  <p className="text-sm ml-4 font-bold md:ml-0 2xl:ml-4">3 un. | R$ 100,00</p>
                </div>
                <div className="mt-1 ml-2 text-sm">
                  <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                </div>
              </div>
            </div>
            {/* <div className="mb-5">
              <div className="flex flex-row items-center">
                <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                  <PieChartIcon className="w-6 h-6 " />
                </div>
                <div className="flex flex-col text-gray-700 w-full">
                  <div className="flex flex-row ml-2 align-center  justify-between">
                    <p className="text-sm font-bold">MXRF11</p>
                    <p className="text-sm font-bold ml-4">3 un. | R$ 100,00</p>
                  </div>
                  <div className="mt-1 ml-2 text-sm">
                    <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex flex-row items-center">
                <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                  <PieChartIcon className="w-6 h-6 " />
                </div>
                <div className="flex flex-col text-gray-700 w-full">
                  <div className="flex flex-row ml-2 align-center  justify-between">
                    <p className="text-sm font-bold">MXRF11</p>
                    <p className="text-sm font-bold ml-4">3 un. | R$ 100,00</p>
                  </div>
                  <div className="mt-1 ml-2 text-sm">
                    <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex flex-row items-center">
                <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                  <PieChartIcon className="w-6 h-6 " />
                </div>
                <div className="flex flex-col text-gray-700 w-full">
                  <div className="flex flex-row ml-2 align-center  justify-between">
                    <p className="text-sm font-bold">MXRF11</p>
                    <p className="text-sm font-bold ml-4">3 un. | R$ 100,00</p>
                  </div>
                  <div className="mt-1 ml-2 text-sm">
                    <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex flex-row items-center">
                <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                  <PieChartIcon className="w-6 h-6 " />
                </div>
                <div className="flex flex-col text-gray-700 w-full">
                  <div className="flex flex-row ml-2 align-center  justify-between">
                    <p className="text-sm font-bold">MXRF11</p>
                    <p className="text-sm font-bold ml-4">3 un. | R$ 100,00</p>
                  </div>
                  <div className="mt-1 ml-2 text-sm">
                    <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                  </div>
                </div>
              </div>
            </div> */}
          </ScrollArea>

          {/* <div className="mb-5">
            <div className="flex justify-between">
              <p className="leading-7 font-bold text-lg">
                Maiores Altas
              </p>
            </div>
            <Separator className="my-4" />
            <ScrollArea className="h-full w-full rounded-md px-4 flex flex-col">
              <div className="mb-7">
                <div className="flex flex-row items-center">
                  <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                    <PieChartIcon className="w-6 h-6 " />
                  </div>
                  <div className="flex flex-col text-gray-700 w-full">
                    <div className="flex flex-row ml-2 align-center  justify-between">
                      <p className="text-sm font-bold">MXRF11</p>
                      <p className="text-sm font-bold ml-4 text-green-500">+1,5% | R$ 10,00</p>
                    </div>
                    <div className="mt-1 ml-2 text-sm">
                      <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-7">
                <div className="flex flex-row items-center">
                  <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                    <PieChartIcon className="w-6 h-6 " />
                  </div>
                  <div className="flex flex-col text-gray-700 w-full">
                    <div className="flex flex-row ml-2 align-center  justify-between">
                      <p className="text-sm font-bold">MXRF11</p>
                      <p className="text-sm font-bold ml-4 text-green-500">+1,5% | R$ 10,00</p>
                    </div>
                    <div className="mt-1 ml-2 text-sm">
                      <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-7">
                <div className="flex flex-row items-center">
                  <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                    <PieChartIcon className="w-6 h-6 " />
                  </div>
                  <div className="flex flex-col text-gray-700 w-full">
                    <div className="flex flex-row ml-2 align-center  justify-between">
                      <p className="text-sm font-bold">MXRF11</p>
                      <p className="text-sm font-bold ml-4 text-green-500">+1,5% | R$ 10,00</p>
                    </div>
                    <div className="mt-1 ml-2 text-sm">
                      <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </div>

          <div className="">
            <div className="flex justify-between">
              <p className="leading-7 font-bold text-lg">
                Maiores Baixas
              </p>
            </div>
            <Separator className="my-4" />
            <ScrollArea className="h-full w-full rounded-md px-4 flex flex-col">
              <div className="mb-7">
                <div className="flex flex-row items-center">
                  <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                    <PieChartIcon className="w-6 h-6 " />
                  </div>
                  <div className="flex flex-col text-gray-700 w-full">
                    <div className="flex flex-row ml-2 align-center  justify-between">
                      <p className="text-sm font-bold">MXRF11</p>
                      <p className="text-sm font-bold ml-4 text-red-500">-1,5% | R$ 10,00</p>
                    </div>
                    <div className="mt-1 ml-2 text-sm">
                      <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-7">
                <div className="flex flex-row items-center">
                  <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                    <PieChartIcon className="w-6 h-6 " />
                  </div>
                  <div className="flex flex-col text-gray-700 w-full">
                    <div className="flex flex-row ml-2 align-center  justify-between">
                      <p className="text-sm font-bold">MXRF11</p>
                      <p className="text-sm font-bold ml-4 text-red-500">-1,5% | R$ 10,00</p>
                    </div>
                    <div className="mt-1 ml-2 text-sm">
                      <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-7">
                <div className="flex flex-row items-center">
                  <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                    <PieChartIcon className="w-6 h-6 " />
                  </div>
                  <div className="flex flex-col text-gray-700 w-full">
                    <div className="flex flex-row ml-2 align-center  justify-between">
                      <p className="text-sm font-bold">MXRF11</p>
                      <p className="text-sm font-bold ml-4 text-red-500">-1,5% | R$ 10,00</p>
                    </div>
                    <div className="mt-1 ml-2 text-sm">
                      <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                    </div>
                  </div>
                </div>
              </div>

            </ScrollArea>
          </div> */}
        </div>
        <div className="h-full bg-purple-500 flex flex-col mb-3">
          {/* <p> Minhas ações </p> */}
          <div className="flex">
            <BookmarkIcon className="w-6 h-6 mr-5" />
            <p className="leading-7 font-bold text-lg">
              Favoritos
            </p>
            {/* <p className="leading-7 text-sm">
                Valor Total: <span className="text-xl font-bold">R$ 200</span>
              </p> */}
          </div>
          <Separator className="my-4" />
          <ScrollArea className="h-full w-full rounded-md px-4 flex flex-col">
            <div className="flex flex-row items center mb-5 md:flex-col lg:flex-row">
              <div className="md:w-full lg:w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                <PieChartIcon className="w-6 h-6 " />
              </div>
              <div className="flex flex-col text-gray-700 w-full">
                <div className="flex flex-row md:flex-col 2xl:flex-row ml-2 align-center justify-between md:justify-start lg:justify-between">
                  <p className="text-sm font-bold">MXRF11</p>
                  <p className="text-sm ml-4 font-bold md:ml-0 2xl:ml-4">3 un. | R$ 100,00</p>
                </div>
                <div className="mt-1 ml-2 text-sm">
                  <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                </div>
              </div>
            </div>
            {/* <div className="mb-5">
              <div className="flex flex-row items-center">
                <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                  <PieChartIcon className="w-6 h-6 " />
                </div>
                <div className="flex flex-col text-gray-700 w-full">
                  <div className="flex flex-row ml-2 align-center  justify-between">
                    <p className="text-sm font-bold">MXRF11</p>
                    <p className="text-sm font-bold ml-4">3 un. | R$ 100,00</p>
                  </div>
                  <div className="mt-1 ml-2 text-sm">
                    <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex flex-row items-center">
                <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                  <PieChartIcon className="w-6 h-6 " />
                </div>
                <div className="flex flex-col text-gray-700 w-full">
                  <div className="flex flex-row ml-2 align-center  justify-between">
                    <p className="text-sm font-bold">MXRF11</p>
                    <p className="text-sm font-bold ml-4">3 un. | R$ 100,00</p>
                  </div>
                  <div className="mt-1 ml-2 text-sm">
                    <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex flex-row items-center">
                <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                  <PieChartIcon className="w-6 h-6 " />
                </div>
                <div className="flex flex-col text-gray-700 w-full">
                  <div className="flex flex-row ml-2 align-center  justify-between">
                    <p className="text-sm font-bold">MXRF11</p>
                    <p className="text-sm font-bold ml-4">3 un. | R$ 100,00</p>
                  </div>
                  <div className="mt-1 ml-2 text-sm">
                    <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex flex-row items-center">
                <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                  <PieChartIcon className="w-6 h-6 " />
                </div>
                <div className="flex flex-col text-gray-700 w-full">
                  <div className="flex flex-row ml-2 align-center  justify-between">
                    <p className="text-sm font-bold">MXRF11</p>
                    <p className="text-sm font-bold ml-4">3 un. | R$ 100,00</p>
                  </div>
                  <div className="mt-1 ml-2 text-sm">
                    <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                  </div>
                </div>
              </div>
            </div> */}
          </ScrollArea>

          {/* <div className="mb-5">
            <div className="flex justify-between">
              <p className="leading-7 font-bold text-lg">
                Maiores Altas
              </p>
            </div>
            <Separator className="my-4" />
            <ScrollArea className="h-full w-full rounded-md px-4 flex flex-col">
              <div className="mb-7">
                <div className="flex flex-row items-center">
                  <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                    <PieChartIcon className="w-6 h-6 " />
                  </div>
                  <div className="flex flex-col text-gray-700 w-full">
                    <div className="flex flex-row ml-2 align-center  justify-between">
                      <p className="text-sm font-bold">MXRF11</p>
                      <p className="text-sm font-bold ml-4 text-green-500">+1,5% | R$ 10,00</p>
                    </div>
                    <div className="mt-1 ml-2 text-sm">
                      <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-7">
                <div className="flex flex-row items-center">
                  <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                    <PieChartIcon className="w-6 h-6 " />
                  </div>
                  <div className="flex flex-col text-gray-700 w-full">
                    <div className="flex flex-row ml-2 align-center  justify-between">
                      <p className="text-sm font-bold">MXRF11</p>
                      <p className="text-sm font-bold ml-4 text-green-500">+1,5% | R$ 10,00</p>
                    </div>
                    <div className="mt-1 ml-2 text-sm">
                      <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-7">
                <div className="flex flex-row items-center">
                  <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                    <PieChartIcon className="w-6 h-6 " />
                  </div>
                  <div className="flex flex-col text-gray-700 w-full">
                    <div className="flex flex-row ml-2 align-center  justify-between">
                      <p className="text-sm font-bold">MXRF11</p>
                      <p className="text-sm font-bold ml-4 text-green-500">+1,5% | R$ 10,00</p>
                    </div>
                    <div className="mt-1 ml-2 text-sm">
                      <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </div>

          <div className="">
            <div className="flex justify-between">
              <p className="leading-7 font-bold text-lg">
                Maiores Baixas
              </p>
            </div>
            <Separator className="my-4" />
            <ScrollArea className="h-full w-full rounded-md px-4 flex flex-col">
              <div className="mb-7">
                <div className="flex flex-row items-center">
                  <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                    <PieChartIcon className="w-6 h-6 " />
                  </div>
                  <div className="flex flex-col text-gray-700 w-full">
                    <div className="flex flex-row ml-2 align-center  justify-between">
                      <p className="text-sm font-bold">MXRF11</p>
                      <p className="text-sm font-bold ml-4 text-red-500">-1,5% | R$ 10,00</p>
                    </div>
                    <div className="mt-1 ml-2 text-sm">
                      <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-7">
                <div className="flex flex-row items-center">
                  <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                    <PieChartIcon className="w-6 h-6 " />
                  </div>
                  <div className="flex flex-col text-gray-700 w-full">
                    <div className="flex flex-row ml-2 align-center  justify-between">
                      <p className="text-sm font-bold">MXRF11</p>
                      <p className="text-sm font-bold ml-4 text-red-500">-1,5% | R$ 10,00</p>
                    </div>
                    <div className="mt-1 ml-2 text-sm">
                      <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-7">
                <div className="flex flex-row items-center">
                  <div className="min-w-10 min-h-10 rounded-lg flex items-center justify-center text-blue-600 bg-slate-100	">
                    <PieChartIcon className="w-6 h-6 " />
                  </div>
                  <div className="flex flex-col text-gray-700 w-full">
                    <div className="flex flex-row ml-2 align-center  justify-between">
                      <p className="text-sm font-bold">MXRF11</p>
                      <p className="text-sm font-bold ml-4 text-red-500">-1,5% | R$ 10,00</p>
                    </div>
                    <div className="mt-1 ml-2 text-sm">
                      <p className=""><span className="font-bold">10%</span> dos investimentos</p>
                    </div>
                  </div>
                </div>
              </div>

            </ScrollArea>
          </div> */}
        </div>

      </div>
    </div >
  );
}
