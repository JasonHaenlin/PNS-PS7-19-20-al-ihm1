import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/itinerary/itinerary_bloc.dart';
import 'package:polympic/blocs/itinerary/itinerary_state.dart';
import 'package:polympic/blocs/timeline/timeline_bloc.dart';
import 'package:polympic/blocs/timeline/timeline_state.dart';
import 'package:polympic/components/timeline/indicator.dart';
import 'package:polympic/components/timeline/line.dart';

class Timeline extends StatefulWidget {
  Timeline({
    Key key,
    @required this.children,
  }) : super(key: key);

  final List<Widget> children;

  @override
  _TimelineState createState() => _TimelineState();
}

class _TimelineState extends State<Timeline> {
  @override
  Widget build(BuildContext context) {
    final _itiBloc = BlocProvider.of<ItineraryBloc>(context).itineraryBloc;

    Future<Null> _handleRefresh() async {
      _itiBloc.dispatch(ItineraryEvent.fetch);
      setState(() {});
      return;
    }

    return RefreshIndicator(
      onRefresh: _handleRefresh,
      child: ListView.builder(
        itemBuilder: (BuildContext context, int index) {
          return BlocProvider<TimelineBloc>(
            bloc: TimelineBloc(),
            child: TimelineContainer(child: widget.children[index]),
          );
        },
        itemCount: widget.children.length,
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
