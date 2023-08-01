import { ReactNode, createContext, useCallback, useState } from 'react';
import { IssueType } from '../@types/issue';
import { API } from '../lib/api';

interface GithubContextType {
  issues: IssueType[];
  fetchIssues: (query?: string) => Promise<void>;
}

interface GithubProviderProps {
  children: ReactNode;
}
export const GithubContext = createContext<GithubContextType>(
  {} as GithubContextType,
);

export function GithubProvider({ children }: GithubProviderProps) {
  const [issues, setIssues] = useState<IssueType[]>([]);

  const fetchIssuesData = useCallback(async (query?: string) => {
    const response = await API.get('repos/Junior041/dt-money/issues', {
      params: {
        q: query,
      },
    });
    setIssues(response.data);
  }, []);

  return (
    <GithubContext.Provider value={{ issues, fetchIssues: fetchIssuesData }}>
      {children}
    </GithubContext.Provider>
  );
}
