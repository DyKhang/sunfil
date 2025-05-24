import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useSetSearchParams = (field: string) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (searchParams.get(field) === value && field !== "tag") {
        params.delete(field);
      } else {
        params.set(field, value);
      }

      return params.toString();
    },
    [searchParams, field]
  );

  function handleSetSearchParams(value: string) {
    router.replace(pathName + "?" + createQueryString(value), {
      scroll: false,
    });
  }

  return [handleSetSearchParams];
};
