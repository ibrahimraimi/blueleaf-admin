import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import StoreSwitcher from "@/components/dashboard/store-switcher";
import { PageHeader } from "@/components/dashboard/page-header";

import prismadb from "@/lib/prisma";

export async function MainNav() {
  const { userId } = auth();

  if (!userId) {
    redirect("/signin");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores} />
        <PageHeader className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
}
