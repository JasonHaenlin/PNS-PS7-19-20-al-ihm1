import 'package:polympic/blocs/bloc_base.dart';

enum LoadingEvent { progress, done }

class LoadingState extends BlocBase<LoadingEvent, bool> {
  LoadingState() : super(seed: true, initEvent: LoadingEvent.done);

  @override
  Stream<bool> eventToState(LoadingEvent event, [data]) async* {
    switch (event) {
      case LoadingEvent.done:
        yield false;
        break;
      case LoadingEvent.progress:
        yield true;
        break;
      default:
    }
  }
}
