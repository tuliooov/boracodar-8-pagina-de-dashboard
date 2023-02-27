import { Suspense } from 'react'

import styles from './dashboard.module.scss'

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {

    return (

        <div id={styles.container}>
            <h1>layout</h1>
            <Suspense fallback={<p>Carregando...</p>}>
                {children}
            </Suspense>
        </div>
    )
}