import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/timeline/timeline_bloc.dart';
import 'package:polympic/blocs/timeline/timeline_state.dart';
import 'package:polympic/components/timeline/timeline_tab.dart';
import 'package:polympic/theme/colors.dart';

class Carousel extends StatelessWidget {
  const Carousel({
    Key key,
    @required this.children,
  }) : super(key: key);

  final List<TimelineTab> children;

  @override
  Widget build(BuildContext context) {
    final _timelineBloc = BlocProvider.of<TimelineBloc>(context).timelineBloc;

    _timelineBloc.dispatch(TimelineEvent.start, {
      'beginDate': children[0].beginDate,
      'endDate': children[0].endDate,
    });

    return Column(
      mainAxisSize: MainAxisSize.min,
      children: <Widget>[
        SizedBox(
          height: 150,
          child: PageView.builder(
            onPageChanged: (a) => _timelineBloc.dispatch(TimelineEvent.update, {
              'beginDate': children[a].beginDate,
              'endDate': children[a].endDate,
            }),
            controller: PageController(viewportFraction: 0.8),
            itemCount: children.length,
            itemBuilder: (BuildContext context, int itemIndex) {
              return Padding(
                padding: const EdgeInsets.fromLTRB(10, 10, 15, 5),
                child: Card(
                  child: Container(
                    child: ClipPath(
                      clipper: ShapeBorderClipper(
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(3),
                        ),
                      ),
                      child: StreamBuilder<Status>(
                        stream: _timelineBloc.currentValue$,
                        builder: (BuildContext context,
                                AsyncSnapshot<Status> snapshot) =>
                            CardDecoration(
                                child: children[itemIndex],
                                status: snapshot.data ?? Status.waiting),
                      ),
                    ),
                  ),
                  margin: EdgeInsets.all(10.0),
                ),
              );
            },
          ),
        )
      ],
    );
  }
}

class CardDecoration extends StatelessWidget {
  const CardDecoration({
    Key key,
    @required this.child,
    @required this.status,
  }) : super(key: key);

  final TimelineTab child;
  final Status status;

  static dynamic colors = <Status, Color>{
    Status.done: kColorPrimary,
    Status.waiting: kColorPrimary,
    Status.inProgress: kColorSecondary,
  };

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        border: Border(
          top: BorderSide(color: colors[status], width: 5),
        ),
      ),
      child: child,
    );
  }
}
