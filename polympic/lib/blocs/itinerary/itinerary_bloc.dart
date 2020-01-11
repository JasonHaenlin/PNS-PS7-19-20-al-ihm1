import 'package:polympic/blocs/itinerary/itinerary_state.dart';

class ItineraryBloc {
  ItineraryState _itinerary;

  ItineraryBloc() : _itinerary = ItineraryState();

  ItineraryState get itineraryBloc => _itinerary;
}
