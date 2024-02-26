"use client"

export const columns = [
  {
    accessorKey: "stockSymbol",
    header: "Símbolo do Papel",
  },
  {
    accessorKey: "stockName",
    header: "Nome do Papel",
  },
  {
    accessorKey: "type",
    header: "Tipo",
  },
  {
    accessorKey: "numberOfQuotas",
    header: "Nº de Cotas",
  },
  {
    accessorKey: "unitPrice",
    header: "Valor Unitário",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("unitPrice"))
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(amount)
 
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "totalAmount",
    header: "Valor Total",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalAmount"))
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(amount)
 
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
]
