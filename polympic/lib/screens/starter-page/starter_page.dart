import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/starter/starter_bloc.dart';
import 'package:polympic/components/progress/customProgressIndicator.dart';
import 'package:polympic/screens/app-page/app_page.dart';
import 'package:polympic/screens/starter-page/steps/sport_step.dart';

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
                  ? (snapshot.data ? AppPage() : ChoosePreferences())
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
    return SportStep();
  }
}
