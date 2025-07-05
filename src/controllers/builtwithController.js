import BuiltWith from 'builtwith-api';

export async function getBuiltWithData(url) {
    const apiKey = process.env.YOUR_BUILTWITH_API_KEY;

    if (!apiKey) {
        throw new Error('Missing YOUR_BUILTWITH_API_KEY in environment variables');
    }

    const builtwith = BuiltWith(apiKey, {
        responseFormat: 'json'
    });

    return await builtwith.domain(url, {
        onlyLiveTechnologies: true,
        noMetaData: true,
        noAttributeData: true
    });
}
