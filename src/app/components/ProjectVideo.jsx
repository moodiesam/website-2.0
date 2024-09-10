
const ProjectVideo = ({ link, height, width, title }) => {
    return (
        <iframe
            height={height}
            width={width}
            src={link}
            frameborder="0"
            allowfullscreen
            title={title}
            />
    )
}

export default ProjectVideo