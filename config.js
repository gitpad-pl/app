module.exports = {
    env: {
        local: {
            debug: true,
            url: 'http://localhost:8080/',
            domain: 'localhost',
            port: '8080'
        },
        test: {
            debug: true,
            url: ''
        },
        live: {
            debug: false,
            domain: ''
        },
    },
    modules: {
        app:
            {
                loader: 'babel'
            },
        account:
            {
                loader: 'vue'
            },

        project:
            {
                loader: 'vue'
            },
        category:
            {
                loader: 'vue'
            },
        note:
            {
                loader: 'vue'
            },
        menu:
            {
                loader: 'vue'
            },
        toolbar:
            {
                loader: 'vue'
            },
        markdown:
            {
                loader: 'vue'
            },
        editor:
            {
                loader: 'vue'
            }
    },
    services: {
        db: {
            name: '',
            user: '',
            pass: '',
            host: '',
            port: '',
        },
        cache: {
            name: '',
            user: '',
            pass: '',
            host: '',
            port: '',
        },
        ftp: {
            name: '',
            user: '',
            pass: '',
            host: '',
            port: '',
        },
        git: {
            name: '',
            user: '',
            pass: '',
            host: '',
            port: '',
        },
    }
}
