import 'package:polympic/mocks/itinerary_mock.dart';
import 'package:polympic/models/itenary_model.dart';

class ItineraryService {
  Future<List<ItineraryModel>> getData() async {
    dynamic data =
        ITINERARY_MOCK.map((item) => ItineraryModel.fromMap(item)).toList();

    return data;
  }
}

ItineraryService itineraryService = ItineraryService();
