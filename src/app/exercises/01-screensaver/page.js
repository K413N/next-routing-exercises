import React from 'react';

import Link from 'next/link';


function ScreenSaverIndexPage() {
  return (
    <main>
      <p>Choose your color: </p>
      <ul>
        <li><Link href="01-screensaver/red">red</Link></li>
        <li><Link href="01-screensaver/white">white</Link></li>
        <li><Link href="01-screensaver/green">green</Link></li>
        <li><Link href="01-screensaver/yellow">yellow</Link></li>
        <li><Link href="01-screensaver/blue">blue</Link></li>
      </ul>
    </main>
  );
}

export default ScreenSaverIndexPage;
