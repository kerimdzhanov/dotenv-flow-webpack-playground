// --

console.log('DEFAULT_ENV_VAR:', process.env.DEFAULT_ENV_VAR);

process.env.LOCAL_ENV_VAR && console.log('LOCAL_ENV_VAR:', process.env.LOCAL_ENV_VAR);

// --

if (process.env.DEVELOPMENT_ENV_VAR) {
  console.log('DEVELOPMENT_ENV_VAR:', process.env.DEVELOPMENT_ENV_VAR);
  console.log('LOCAL_DEVELOPMENT_ENV_VAR:', process.env.LOCAL_DEVELOPMENT_ENV_VAR);
}
else if (process.env.PRODUCTION_ENV_VAR) {
  console.log('PRODUCTION_ENV_VAR:', process.env.PRODUCTION_ENV_VAR);
  console.log('LOCAL_PRODUCTION_ENV_VAR:', process.env.LOCAL_PRODUCTION_ENV_VAR);
}

// --

console.log('SYSTEM_ENV_VAR:', process.env.SYSTEM_ENV_VAR);

// --

if (process.env.NODE_ENV !== 'production') {
  console.log(`Running in "${process.env.NODE_ENV}" mode.`);
}
else {
  console.log('We are in production!');
}
