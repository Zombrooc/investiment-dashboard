'use client'
import { MagnifyingGlassIcon, PieChartIcon, TriangleUpIcon, EyeOpenIcon, ReaderIcon, BellIcon, BookmarkIcon } from '@radix-ui/react-icons'
import { ResponsiveContainer, Tooltip, AreaChart, Area } from 'recharts';

import { columns } from "@/components/StockHistory/columns.js"
import { DataTable } from "@/components/StockHistory/data-table.js"

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

  const data = [{ "stockName": "Mus Industries", "stockSymbol": "839117", "type": "Compra", "numberOfQuotas": 3, "unitPrice": 50, "totalAmount": "$77.23" }, { "stockName": "Risus Donec PC", "stockSymbol": "206458", "type": "Venda", "numberOfQuotas": 3, "unitPrice": 22, "totalAmount": "$45.00" }, { "stockName": "Ac Facilisis LLP", "stockSymbol": "29722", "type": "Venda", "numberOfQuotas": 4, "unitPrice": 24, "totalAmount": "$17.82" }, { "stockName": "Pretium Neque LLP", "stockSymbol": "582566", "type": "Compra", "numberOfQuotas": 3, "unitPrice": 25, "totalAmount": "$53.40" }, { "stockName": "Quis Urna Ltd", "stockSymbol": "898296", "type": "Venda", "numberOfQuotas": 1, "unitPrice": 17, "totalAmount": "$56.24" }, { "stockName": "Sed Eget PC", "stockSymbol": "14154", "type": "Compra", "numberOfQuotas": 6, "unitPrice": 11, "totalAmount": "$34.48" }, { "stockName": "Nulla In Associates", "stockSymbol": "71838", "type": "Compra", "numberOfQuotas": 4, "unitPrice": 31, "totalAmount": "$48.17" }, { "stockName": "Consectetuer Corp.", "stockSymbol": "415038", "type": "Compra", "numberOfQuotas": 7, "unitPrice": 43, "totalAmount": "$74.30" }, { "stockName": "Purus Institute", "stockSymbol": "14271", "type": "Venda", "numberOfQuotas": "0", "unitPrice": 43, "totalAmount": "$13.39" }, { "stockName": "Lacinia At Incorporated", "stockSymbol": "5222", "type": "Compra", "numberOfQuotas": 5, "unitPrice": 29, "totalAmount": "$67.94" }, { "stockName": "Vulputate Posuere LLP", "stockSymbol": "88768", "type": "Venda", "numberOfQuotas": 8, "unitPrice": 60, "totalAmount": "$43.55" }, { "stockName": "Vitae LLP", "stockSymbol": "345065", "type": "Compra", "numberOfQuotas": 2, "unitPrice": 40, "totalAmount": "$87.21" }, { "stockName": "Lectus Nullam Corp.", "stockSymbol": "3777", "type": "Compra", "numberOfQuotas": 7, "unitPrice": 37, "totalAmount": "$30.88" }, { "stockName": "Vestibulum Corp.", "stockSymbol": "6386", "type": "Venda", "numberOfQuotas": 9, "unitPrice": 67, "totalAmount": "$69.35" }, { "stockName": "Ac Sem LLC", "stockSymbol": "21015", "type": "Compra", "numberOfQuotas": 2, "unitPrice": 75, "totalAmount": "$44.39" }, { "stockName": "Eget Inc.", "stockSymbol": "0922 VS", "type": "Compra", "numberOfQuotas": 4, "unitPrice": 30, "totalAmount": "$25.93" }, { "stockName": "Dui Semper Limited", "stockSymbol": "4298 HE", "type": "Compra", "numberOfQuotas": 7, "unitPrice": 48, "totalAmount": "$95.44" }, { "stockName": "Elit Industries", "stockSymbol": "58850-23149", "type": "Compra", "numberOfQuotas": 10, "unitPrice": 22, "totalAmount": "$50.96" }, { "stockName": "Urna Nec Corporation", "stockSymbol": "60107", "type": "Venda", "numberOfQuotas": 2, "unitPrice": 99, "totalAmount": "$58.48" }, { "stockName": "Mollis Integer LLC", "stockSymbol": "654344", "type": "Venda", "numberOfQuotas": 3, "unitPrice": 38, "totalAmount": "$81.09" }, { "stockName": "Sed Facilisis Vitae Foundation", "stockSymbol": "432769", "type": "Compra", "numberOfQuotas": 10, "unitPrice": 87, "totalAmount": "$16.44" }, { "stockName": "Sapien Cursus Ltd", "stockSymbol": "27-683", "type": "Venda", "numberOfQuotas": 2, "unitPrice": 40, "totalAmount": "$53.02" }, { "stockName": "Sapien Corp.", "stockSymbol": "29-302", "type": "Compra", "numberOfQuotas": 8, "unitPrice": 37, "totalAmount": "$40.25" }, { "stockName": "Porttitor Interdum LLP", "stockSymbol": "565922", "type": "Venda", "numberOfQuotas": 8, "unitPrice": 54, "totalAmount": "$78.06" }, { "stockName": "Vel Nisl Quisque Company", "stockSymbol": "S73 8JK", "type": "Compra", "numberOfQuotas": 8, "unitPrice": 52, "totalAmount": "$32.96" }, { "stockName": "Eget Odio Aliquam Corporation", "stockSymbol": "11724", "type": "Venda", "numberOfQuotas": 4, "unitPrice": 41, "totalAmount": "$71.04" }, { "stockName": "Pharetra Felis Foundation", "stockSymbol": "61808", "type": "Venda", "numberOfQuotas": 1, "unitPrice": 94, "totalAmount": "$21.09" }, { "stockName": "Vulputate Company", "stockSymbol": "71282", "type": "Venda", "numberOfQuotas": 7, "unitPrice": 20, "totalAmount": "$39.26" }, { "stockName": "Curabitur Massa Industries", "stockSymbol": "A1H 6YT", "type": "Compra", "numberOfQuotas": 7, "unitPrice": 74, "totalAmount": "$68.55" }, { "stockName": "Aliquam Fringilla Foundation", "stockSymbol": "21612-823", "type": "Compra", "numberOfQuotas": 7, "unitPrice": 59, "totalAmount": "$26.02" }, { "stockName": "Urna Incorporated", "stockSymbol": "22633-365", "type": "Compra", "numberOfQuotas": 2, "unitPrice": 20, "totalAmount": "$92.26" }, { "stockName": "Diam Proin PC", "stockSymbol": "9732", "type": "Venda", "numberOfQuotas": 5, "unitPrice": 57, "totalAmount": "$11.26" }, { "stockName": "Cras Vehicula Aliquet Inc.", "stockSymbol": "641568", "type": "Venda", "numberOfQuotas": 2, "unitPrice": 57, "totalAmount": "$70.39" }, { "stockName": "Egestas Nunc LLP", "stockSymbol": "4470", "type": "Venda", "numberOfQuotas": 5, "unitPrice": 99, "totalAmount": "$50.32" }, { "stockName": "Venenatis Vel Faucibus Corporation", "stockSymbol": "25338", "type": "Compra", "numberOfQuotas": "0", "unitPrice": 16, "totalAmount": "$13.18" }, { "stockName": "Facilisis Vitae Incorporated", "stockSymbol": "410744", "type": "Venda", "numberOfQuotas": 9, "unitPrice": 47, "totalAmount": "$37.51" }, { "stockName": "Mauris Ipsum Corporation", "stockSymbol": "30704", "type": "Venda", "numberOfQuotas": 4, "unitPrice": 44, "totalAmount": "$37.36" }, { "stockName": "Diam Sed PC", "stockSymbol": "829206", "type": "Venda", "numberOfQuotas": 8, "unitPrice": 93, "totalAmount": "$26.78" }, { "stockName": "Mattis Limited", "stockSymbol": "433153", "type": "Venda", "numberOfQuotas": 5, "unitPrice": 98, "totalAmount": "$88.01" }, { "stockName": "Vestibulum PC", "stockSymbol": "KJ21 4WB", "type": "Venda", "numberOfQuotas": 1, "unitPrice": 24, "totalAmount": "$52.19" }, { "stockName": "Sit Amet Corp.", "stockSymbol": "26949", "type": "Compra", "numberOfQuotas": 6, "unitPrice": 27, "totalAmount": "$12.93" }, { "stockName": "Sit Amet Risus LLC", "stockSymbol": "11-33", "type": "Compra", "numberOfQuotas": 8, "unitPrice": 27, "totalAmount": "$96.36" }, { "stockName": "Odio Aliquam Associates", "stockSymbol": "9336", "type": "Compra", "numberOfQuotas": 1, "unitPrice": 88, "totalAmount": "$59.56" }, { "stockName": "Risus Donec Egestas Inc.", "stockSymbol": "80555-217", "type": "Venda", "numberOfQuotas": 5, "unitPrice": 35, "totalAmount": "$77.92" }, { "stockName": "Hendrerit Consectetuer Inc.", "stockSymbol": "626993", "type": "Compra", "numberOfQuotas": 4, "unitPrice": 44, "totalAmount": "$75.23" }, { "stockName": "Mi Inc.", "stockSymbol": "51406", "type": "Compra", "numberOfQuotas": "0", "unitPrice": 51, "totalAmount": "$38.38" }, { "stockName": "Eget Venenatis LLP", "stockSymbol": "34919748", "type": "Compra", "numberOfQuotas": 7, "unitPrice": 61, "totalAmount": "$20.12" }, { "stockName": "Donec Elementum Industries", "stockSymbol": "5205", "type": "Venda", "numberOfQuotas": 5, "unitPrice": 11, "totalAmount": "$14.46" }, { "stockName": "Lectus Ante LLC", "stockSymbol": "470781", "type": "Venda", "numberOfQuotas": 1, "unitPrice": 82, "totalAmount": "$73.38" }, { "stockName": "Sagittis Lobortis Limited", "stockSymbol": "11314", "type": "Venda", "numberOfQuotas": "0", "unitPrice": 53, "totalAmount": "$57.81" }, { "stockName": "Aliquam Foundation", "stockSymbol": "97546", "type": "Compra", "numberOfQuotas": 2, "unitPrice": 61, "totalAmount": "$29.56" }, { "stockName": "Eu Tellus PC", "stockSymbol": "876467", "type": "Compra", "numberOfQuotas": 9, "unitPrice": 24, "totalAmount": "$86.51" }, { "stockName": "Pretium Et Inc.", "stockSymbol": "84739", "type": "Compra", "numberOfQuotas": 1, "unitPrice": 66, "totalAmount": "$62.75" }, { "stockName": "Ipsum Dolor Sit Corporation", "stockSymbol": "287569", "type": "Venda", "numberOfQuotas": 3, "unitPrice": 56, "totalAmount": "$21.85" }, { "stockName": "Ac Mattis Ornare Limited", "stockSymbol": "735678", "type": "Venda", "numberOfQuotas": 6, "unitPrice": 99, "totalAmount": "$44.94" }, { "stockName": "Pede Praesent Inc.", "stockSymbol": "7831", "type": "Compra", "numberOfQuotas": 6, "unitPrice": 32, "totalAmount": "$90.91" }, { "stockName": "Class Aptent Inc.", "stockSymbol": "62227", "type": "Venda", "numberOfQuotas": 9, "unitPrice": 34, "totalAmount": "$89.66" }, { "stockName": "Eget Laoreet LLC", "stockSymbol": "8312", "type": "Venda", "numberOfQuotas": 8, "unitPrice": 90, "totalAmount": "$24.17" }, { "stockName": "Turpis Aliquam Corporation", "stockSymbol": "55303-87074", "type": "Compra", "numberOfQuotas": 10, "unitPrice": 24, "totalAmount": "$35.77" }, { "stockName": "Feugiat Nec Associates", "stockSymbol": "824813", "type": "Compra", "numberOfQuotas": 7, "unitPrice": 97, "totalAmount": "$83.24" }, { "stockName": "Euismod Mauris Corp.", "stockSymbol": "255575", "type": "Compra", "numberOfQuotas": 7, "unitPrice": 38, "totalAmount": "$41.06" }, { "stockName": "Ultrices Posuere Cubilia Associates", "stockSymbol": "84776", "type": "Venda", "numberOfQuotas": 3, "unitPrice": 89, "totalAmount": "$45.37" }, { "stockName": "Lobortis Ltd", "stockSymbol": "25143-274", "type": "Compra", "numberOfQuotas": "0", "unitPrice": 87, "totalAmount": "$73.91" }, { "stockName": "Orci Donec Industries", "stockSymbol": "397141", "type": "Venda", "numberOfQuotas": 8, "unitPrice": 46, "totalAmount": "$41.64" }, { "stockName": "Magna Consulting", "stockSymbol": "25-177", "type": "Venda", "numberOfQuotas": 9, "unitPrice": 49, "totalAmount": "$79.99" }, { "stockName": "Aliquet Diam Sed Incorporated", "stockSymbol": "7743", "type": "Compra", "numberOfQuotas": 5, "unitPrice": 28, "totalAmount": "$11.50" }, { "stockName": "Placerat Velit Quisque Industries", "stockSymbol": "I1 2XO", "type": "Compra", "numberOfQuotas": 9, "unitPrice": 91, "totalAmount": "$91.81" }, { "stockName": "Lobortis Class Limited", "stockSymbol": "62-684", "type": "Venda", "numberOfQuotas": 4, "unitPrice": 45, "totalAmount": "$54.77" }, { "stockName": "Egestas Urna Institute", "stockSymbol": "55107", "type": "Compra", "numberOfQuotas": 3, "unitPrice": 52, "totalAmount": "$64.19" }, { "stockName": "Laoreet Corporation", "stockSymbol": "16764", "type": "Compra", "numberOfQuotas": 2, "unitPrice": 84, "totalAmount": "$27.00" }, { "stockName": "Luctus Et LLP", "stockSymbol": "25658", "type": "Compra", "numberOfQuotas": 3, "unitPrice": 26, "totalAmount": "$44.25" }, { "stockName": "Fermentum Convallis Ligula Incorporated", "stockSymbol": "65856-315", "type": "Compra", "numberOfQuotas": 7, "unitPrice": 35, "totalAmount": "$41.72" }, { "stockName": "A Enim Institute", "stockSymbol": "SE33 0IE", "type": "Compra", "numberOfQuotas": 1, "unitPrice": 79, "totalAmount": "$92.57" }, { "stockName": "Ac Fermentum LLC", "stockSymbol": "442598", "type": "Venda", "numberOfQuotas": 1, "unitPrice": 56, "totalAmount": "$72.25" }, { "stockName": "Elit Fermentum Ltd", "stockSymbol": "4563", "type": "Compra", "numberOfQuotas": 4, "unitPrice": 56, "totalAmount": "$68.41" }, { "stockName": "Donec Felis Orci Limited", "stockSymbol": "8312", "type": "Compra", "numberOfQuotas": 9, "unitPrice": 37, "totalAmount": "$98.16" }, { "stockName": "Risus A Corp.", "stockSymbol": "74255", "type": "Compra", "numberOfQuotas": 4, "unitPrice": 74, "totalAmount": "$44.66" }, { "stockName": "Tempor Ltd", "stockSymbol": "958818", "type": "Compra", "numberOfQuotas": 4, "unitPrice": 13, "totalAmount": "$16.20" }, { "stockName": "Vulputate Ullamcorper Corporation", "stockSymbol": "4666-1476", "type": "Compra", "numberOfQuotas": 1, "unitPrice": 75, "totalAmount": "$13.22" }, { "stockName": "Justo Nec Corp.", "stockSymbol": "2858", "type": "Compra", "numberOfQuotas": 1, "unitPrice": 59, "totalAmount": "$49.92" }, { "stockName": "Sagittis Placerat LLP", "stockSymbol": "8122", "type": "Compra", "numberOfQuotas": 5, "unitPrice": 41, "totalAmount": "$65.80" }, { "stockName": "Arcu Sed Inc.", "stockSymbol": "2173", "type": "Compra", "numberOfQuotas": 7, "unitPrice": 77, "totalAmount": "$95.92" }, { "stockName": "Nibh Donec Est Ltd", "stockSymbol": "575378", "type": "Venda", "numberOfQuotas": 7, "unitPrice": 49, "totalAmount": "$26.17" }, { "stockName": "Augue Associates", "stockSymbol": "46-692", "type": "Compra", "numberOfQuotas": 9, "unitPrice": 46, "totalAmount": "$93.05" }, { "stockName": "Augue Sed Molestie Institute", "stockSymbol": "38579", "type": "Compra", "numberOfQuotas": 4, "unitPrice": 97, "totalAmount": "$83.67" }, { "stockName": "Neque Foundation", "stockSymbol": "48753", "type": "Compra", "numberOfQuotas": 6, "unitPrice": 57, "totalAmount": "$81.91" }, { "stockName": "Vulputate Posuere Industries", "stockSymbol": "925425", "type": "Venda", "numberOfQuotas": 5, "unitPrice": 71, "totalAmount": "$28.20" }, { "stockName": "Sagittis Semper Incorporated", "stockSymbol": "5113", "type": "Compra", "numberOfQuotas": "0", "unitPrice": 76, "totalAmount": "$43.84" }, { "stockName": "Ullamcorper Duis Institute", "stockSymbol": "12985", "type": "Compra", "numberOfQuotas": 10, "unitPrice": 92, "totalAmount": "$92.34" }, { "stockName": "Neque Sed Associates", "stockSymbol": "22078", "type": "Compra", "numberOfQuotas": 1, "unitPrice": 42, "totalAmount": "$39.78" }, { "stockName": "Eleifend Non Ltd", "stockSymbol": "8299", "type": "Venda", "numberOfQuotas": 7, "unitPrice": 93, "totalAmount": "$95.33" }, { "stockName": "Viverra Donec Tempus Company", "stockSymbol": "26413", "type": "Compra", "numberOfQuotas": 6, "unitPrice": 97, "totalAmount": "$18.74" }, { "stockName": "Lectus Ante Dictum LLP", "stockSymbol": "T2J 0L4", "type": "Venda", "numberOfQuotas": 4, "unitPrice": 72, "totalAmount": "$57.25" }, { "stockName": "Sit Corp.", "stockSymbol": "33851", "type": "Venda", "numberOfQuotas": 8, "unitPrice": 50, "totalAmount": "$33.47" }, { "stockName": "Condimentum Institute", "stockSymbol": "333651", "type": "Compra", "numberOfQuotas": 7, "unitPrice": 40, "totalAmount": "$18.80" }, { "stockName": "Mi Fringilla Limited", "stockSymbol": "2305", "type": "Venda", "numberOfQuotas": 8, "unitPrice": 73, "totalAmount": "$29.87" }, { "stockName": "Molestie Orci Tincidunt LLC", "stockSymbol": "6786", "type": "Venda", "numberOfQuotas": 1, "unitPrice": 42, "totalAmount": "$31.86" }, { "stockName": "Ut LLC", "stockSymbol": "372785", "type": "Venda", "numberOfQuotas": 7, "unitPrice": 22, "totalAmount": "$80.21" }, { "stockName": "Eu Enim Etiam Corporation", "stockSymbol": "G68 9JJ", "type": "Compra", "numberOfQuotas": 6, "unitPrice": 59, "totalAmount": "$21.60" }, { "stockName": "Tincidunt Nunc Limited", "stockSymbol": "27276", "type": "Compra", "numberOfQuotas": 7, "unitPrice": 86, "totalAmount": "$63.40" }]

  return (
    <div className="flex flex-col lg:flex-row">
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
        <div>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
      <div className="h-screen max-w-full  p-7 flex flex-col lg:w-1/4 lg:h-screen">
        <div className="h-1/3 flex flex-col mb-4 ">
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
                <div className="flex flex-row lg:flex-col 2xl:flex-row ml-2 align-center justify-between lg:justify-start lg:justify-between">
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
        <div className="h-1/3  flex flex-col mb-4 ">
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
