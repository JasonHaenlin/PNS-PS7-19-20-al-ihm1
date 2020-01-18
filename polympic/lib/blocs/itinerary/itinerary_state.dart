import 'package:polympic/blocs/bloc_base.dart';
import 'package:polympic/models/itenary_model.dart';
import 'package:polympic/services/itinerary_service.dart';

enum ItineraryEvent { fetch }

class ItineraryState extends BlocBase<ItineraryEvent, ItineraryModel> {
  ItineraryState() : super(initEvent: ItineraryEvent.fetch);

  @override
  Stream<ItineraryModel> eventToState(ItineraryEvent event, [data]) async* {
    switch (event) {
      case ItineraryEvent.fetch:
        yield await itineraryService.getData();
        break;
      default:
    }
  }
}
