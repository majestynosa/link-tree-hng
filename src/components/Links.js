import links from '../data/links'
export default function Links() {
    return <div className="links">

        {
            links.map((item, index) => (
                <a key={index} href={item.href} id={item.id}>
                    <div className="link_item">
                        <h3>{item.title}</h3>
                    </div>
                </a>
            ))
        }

    </div>
}