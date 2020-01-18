import 'package:polympic/config/env.dart';
import 'package:polympic/config/env_config.dart';
import 'package:polympic/app.dart';

void main() {
  envConfig.appName = kEnvAppName;
  envConfig.flavorName = kEnvProd;
  envConfig.apiBaseUrl = kEnvApiUrlProd;
  envConfig.mocked = false;
  app();
}
