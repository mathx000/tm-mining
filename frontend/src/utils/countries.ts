import { AO, BR, ES, FR, GB, MZ, PT, US } from "country-flag-icons/react/3x2";
import React from "react";

export interface CountryOption {
  code2: string;
  name: string;
  code: string;
  Flag: (props: React.SVGAttributes<SVGElement>) => React.JSX.Element;
}

export const countryOptions: CountryOption[] = [
  { code2: "PT", name: "Portugal", code: "+351", Flag: PT },
  { code2: "BR", name: "Brasil", code: "+55", Flag: BR },
  { code2: "ES", name: "Espanha", code: "+34", Flag: ES },
  { code2: "FR", name: "França", code: "+33", Flag: FR },
  { code2: "GB", name: "Reino Unido", code: "+44", Flag: GB },
  { code2: "US", name: "Estados Unidos", code: "+1", Flag: US },
  { code2: "AO", name: "Angola", code: "+244", Flag: AO },
  { code2: "MZ", name: "Moçambique", code: "+258", Flag: MZ },
];
