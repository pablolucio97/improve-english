import Prismic from '@prismicio/client'
import { DefaultClient } from '@prismicio/client/types/client';

export function getPrismicClient(req): DefaultClient{
    const prismicInstance = Prismic.client(process.env.PRISMIC_DOMAIN_URL, {
        req
    })
    return prismicInstance
}