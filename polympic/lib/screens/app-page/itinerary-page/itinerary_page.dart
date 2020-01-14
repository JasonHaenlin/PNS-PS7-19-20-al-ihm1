import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/itinerary/itinerary_bloc.dart';
import 'package:polympic/core/router.dart';
import 'package:polympic/models/itenary_model.dart';
import 'package:polympic/screens/app-page/itinerary-page/components/itinerary_list.dart';
import 'package:polympic/screens/app-page/preference-page/preference_sport.dart';

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
        title: const Text('Itinéraires'),
        actions: <Widget>[
          IconButton(
              iconSize: 50.0,
              icon: Icon(Icons.edit_attributes),
              onPressed: () => navigateToPage(context, PreferenceSport())),
        ],
      ),
      body: StreamBuilder<List<ItineraryModel>>(
        stream: _itineraryBLoc.currentValue$,
        builder: (BuildContext context,
                AsyncSnapshot<List<ItineraryModel>> snapshot) =>
            snapshot.hasData
                ? ItineraryList(data: snapshot.data)
                : Center(child: CircularProgressIndicator()),
      ),
    );
  }
}
