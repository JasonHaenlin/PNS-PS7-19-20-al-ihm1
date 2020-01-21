import 'package:polympic/config/env.dart';
import 'package:polympic/config/env_config.dart';
import 'package:polympic/app.dart';

void main() {
  envConfig.appName = kEnvAppName;
  envConfig.flavorName = kEnvDev;
  envConfig.apiBaseUrl = kEnvApiUrlProd;
  envConfig.mocked = false;
  envConfig.preview = false;
  app();
}
