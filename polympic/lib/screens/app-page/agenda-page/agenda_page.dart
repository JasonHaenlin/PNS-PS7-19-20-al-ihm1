import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/event/event_bloc.dart';
import 'package:polympic/core/router.dart';
import 'package:polympic/models/event_model.dart';
import 'package:polympic/screens/app-page/agenda-page/components/event_list.dart';
import 'package:polympic/screens/app-page/preference-page/preference_sport.dart';

class AgendaPage extends StatelessWidget {
  const AgendaPage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final _eventBloc = BlocProvider.of<EventBloc>(context).eventBloc;

    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        title: const Text('Agenda'),
        actions: <Widget>[
          IconButton(
              iconSize: 50.0,
              icon: Icon(Icons.edit_attributes),
              onPressed: () => navigateToPage(context, PreferenceSport())),
        ],
      ),
      body: StreamBuilder<List<EventModel>>(
        stream: _eventBloc.currentValue$,
        builder:
            (BuildContext context, AsyncSnapshot<List<EventModel>> snapshot) =>
                snapshot.hasData
                    ? EventList(data: snapshot.data)
                    : Center(child: CircularProgressIndicator()),
      ),
    );
  }
}
