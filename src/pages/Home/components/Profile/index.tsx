import {
  DadosProfile,
  LinksProfile,
  NomeProfile,
  ProfileContainer,
  ResumoProfile,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import GithubSVG from '../../../../assets/Github.svg';
import BuildingSVG from '../../../../assets/Building.svg';
import UserGroupSVG from '../../../../assets/UserGroup.svg';
import { memo, useContext, useEffect } from 'react';
import { GithubContext } from '../../../../contexts/GithubContexts';

function ProfileComponent() {
  const { fetchUser, user } = useContext(GithubContext);

  useEffect(() => {
    fetchUser('Junior041');
  }, []);

  return (
    <ProfileContainer>
      <img width="148px" src={user?.avatar_url} alt="" />
      <DadosProfile>
        <NomeProfile>
          <span>{user?.name}</span>
          <a href={user?.html_url} target="_blank" rel="noreferrer">
            <span>GITHUB</span>
            <span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </span>
          </a>
        </NomeProfile>
        <ResumoProfile>
          <span>{user?.bio}</span>
        </ResumoProfile>
        <LinksProfile>
          <div>
            <img src={GithubSVG} alt="" />
            <span>{user?.login}</span>
          </div>
          <div>
            <img src={BuildingSVG} alt="" />
            <span>{user?.company}</span>
          </div>
          <div>
            <img src={UserGroupSVG} alt="" />
            <span>{user?.followers} Seguidores</span>
          </div>
        </LinksProfile>
      </DadosProfile>
    </ProfileContainer>
  );
}
export const Profile = memo(ProfileComponent);
