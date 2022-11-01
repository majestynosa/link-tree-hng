import SlackSVG from '../assets/svgs/slack.svg';
import GithubSVG from '../assets/svgs/github.svg';

export default function SmallLinks() {
    return <div className="small_link">
        <a href="https://slack.com">
            <img alt="slack" src={SlackSVG} />

        </a>

        <a href="https://github.com/majestynosa">
            <img alt="github" src={GithubSVG} />
        </a>

    </div>
}