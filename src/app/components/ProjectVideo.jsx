
const ProjectVideo = ({ link, height, width }) => {
    return (
        <iframe
            height={height}
            width={width}
            src={link}
            frameborder="0"
            allowfullscreen
            title="Sam Campbell's introduction video"
            />
    )
}

export default ProjectVideo