import React from 'react'
import styles from '../styles/navbar.module.scss'

import { DiscordFill, YoutubeFill } from 'akar-icons';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h1>Kxffiehub.xyz</h1>
                </div>

                <div className={styles.media}>
                    <div className={styles.medialink}>
                        <Link href="https://www.youtube.com/c/Kxffie">
                            <YoutubeFill size={24} />
                        </Link>
                    </div>
                    <div className={styles.medialink}>
                        <DiscordFill size={24} />
                    </div>
                </div>
            </div>
        </main>
    )
}
