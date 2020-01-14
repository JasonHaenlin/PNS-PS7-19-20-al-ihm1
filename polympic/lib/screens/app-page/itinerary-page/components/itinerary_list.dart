import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/itinerary/itinerary_bloc.dart';
import 'package:polympic/blocs/itinerary/itinerary_state.dart';
import 'package:polympic/models/itenary_model.dart';
import 'package:polympic/screens/app-page/itinerary-page/components/itinerary_card.dart';

class ItineraryList extends StatelessWidget {
  const ItineraryList({
    Key key,
    @required List<ItineraryModel> data,
  })  : _data = data,
        super(key: key);

  final List<ItineraryModel> _data;

  @override
  Widget build(BuildContext context) {
    final _itinerayBloc = BlocProvider.of<ItineraryBloc>(context).itineraryBloc;

    Future<Null> _handleRefresh() async {
      _itinerayBloc.dispatch(ItineraryEvent.fetch);
      return;
    }

    return RefreshIndicator(
      onRefresh: _handleRefresh,
      child: _data.length > 0
          ? ListView.builder(
              itemCount: _data.length,
              itemBuilder: (BuildContext context, int index) {
                return ItineraryCard(data: _data[index]);
              },
            )
          : Text("Veillez définir vos Préférences"),
    );
  }
}
