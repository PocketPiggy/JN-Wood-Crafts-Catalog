import Link from "next/link";

//  This pattern/flow for this Card component works like this:
//  There are three files, *Card* component that generates the card,
//  functional *SelectCard* component that picks card from a
//  *JSON* file that contains all the data/content to be displayed.
//
//  Page imports Card component and SelectCard component.
//  Card accepts data prop from SelectCard.
//  SelectCard returns the content from the json.
//
//  *<Card cardData={SelectCard("PageCategory", "JsonCardName")}/>*

export default function Card(props) {
    const fillCard = (props) => {
        return (
            <Link href={props.aHref} passHref>
                <a className="card-link">
                    <div className="card-content">
                        <div className="card-img">
                            <img src={props.imgSrc} alt={props.imgAlt} />
                        </div>
                        <div className="card-title">
                            <p className="card-title">{props.title}</p>
                        </div>
                        <hr className="card-text-seperator" />
                        <div className="card-description">
                            <p className="card-description">{props.text}</p>
                        </div>
                        <div className="card-price">
                            <p>{props.price}</p>
                        </div>
                    </div>
                </a>
            </Link>
        );
    };

    return <div className="card-container">{fillCard(props.cardData)}</div>;
}
