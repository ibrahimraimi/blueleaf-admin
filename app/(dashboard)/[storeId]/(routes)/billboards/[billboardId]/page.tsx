import { format } from "date-fns";

import prismadb from "@/lib/prisma";
import { BillboardClient } from "@/components/dashboard/billboards/client";
import { BillboardColumn } from "@/components/dashboard/billboards/columns";

export default async function BillboardsPage({
  params,
}: {
  params: { storeId: string };
}) {
  const billboard = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBillboards: BillboardColumn[] = billboard.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
}
