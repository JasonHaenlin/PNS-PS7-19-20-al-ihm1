import 'package:polympic/config/env_config.dart';
import 'package:polympic/models/category_model.dart';

String buildOptions(Map<String, List<CategoryModel>> tags) {
  String separator = '?';
  String options = '';
  for (dynamic t in tags.entries) {
    String opt = '';
    for (dynamic v in t.value) {
      if (v.state is bool && v.state) {
        opt += v.name + ',';
      }
      if (v.state is int || v.state is double) {
        opt += v.name + ':' + v.state.toInt().toString() + ',';
      }
    }
    if (opt != '') {
      options += separator + t.key + '=' + opt;
      separator = '&';
    }
  }
  if (envConfig.preview) {
    options += separator + 'preview=true';
  }
  return options;
}
