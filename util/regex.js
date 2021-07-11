module.exports = { 
  hibernate: {
    "show_sql": () => ({
      from: /<property name="(hibernate\.)?show_sql">.*<\/property>/,
      to: `<property name="hibernate.show_sql">true</property>` 
    }),
    "url": (host, db) => ({
      from: /<property name=\"(hibernate\.)?connection\.url\">.*<\/property>/,
      to: `<property name="hibernate.connection.url\">jdbc:postgresql://${host}/${db}</property>`
    }),  
    "password": (pass) => ({
      from: /<property name=\"(hibernate\.)?connection\.password\">.*<\/property>/,
      to: `<property name="hibernate.connection.password">${pass}</property>`
    }),   
    "username": (user) => ({
      from: /<property name=\"(hibernate\.)?connection\.username\">.*<\/property>/,
      to: `<property name="hibernate.connection.username">${user}</property>`
    }),  
  },
  persistence: {
    "show_sql": () => ({
      from: /<property name="hibernate.show_sql" value=".*"\/>/,
      to: `<property name="hibernate.show_sql" value="true"/>`
    }),  
    "seguranca": (folder) => ({
      from: /<jar-file>.*<\/jar-file>/,
      to: `<jar-file>${folder}\\WebContent\\WEB-INF\\classes\\lib\\seguranca.jar</jar-file>`
    }),   
    "url": (host, db) => ({
      from: /<property name=\"(hibernate\.)?connection\.url\">.*<\/property>/,
      to: `<property name="hibernate.connection.url\">jdbc:postgresql://${host}/${db}</property>`
    }),  
    "password": (pass) => ({
      from: /<property name=\"(hibernate\.)?connection\.password\">.*<\/property>/,
      to: `<property name="hibernate.connection.password">${pass}</property>`
    }),   
    "username": (user) => ({
      from: /<property name=\"(hibernate\.)?connection\.username\">.*<\/property>/,
      to: `<property name="hibernate.connection.username">${user}</property>`
    }),  
  }
}