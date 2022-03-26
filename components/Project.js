export default function Project({ id, name, image, website, technologies }) {
	return (
        <div style={{"backgroundImage": `url(${image})`}}>
            {id}
            {name}
            {website}
            {technologies}
        </div>
    );
}
