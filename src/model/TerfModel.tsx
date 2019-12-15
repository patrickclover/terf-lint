export interface TerfTermType {
  term: string;
  description?: string;
  rank?: number;
  count?: number;
  exact?: boolean;
}

const TerfTerms: TerfTermType[] = [
  {
    term: "Gender critical"
  },
  {
    term: "Sex-based rights"
  },
  {
    term: "Transgender-identifying"
  },
  {
    term: "Transsexualism"
  },
  {
    term: "Gender-nonconforming"
  },
  {
    term: "Conflicting rights"
  },
  {
    term: "Conflict of rights"
  },
  {
    term: "Adult human female"
  },
  {
    term: "Adult human male"
  },
  {
    term: "Woman not cis"
  },
  {
    term: "Biological essentialism"
  },
  {
    term: "Real women"
  },
  {
    term: "SCAM",
    exact: true
  },
  {
    term: "Surgically and chemically altered male"
  },
  {
    term: "TIM",
    exact: true
  },
  {
    term: "Trans-identified male"
  },
  {
    term: "TIF",
    exact: true
  },
  {
    term: "Trans-identified female"
  },
  {
    term: "Women-only spaces"
  },
  {
    term: "TRAs Trans rights activist"
  },
  {
    term: "Trans activist"
  },
  {
    term: "Transgender activist"
  },
  {
    term: "Biological woman"
  },
  {
    term: "Biological man"
  },
  {
    term: "Genetically male"
  },
  {
    term: "Genetically female"
  },
  {
    term: "Erasing lesbians"
  },
  {
    term: "Erasing women’s rights"
  }
];

export default TerfTerms;
