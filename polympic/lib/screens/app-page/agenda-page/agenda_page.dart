import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/event/event_bloc.dart';
import 'package:polympic/blocs/event/event_state.dart';
import 'package:polympic/components/progress/customProgressIndicator.dart';
import 'package:polympic/core/router.dart';
import 'package:polympic/models/event_model.dart';
import 'package:polympic/screens/app-page/agenda-page/components/event_list.dart';
import 'package:polympic/screens/app-page/preference-page/preference_page.dart';

class AgendaPage extends StatelessWidget {
  const AgendaPage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final _eventBloc = BlocProvider.of<EventBloc>(context).eventBloc;
    _eventBloc.dispatch(EventEvent.fetch);

    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        title: const Text('Agenda'),
        actions: <Widget>[
          IconButton(
              iconSize: 30.0,
              icon: Icon(FontAwesomeIcons.slidersH),
              onPressed: () => navigateToPage(context, PreferencePage())),
        ],
      ),
      body: StreamBuilder<List<EventModel>>(
        stream: _eventBloc.currentValue$,
        builder: (context, snapshot) => snapshot.hasData
            ? EventList(data: snapshot.data)
            : CustomProgressIndicator(),
      ),
    );
  }
}
