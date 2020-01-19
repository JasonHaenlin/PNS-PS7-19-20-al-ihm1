import 'package:polympic/blocs/bloc_base.dart';
import 'package:polympic/core/storage.dart';

enum StarterEvent { init, check }

class StarterState extends BlocBase<StarterEvent, bool> {
  StarterState() : super(seed: false, initEvent: StarterEvent.check);

  @override
  Stream<bool> eventToState(StarterEvent event, [data]) async* {
    const key = 'initiate';

    switch (event) {
      case StarterEvent.init:
        yield await writeStorage(key, true);
        break;
      case StarterEvent.check:
        // just to see our starter screen <3
        await Future.delayed(const Duration(seconds: 2));
        yield await exist(key);
        break;
      default:
    }
  }
}
