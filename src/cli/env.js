const parseEnv = () => {
    const rssEnvs = Object.entries(process.env).filter((env) => env[0].startsWith('RSS_'));
    const parsedEnvs = rssEnvs.map((env) => env.join('=')).join('; ');
    console.log(parsedEnvs);
};

parseEnv();