
const ProjectVideo = ({ link, height, width, title }) => {
    return (
        <iframe
            height={height}
            width={width}
            src={link}
            allowFullScreen
            title={title}
            />
    )
}

export default ProjectVideo