'use client';

import useNarrowScreen from '@/hooks/use-narrow-screen';
import LargeDoc from '@/components/docs/docslayoutLarge';
import SmallDoc from '@/components/docs/docslayoutSmall';
export default function DocsLayout({ children, nav }) {
    const mobile = useNarrowScreen();

    return mobile
        ? <SmallDoc nav={nav}>{children}</SmallDoc>
        : <LargeDoc nav={nav}> {children}</LargeDoc>;



}