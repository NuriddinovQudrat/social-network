import React, { useEffect, useState } from "react";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";

export const ReactQueryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [queryClient, setQueryClient] = useState<QueryClient | null>(null);

  useEffect(() => {
    if (!queryClient)
      setQueryClient(
        new QueryClient({
          defaultOptions: {
            queries: {
              refetchOnWindowFocus: false,
              retry: false,
              // staleTime: 5000,
              // refetchOnWindowFocus: false,
              // retry: false,
              // cacheTime: 0,
            },
          },
          queryCache: new QueryCache({
            onError: async (error, query) => {
              console.log(error);
            },
          }),
        })
      );
  }, [queryClient]);

  return (
    (queryClient && (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )) ||
    null
  );
};
