import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/timeline/timeline_bloc.dart';
import 'package:polympic/blocs/timeline/timeline_state.dart';
import 'package:polympic/components/timeline/indicator.dart';
import 'package:polympic/components/timeline/line.dart';

class Timeline extends StatelessWidget {
  Timeline({
    Key key,
    @required this.children,
  }) : super(key: key);

  final List<Widget> children;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: ListView.builder(
        itemBuilder: (BuildContext context, int index) {
          return BlocProvider<TimelineBloc>(
            bloc: TimelineBloc(),
            child: TimelineContainer(child: children[index]),
          );
        },
        itemCount: children.length,
      ),
    );
  }
}

class TimelineContainer extends StatelessWidget {
  const TimelineContainer({
    Key key,
    @required this.child,
  }) : super(key: key);

  final Widget child;

  @override
  Widget build(BuildContext context) {
    final _timelineBloc = BlocProvider.of<TimelineBloc>(context).timelineBloc;

    return Stack(
      children: <Widget>[
        child,
        Line(),
        StreamBuilder<Status>(
          stream: _timelineBloc.currentValue$,
          builder: (BuildContext context, AsyncSnapshot<Status> snapshot) =>
              Indicator(status: snapshot.data ?? Status.waiting),
        ),
      ],
    );
  }
}
