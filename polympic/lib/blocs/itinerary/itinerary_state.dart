import 'package:polympic/blocs/bloc_base.dart';
import 'package:polympic/models/itenary_model.dart';
import 'package:polympic/services/itinerary_service.dart';

enum ItineraryEvent { fetch, fetchIfCacheEmpty }

class ItineraryState extends BlocBase<ItineraryEvent, ItineraryModel> {
  ItineraryState() : super(initEvent: ItineraryEvent.fetchIfCacheEmpty);

  @override
  Stream<ItineraryModel> eventToState(ItineraryEvent event, [data]) async* {
    switch (event) {
      case ItineraryEvent.fetch:
        yield await itineraryService.getData();
        break;
      case ItineraryEvent.fetchIfCacheEmpty:
        if (this.isEmpty()) {
          yield await itineraryService.getData();
        } else {
          yield this.lastValue();
        }
        break;
      default:
    }
  }
}
