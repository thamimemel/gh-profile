import { VscCalendar, VscLocation } from "react-icons/vsc";
import { MdWork } from "react-icons/md";
import "../styles/components/userinfo.css";
import moment from "moment";

const UserInfo = (props) => {
  const {
    avatar_url,
    name,
    location,
    following,
    followers,
    login,
    company,
    created_at,
    public_repos,
  } = props.data;
  return (
    <div className="userInfo">
      <img alt="User profile" src={avatar_url}></img>
      <h1>{name}</h1>
      <h2>
        <a
          rel="noreferrer"
          target="_blank"
          href={`https://github.com/${login}`}
        >
          @{login}
        </a>
      </h2>
      <div className="generalInfo">
        {location && (
          <span>
            <VscLocation />
            {location}
          </span>
        )}

        {company && (
          <span>
            <MdWork />
            {company}
          </span>
        )}

        <span>
          <VscCalendar />
          Joined {moment(created_at).format("MMM d, YYYY")}
        </span>
      </div>
      <div className="followersInfo">
        <div>
          <p className="counter">{followers}</p>
          <p>FOLLOWERS</p>
        </div>
        <div>
          <p className="counter">{following}</p>
          <p>FOLLOWING</p>
        </div>
        <div>
          <p className="counter">{public_repos}</p>
          <p>REPOSITORIES</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
