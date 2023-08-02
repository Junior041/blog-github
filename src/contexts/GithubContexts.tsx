import {
  ReactNode,
  createContext,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { IssueType } from '../@types/issue';
import { API } from '../lib/api';
import { UserType } from '../@types/user';

interface GithubContextType {
  issues: IssueType[];
  user: UserType | undefined;
  oneIssue: IssueType | undefined;
  fetchIssues: () => Promise<void>;
  filterIssues: (search: string) => void;
  fetchUser: (search: string) => void;
  fetchOneIssue: (issueId: number) => void;
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
  const [user, setUser] = useState<UserType>();
  const [oneIssue, setOneIssue] = useState<IssueType>();

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
  );

  const fetchUser = async (username: string) => {
    const response = await API.get(`/users/${username}`);
    setUser(response.data);
  };

  const fetchOneIssue = async (issueId: number) => {
    const response = await API.get(
      `repos/Junior041/dt-money/issues/${issueId}`,
    );
    setOneIssue(response.data);
  };

  useEffect(() => {
    filterIssues('');
  }, [filterIssues]);

  return (
    <GithubContext.Provider
      value={{
        user,
        issues: currentIssues,
        oneIssue,
        fetchUser,
        fetchIssues: fetchIssuesData,
        filterIssues,
        fetchOneIssue,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}
