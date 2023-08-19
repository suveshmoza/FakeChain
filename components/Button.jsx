import Link from 'next/link';

const Button = ({ link, color, text }) => {
	return (
		<>
			<Link href={link}>
				<p
					className={`py-2 px-4 text-md bg-${color}-500 text-white font-medium rounded-xl ml-4 hover:bg-${color}-600`}
				>
					{text}
				</p>
			</Link>
		</>
	);
};

export default Button;
