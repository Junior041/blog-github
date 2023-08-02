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
import { memo } from 'react';

function ProfileComponent() {
  return (
    <ProfileContainer>
      <img width="148px" src="http://github.com/Junior041.png" alt="" />
      <DadosProfile>
        <NomeProfile>
          <span>Ismael Antonio</span>
          <a
            href="http://github.com/Junior041"
            target="_blank"
            rel="noreferrer"
          >
            <span>GITHUB</span>
            <span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </span>
          </a>
        </NomeProfile>
        <ResumoProfile>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
            qui quo porro, aut ipsa dicta sint eum perferendis sapiente
            quisquam, quas at fuga. Ipsum, tempore nihil. Id a dicta aspernatur.
          </span>
        </ResumoProfile>
        <LinksProfile>
          <div>
            <img src={GithubSVG} alt="" />
            <span>Silva041</span>
          </div>
          <div>
            <img src={BuildingSVG} alt="" />
            <span>Rocketseat</span>
          </div>
          <div>
            <img src={UserGroupSVG} alt="" />
            <span>32 Seguidores</span>
          </div>
        </LinksProfile>
      </DadosProfile>
    </ProfileContainer>
  );
}
export const Profile = memo(ProfileComponent);
