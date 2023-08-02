import {
  ReactNode,
  createContext,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { IssueType } from '../@types/issue';
import { API } from '../lib/api';

interface GithubContextType {
  issues: IssueType[];
  fetchIssues: () => Promise<void>;
  filterIssues: (search: string) => void;
}

interface GithubProviderProps {
  children: ReactNode;
}
export const GithubContext = createContext<GithubContextType>(
  {} as GithubContextType,
);

export function GithubProvider({ children }: GithubProviderProps) {
  const [issues, setIssues] = useState<IssueType[]>([]);
  const [currentIssues, setCurrentIssues] = useState<IssueType[]>([]);

  const fetchIssuesData = useCallback(async () => {
    const response = await API.get('repos/Junior041/dt-money/issues');
    setIssues(response.data);
    setCurrentIssues(response.data);
  }, []);

  const filterIssues = useCallback(
    (search: string) => {
      setCurrentIssues(
        issues.filter((issue) => {
          return issue.body.toUpperCase().includes(search.toUpperCase());
        }),
      );
    },
    [issues],
  ); // Adicione "issues" como dependência

  // Utilize useEffect para realizar a filtragem apenas quando "filterIssues" mudar
  useEffect(() => {
    filterIssues(''); // Filtrar sem texto inicialmente
  }, [filterIssues]);

  return (
    <GithubContext.Provider
      value={{
        issues: currentIssues,
        fetchIssues: fetchIssuesData,
        filterIssues,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}
