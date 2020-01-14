import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/category/category_bloc.dart';
import 'package:polympic/blocs/category/category_state.dart';
import 'package:polympic/blocs/event/event_bloc.dart';
import 'package:polympic/blocs/event/event_state.dart';
import 'package:polympic/blocs/starter/starter_bloc.dart';
import 'package:polympic/blocs/starter/starter_state.dart';
import 'package:polympic/core/router.dart';
import 'package:polympic/models/category_model.dart';
import 'package:polympic/screens/app-page/app_page.dart';
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
                  : Center(child: CircularProgressIndicator()),
        ),
      ),
    );
  }
}

class ChoosePreferences extends StatelessWidget {
  const ChoosePreferences({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final _categoryBloc = BlocProvider.of<CategoryBloc>(context).categoryBloc;

    _categoryBloc.dispatch(CategoryEvent.fetch, {
      'tag': ['sport']
    });

    return StreamBuilder<List<CategoryModel>>(
      stream: _categoryBloc.currentValue$,
      builder:
          (BuildContext context, AsyncSnapshot<List<CategoryModel>> snapshot) =>
              snapshot.hasData
                  ? SportStarterPage(data: snapshot.data)
                  : Center(
                      child: Column(
                      children: <Widget>[
                        Padding(
                          padding: const EdgeInsets.all(30.0),
                          child: Image.asset(
                            'assets/images/jo.png',
                            fit: BoxFit.cover,
                          ),
                        ),
                        CircularProgressIndicator(),
                      ],
                    )),
    );
  }
}

class SportStarterPage extends StatelessWidget {
  const SportStarterPage({
    Key key,
    @required List<CategoryModel> data,
  })  : _data = data,
        super(key: key);

  final List<CategoryModel> _data;

  @override
  Widget build(BuildContext context) {
    final _starterBloc = BlocProvider.of<StarterBloc>(context).starterBloc;
    final _eventBloc = BlocProvider.of<EventBloc>(context).eventBloc;

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
              _eventBloc.dispatch(EventEvent.fetch),
              navigateToPage(context, AppPage()),
            },
          ),
        ),
      ),
      body: ListView.builder(
        itemCount: _data.length,
        itemBuilder: (BuildContext context, int index) {
          return SportCard(data: _data[index]);
        },
      ),
    );
  }
}
