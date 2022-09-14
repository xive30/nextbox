import React from "react";
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
	return (
		<>
			<footer className='footer'>
				<p>Développé par Florent</p>
				<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
				<Link href="/about">
					About
				</Link>
			</footer>
		</>
	);
}
