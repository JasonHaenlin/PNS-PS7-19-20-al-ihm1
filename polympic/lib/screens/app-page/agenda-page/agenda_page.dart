import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/event/event_bloc.dart';
import 'package:polympic/blocs/event/event_state.dart';
import 'package:polympic/models/event_model.dart';

import 'components/list_events.dart';

class AgendaPage extends StatelessWidget {
  const AgendaPage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final _eventBloc = BlocProvider.of<EventBloc>(context).eventBloc;

    _eventBloc.dispatch(EventEvent.fetch);

    return StreamBuilder<List<EventModel>>(
      stream: _eventBloc.currentValue$,
      builder:
          (BuildContext context, AsyncSnapshot<List<EventModel>> snapshot) =>
              snapshot.hasData
                  ? ListEvents(data: snapshot.data)
                  : Center(child: CircularProgressIndicator()),
    );
  }
}
