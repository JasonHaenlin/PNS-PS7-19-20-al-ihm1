import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/event/event_bloc.dart';
import 'package:polympic/blocs/event/event_state.dart';
import 'package:polympic/models/event_model.dart';
import 'package:polympic/theme/colors.dart';

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
  // List<EventModel> filteredData = List();

  // @override
  // void initState() {
  //   super.initState();
  //   filteredData = this.widget._data;
  // }

  @override
  Widget build(BuildContext context) {
    final _eventBloc = BlocProvider.of<EventBloc>(context).eventBloc;

    Future<Null> _handleRefresh() async {
      _eventBloc.dispatch(EventEvent.fetch);
      return;
    }

    return Scaffold(
      appBar: AppBar(
        title: const Text("Agenda"),
      ),
      body:
          // Padding(
          //   padding: const EdgeInsets.all(12.0),
          //   child: TextField(
          //     decoration: InputDecoration(
          //         contentPadding: EdgeInsets.all(10.0),
          //         prefixIcon: Icon(Icons.search),
          //         hintText: "Enter an event name"),
          //     onChanged: (filter) {
          //       setState(() {
          //         this.filteredData = this
          //             .widget
          //             ._data
          //             .where((e) =>
          //                 (e.name.toLowerCase().contains(filter.toLowerCase())))
          //             .toList();
          //       });
          //     },
          //   ),
          // ),
          RefreshIndicator(
        onRefresh: _handleRefresh,
        child: ListView(
          children: _getEvents(this.widget._data),
        ),
      ),
    );
  }

  List<Widget> _getEvents(data) {
    dynamic items = <Widget>[];
    for (dynamic d in data) {
      items.add(Column(
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 10, 20, 10),
            child: EventCard(event: d),
          ),
          Divider(thickness: 1.0, color: kColorIcon),
        ],
      ));
    }
    return items;
  }
}
