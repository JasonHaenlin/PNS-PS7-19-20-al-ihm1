import 'package:polympic/blocs/bloc_base.dart';
import 'package:polympic/services/service.dart';

enum BasicEvent { fetch }

class BasicState extends BlocBase<BasicEvent, int> {
  BasicState(int seed) : super(seed: seed, initEvent: BasicEvent.fetch);

  @override
  Stream<int> eventToState(BasicEvent event, [data]) async* {
    switch (event) {
      case BasicEvent.fetch:
        yield await service.getData();
        break;
      default:
    }
  }
}
