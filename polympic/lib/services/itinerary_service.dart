import 'dart:convert';

import 'package:http/http.dart' show Client;
import 'package:polympic/config/env_config.dart';
import 'package:polympic/mocks/itinerary_mock.dart';
import 'package:polympic/models/category_model.dart';
import 'package:polympic/models/itenary_model.dart';
import 'package:polympic/services/category_service.dart';

class ItineraryService {
  Client client;

  ItineraryService({Client client}) {
    this.client = client ?? Client();
  }

  Future<ItineraryModel> getData() async {
    if (envConfig.mocked) {
      return fetchMockedData();
    }
    final tags = categoryService.categories;
    final params = _buildOptions(tags);
    final response =
        await client.get(envConfig.apiBaseUrl + 'itineraries' + params);
    if (response.statusCode == 200) {
      dynamic list = json.decode(response.body);
      dynamic data = ItineraryModel.fromMap(list);
      return data;
    } else {
      throw Exception('Failed to load post');
    }
  }

  ItineraryModel fetchMockedData() {
    return ItineraryModel.fromMap(ITINERARY_MOCK);
  }

  String _buildOptions(Map<String, List<CategoryModel>> tags) {
    String separator = '?';
    String options = '';
    for (dynamic t in tags.entries) {
      String opt = '';
      for (dynamic v in t.value) {
        if (v.state is bool && v.state) {
          opt += v.name + ',';
        }
        if (v.state is int) {
          opt += v.name + ':' + v.state.toString() + ',';
        }
      }
      if (opt != '') {
        options += separator + t.key + '=' + opt;
        separator = '&';
      }
    }
    return options;
  }
}

ItineraryService itineraryService = ItineraryService();
