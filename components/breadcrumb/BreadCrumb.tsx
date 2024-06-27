"use client";
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';
import React from "react";
import { usePathname } from "next/navigation";

const BreadCrumb = () => {
  const pathname = usePathname();
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem className="text-black">
          {pathname.slice(1)}
        </BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
