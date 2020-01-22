import 'package:flutter/material.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/category/category_bloc.dart';
import 'package:polympic/blocs/event/event_bloc.dart';
import 'package:polympic/blocs/itinerary/itinerary_bloc.dart';
import 'package:polympic/blocs/starter/starter_bloc.dart';
import 'package:polympic/core/storage.dart';
import 'package:polympic/screens/starter-page/starter_page.dart';
import 'package:polympic/theme/style.dart';

void app() =>
    initializeDateFormatting('fr_FR', null).then((_) => runApp(MyApp()));

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    cleanStorage();
    return BlocProvider<StarterBloc>(
      bloc: StarterBloc(),
      child: BlocProvider<ItineraryBloc>(
        bloc: ItineraryBloc(),
        child: BlocProvider<EventBloc>(
          bloc: EventBloc(),
          child: MaterialApp(
            title: 'Polympic basic',
            theme: appTheme(),
            home: BlocProvider<CategoryBloc>(
              bloc: CategoryBloc(),
              child: StarterPage(),
            ),
          ),
        ),
      ),
    );
  }
}
