import 'dart:convert';

import 'package:http/http.dart' show Client;
import 'package:polympic/config/env_config.dart';
import 'package:polympic/mocks/itinerary_mock.dart';
import 'package:polympic/models/itenary_model.dart';
import 'package:polympic/services/category_service.dart';
import 'package:polympic/services/core/utils.dart';

class ItineraryService {
  Client client;

  ItineraryService({Client client}) {
    this.client = client ?? Client();
  }

  Future<ItineraryModel> getData() async {
    final tags = categoryService.categories;
    final params = buildOptions(tags);
    if (envConfig.mocked) {
      return fetchMockedData();
    }
    final response =
        await client.get(envConfig.apiBaseUrl + 'itinerary' + params);
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
}

ItineraryService itineraryService = ItineraryService();
