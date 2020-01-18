import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/itinerary/itinerary_bloc.dart';
import 'package:polympic/core/router.dart';
import 'package:polympic/models/itenary_model.dart';
import 'package:polympic/screens/app-page/itinerary-page/components/itinerary.dart';
import 'package:polympic/screens/app-page/preference-page/preference_page.dart';

class ItinerariesPage extends StatelessWidget {
  const ItinerariesPage({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BlocProvider<ItineraryBloc>(
      bloc: ItineraryBloc(),
      child: Itineraries(),
    );
  }
}

class Itineraries extends StatelessWidget {
  const Itineraries({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final _itineraryBLoc =
        BlocProvider.of<ItineraryBloc>(context).itineraryBloc;

    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        title: const Text('Itinéraire'),
        actions: <Widget>[
          IconButton(
            iconSize: 30.0,
            icon: Icon(FontAwesomeIcons.slidersH),
            onPressed: () => navigateToPage(context, PreferencePage()),
          )
        ],
      ),
      body: StreamBuilder<ItineraryModel>(
        stream: _itineraryBLoc.currentValue$,
        builder:
            (BuildContext context, AsyncSnapshot<ItineraryModel> snapshot) =>
                snapshot.hasData
                    ? Itinerary(data: snapshot.data)
                    : Center(child: CircularProgressIndicator()),
      ),
    );
  }
}
