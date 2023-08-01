interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface Reaction {
  url: string;
  total_count: number;
  '+1': number;
  '-1': number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: string[];
  state: string;
  locked: boolean;
  assignee: User | null;
  assignees: User[];
  milestone: any; // O tipo real dependerá do objeto Milestone, se houver
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  author_association: string;
  active_lock_reason: string | null;
  body: string;
  reactions: Reaction;
  timeline_url: string;
  performed_via_github_app: any; // O tipo real dependerá do objeto GitHub App, se houver
  state_reason: any; // O tipo real dependerá do motivo do estado, se houver
  score: number;
}

export interface IssueType {
  total_count: number;
  incomplete_results: boolean;
  items: Issue[];
}
