import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/category/category_bloc.dart';
import 'package:polympic/blocs/category/category_state.dart';
import 'package:polympic/blocs/starter/starter_bloc.dart';
import 'package:polympic/blocs/starter/starter_state.dart';
import 'package:polympic/components/progress/customProgressIndicator.dart';
import 'package:polympic/core/router.dart';
import 'package:polympic/models/category_model.dart';
import 'package:polympic/screens/app-page/app_page.dart';
import 'package:polympic/screens/app-page/preference-page/components/pref_container.dart';
import 'package:polympic/screens/app-page/preference-page/components/pref_list.dart';
import 'package:polympic/screens/app-page/preference-page/components/sport_card.dart';
import 'package:polympic/theme/colors.dart';

class StarterPage extends StatelessWidget {
  const StarterPage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final _starterBloc = BlocProvider.of<StarterBloc>(context).starterBloc;

    return Scaffold(
      body: Container(
        child: StreamBuilder<bool>(
          stream: _starterBloc.currentValue$,
          builder: (BuildContext context, AsyncSnapshot<bool> snapshot) =>
              snapshot.hasData
                  ? ChoosePreferences()
                  : CustomProgressIndicator(),
        ),
      ),
    );
  }
}

class ChoosePreferences extends StatelessWidget {
  const ChoosePreferences({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SportStarterPage();
  }
}

class SportStarterPage extends StatelessWidget {
  const SportStarterPage({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final _starterBloc = BlocProvider.of<StarterBloc>(context).starterBloc;

    return Scaffold(
      appBar: AppBar(
        title: const Text("Choisir vos Préférences"),
      ),
      bottomNavigationBar: BottomAppBar(
        elevation: 20,
        child: Padding(
          padding: const EdgeInsets.fromLTRB(50, 5, 50, 5),
          child: RaisedButton(
            child: Text(
              "Terminer",
              style: TextStyle(color: Colors.white),
            ),
            color: kColorPrimary,
            onPressed: () => {
              _starterBloc.dispatch(StarterEvent.init),
              navigateToPage(context, AppPage()),
            },
          ),
        ),
      ),
      body: PrefList(
        tags: ["sport"],
        childrensType: [PrefType.button],
      ),
    );
  }
}
