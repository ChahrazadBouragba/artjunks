

export default function SectionTwo(props) {
    return (
        <section>
            <div className="card--container">
                <img className="card--img" src={props.image}></img>
                <p className="card--date">{props.date}</p>
                <h2 className="card--title">{props.title}</h2>
                <a className="card--link" href="#">Read more &rarr;</a>
            </div>
        </section>
    )
}