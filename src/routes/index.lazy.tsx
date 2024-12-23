import { Link, createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "antd";
import type { FC } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import reactLogo from "@/assets/react.svg";
import Iconify from "@/components/Iconify";
import LocaleSelector from "@/components/LocaleSelector";

import "./index.css";

import viteLogo from "/vite.svg";

const Component: FC = () => {
  const [count, setCount] = useState<number>(0);
  const { t } = useTranslation();

  return (
    <div style={{ textAlign: "center" }}>
      <div className="prose">
        <h1>vite-template-aio</h1>
      </div>

      <Link to={"/about"}>About</Link>
      <div className="items-center flex flex-col">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t("title")}</h1>
      <div>
        <LocaleSelector />
      </div>
      <div className="p-8">
        <Button icon={<Iconify icon="lucide:plus" />} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
};

export const Route = createLazyFileRoute("/")({
  component: Component,
});
