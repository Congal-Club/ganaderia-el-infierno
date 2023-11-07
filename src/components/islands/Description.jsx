export default function Description({ description }) {
    return (
        <div dangerouslySetInnerHTML={{ __html: description }} />
    )
}