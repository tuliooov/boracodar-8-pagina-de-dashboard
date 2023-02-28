"use client"

import '../styles/global.css'

import { Roboto } from '@next/font/google'
import { Main } from '@/styles/App.style'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ["700", "400", "500"]
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	
	return (
		<html className={roboto.className} lang="pt-br">
			<head />
			<body>
				<Main>
					{children}
				</Main>
			</body>
		</html>
	)
}
