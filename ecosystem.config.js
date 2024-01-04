module.exports = {
    apps: [
        {
            name: 'rayan.sh',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs',
            env: {
                "PORT": 3000,
                "SUPABASE_URL": "URL",
                "SUPABASE_KEY": "KEY"
            },
        }
    ]
}
