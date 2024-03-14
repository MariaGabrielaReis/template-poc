"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef } from "react";
import { SidebarLinkGroup } from "./SidebarLinkGroup";
import {
  Container,
  Content,
  Header,
  Menu,
  MenuItem,
  Topic,
} from "./index.styles";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const sidebarAccess = [
  {
    topic: "GERAL",
    areas: [
      {
        area: "",
        pages: [
          { page: "Comissões", url: "comissions" },
          { page: "Desenquadrados", url: "mapa-de-desenquadrados" },
          { page: "Asset Allocation", url: "asset-allocation" },
        ],
      },
    ],
  },
  {
    topic: "IS",
    areas: [
      {
        area: "Renda Variável",
        pages: [
          {
            page: "Gerencial de Campanhas",
            url: "is/rv/mapa-de-desenquadrados",
          },
          { page: "Módulo de Campanhas", url: "is/rv/hub-do-cliente" },
          { page: "Detalhamento de Estratégia", url: "is/rv/hub-do-cliente" },
        ],
      },
      {
        area: "Renda Fixa",
        pages: [
          {
            page: "Liquidação de Ofertas",
            url: "is/rf/mapa-de-desenquadrados",
          },
          { page: "Mercado Secundário", url: "is/rf/secondary-market" },
        ],
      },
    ],
  },
  {
    topic: "ASSET",
    areas: [
      {
        area: "Backoffice",
        pages: [
          {
            page: "Conferência de Posições",
            url: "asset/backoffice/mapa-de-desenquadrados",
          },
          {
            page: "Conferência de Caixa",
            url: "asset/backoffice/hub-do-cliente",
          },
          {
            page: "Mapeamento de Ativos",
            url: "asset/backoffice/hub-do-cliente",
          },
        ],
      },
      {
        area: "MFO",
        pages: [
          { page: "Relatório", url: "asset/mfo/mapa-de-desenquadrados" },
          {
            page: "Onboarding Clientes",
            url: "asset/mfo/hub-do-cliente",
          },
          {
            page: "Ativos em Trânsito",
            url: "asset/mfo/assets-in-transit",
          },
        ],
      },
      {
        area: "Gestora",
        pages: [
          { page: "Lâmina de Fundos", url: "mapa-de-desenquadrados" },
          { page: "Análise de Fundos", url: "hub-do-cliente" },
        ],
      },
    ],
  },
];

export function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  return (
    <Container ref={sidebar} sidebarOpen={sidebarOpen}>
      <Header>
        <Link href="/" className="text-brandextralight text-xl font-bold">
          {/* <Image
            width={176}
            height={32}
            src={"/images/logo/logo.svg"}
            alt="Logo"
            priority
          /> */}
          LIFETIME
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block"
        >
          <svg
            className="text-brandextralight fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </Header>

      <Content>
        <Menu>
          <div>
            <MenuItem>
              {sidebarAccess.map((item) => (
                <Fragment key={item.topic}>
                  <Topic>{item.topic}</Topic>

                  {item.areas.map((area) => (
                    <SidebarLinkGroup
                      key={area.area}
                      pathname={pathname}
                      item={area}
                    />
                  ))}
                </Fragment>
              ))}
            </MenuItem>
          </div>
        </Menu>
      </Content>
    </Container>
  );
}
