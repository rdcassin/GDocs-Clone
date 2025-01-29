"use client";

import { usePaginatedQuery } from "convex/react";

import { useSearchParam } from "@/hooks/use-search-param";
import { DISPLAYED_BATCH_SIZE } from "@/constants/displayedBatchSize";

import { Navbar } from "./navbar";
import { TemplatesGallery } from "./templates-gallery";
import { api } from "../../../convex/_generated/api";
import { DocumentsTable } from "./documents-table";

const Home = () => {

  const [search] = useSearchParam();
  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    { search },
    { initialNumItems: DISPLAYED_BATCH_SIZE }
  );

  return ( 
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
        <DocumentsTable documents={results} status={status} loadMore={loadMore} displayedBatchSize={DISPLAYED_BATCH_SIZE}/>
      </div>
    </div>
  );
};

export default Home;
