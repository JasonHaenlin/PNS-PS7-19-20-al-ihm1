import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/event/event_bloc.dart';
import 'package:polympic/blocs/event/event_state.dart';
import 'package:polympic/models/event_model.dart';

import 'event_card.dart';

List<EventModel> filteredData;

class EventList extends StatefulWidget {
  EventList({
    Key key,
    @required List<EventModel> data,
  })  : _data = data,
        super(key: key);

  final List<EventModel> _data;

  @override
  _EventListState createState() => _EventListState();
}

class _EventListState extends State<EventList> {
  @override
  Widget build(BuildContext context) {
    final _eventBloc = BlocProvider.of<EventBloc>(context).eventBloc;

    Future<Null> _handleRefresh() async {
      _eventBloc.dispatch(EventEvent.fetch);
      return;
    }

    return RefreshIndicator(
      onRefresh: _handleRefresh,
      child: ListView(
        children: _getEvents(this.widget._data),
      ),
    );
  }

  List<Widget> _getEvents(data) {
    dynamic items = <Widget>[];
    for (dynamic d in data) {
      items.add(Column(
        children: <Widget>[
          EventCard(event: d),
        ],
      ));
    }
    return items;
  }
}
