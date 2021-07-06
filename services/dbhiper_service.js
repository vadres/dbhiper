const replace = require('replace-in-file');

const hibernate = (pass, user, folder, host, db) => {
    replaceImpl(
        /<property name="(hibernate\.)?show_sql"(?!.*>)>(?!.*<)<\/property>/,
        ` <property name="hibernate.show_sql">false</property>` 
    ); 

    relaceImpl(
        /<property name=\"(hibernate\.)?connection\.url\"(?!.*>)>(?!.*<)<\/property(?!.*>)>/,
        `<property name="hibernate.connection.url\">jdbc:postgresql://${host}/${db}</property>`
    );

    relaceImpl(
        /<property name=\"(hibernate\.)?connection\.password\"(?!.*>)>(?!.*<)<\/property(?!.*>)>/, 
        `<property name="hibernate.connection.password">${pass}</property>`
    );
    
    relaceImpl(
        /<property name=\"(hibernate\.)?connection\.username\"(?!.*>)>(?!.*<)<\/property(?!.*>)>/,
        `<property name="hibernate.connection.username">${user}</property>`
    );
    
}

const persistence = (pass, user, folder, host, db) => {
    replaceImpl(
        /<property name="hibernate.show_sql"(?!.*>)\/>/,
        `<property name="hibernate.show_sql" value="false"/>` 
    )

    relaceImpl(
        /<jar-file>.*seguranca\.jar<\/jar-file>/, 
        `<jar-file>${folder}\\WebContent\\WEB-INF\\classes\\lib\\seguranca.jar</jar-file>`
    );
    
    relaceImpl(
        /<property name=\"(hibernate\.)?connection\.url\"(?!.*>)>(?!.*<)<\/property(?!.*>)>/,
        `<property name="hibernate.connection.url\">jdbc:postgresql://${host}/${db}</property>`
    );

    relaceImpl(
        /<property name=\"(hibernate\.)?connection\.password\"(?!.*>)>(?!.*<)<\/property(?!.*>)>/, 
        `<property name="hibernate.connection.password">${pass}</property>`
    );
    
    relaceImpl(
        /<property name=\"(hibernate\.)?connection\.username\"(?!.*>)>(?!.*<)<\/property(?!.*>)>/,
        `<property name="hibernate.connection.username">${user}</property>`
    );
    
}

const relaceImpl = async (from, to) => {
    try {
        const options = {
            files: [
                `${document.getElementById("folder").value}/src/hibernate.cfg.xml`,
                `${document.getElementById("folder").value}/src/WEB-INF/persistence.xml`,
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
