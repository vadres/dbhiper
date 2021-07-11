const replace = require('replace-in-file');
const regexUtil = require('./util/regex');

const hibernate = async (pass, user, folder, host, db) => {
    await replaceImpl(regexUtil.hibernate.show_sql()); 
    await replaceImpl(regexUtil.hibernate.url(host,db));
    await replaceImpl(regexUtil.hibernate.password(pass));    
    await replaceImpl(regexUtil.hibernate.username(user));
}

const persistence = async (pass, user, folder, host, db) => {
    await replaceImpl(regexUtil.persistence.show_sql()); 
    await replaceImpl(regexUtil.persistence.url(host,db));
    await replaceImpl(regexUtil.persistence.password(pass));    
    await replaceImpl(regexUtil.persistence.username(user));
    await replaceImpl(regexUtil.persistence.seguranca(folder));
}

const replaceImpl = async ({ from, to }) => {
    try {
        const options = {
            files: [
                `${document.getElementById("folder").value}/src/hibernate.cfg.xml`,
                `${document.getElementById("folder").value}/src/META-INF/persistence.xml`,
            ]
        };

        options.from = from;
        options.to = to;
        await replace(options);
    }
    catch (error) {
        console.error('Error occurred:', error);
    }
}

const dbhiper = () => {
    const pass = document.getElementById("pass").value;
    const user = document.getElementById("user").value;
    const folder = document.getElementById("folder").value;
    const host = document.getElementById("host").value;
    const db = document.getElementById("db").value;

    hibernate(pass, user, folder, host, db);
    persistence(pass, user, folder, host, db);
}

module.exports = {
    dbhiper    
}
