import React from "react";
import Image from 'next/image'

export default function Footer() {
	return (
		<div>
			<a
				href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				Powered by{" "}
				<span>
					<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
				</span>{" "}
				explored by Florent
				<Link href="./about">About</Link >
			</a>
		</div>
	);
}
