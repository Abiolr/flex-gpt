import ReactMarkdown from "react-markdown"

export default function Workout (props) {
    return (
        <section>
            <h1 className="recommendation">FlexGPT Recommends:</h1>
            <ReactMarkdown>
                 {props.workout}
            </ReactMarkdown>
        </section>
    )
}