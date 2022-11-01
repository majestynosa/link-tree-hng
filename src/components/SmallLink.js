import SlackSVG from '../assets/svgs/slack.svg';
import GithubSVG from '../assets/svgs/github.svg';

export default function SmallLinks() {
    return <div className="small_link">
        <img alt="slack" src={SlackSVG} />
        <img alt="github" src={GithubSVG} />
    </div>
}