import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/starter/starter_bloc.dart';
import 'package:polympic/blocs/starter/starter_state.dart';
import 'package:polympic/core/router.dart';
import 'package:polympic/screens/app-page/app_page.dart';
import 'package:polympic/screens/app-page/preference-page/components/pref_container.dart';
import 'package:polympic/screens/app-page/preference-page/components/pref_list.dart';
import 'package:polympic/theme/colors.dart';

class TourismStep extends StatelessWidget {
  const TourismStep({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final _starterBloc = BlocProvider.of<StarterBloc>(context).starterBloc;

    return Scaffold(
      appBar: AppBar(
        title: const Text("Pour finir !"),
      ),
      bottomNavigationBar: BottomAppBar(
        elevation: 20,
        color: kColorPrimary,
        child: Padding(
          padding: const EdgeInsets.fromLTRB(50, 5, 50, 5),
          child: RaisedButton(
            textColor: kColorPrimary,
            child: Text("Suivant"),
            color: kColorWhite,
            onPressed: () => {
              _starterBloc.dispatch(StarterEvent.init),
              navigateToPage(context, AppPage()),
            },
          ),
        ),
      ),
      body: PrefList(
        tags: [
          "tourism",
          'recreation',
          'handicap',
        ],
        childrenType: [
          PrefType.button,
          PrefType.button,
          PrefType.gauge,
        ],
      ),
    );
  }
}
