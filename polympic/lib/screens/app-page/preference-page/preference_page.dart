import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/category/category_bloc.dart';
import 'package:polympic/blocs/category/category_state.dart';
import 'package:polympic/core/router.dart';
import 'package:polympic/screens/app-page/preference-page/components/pref_container.dart';
import 'package:polympic/screens/app-page/preference-page/components/pref_list.dart';

class PreferencePage extends StatelessWidget {
  const PreferencePage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final _categoryBloc = BlocProvider.of<CategoryBloc>(context).categoryBloc;

    _categoryBloc.dispatch(CategoryEvent.fetch, {
      'tag': ['sport']
    });

    return DefaultTabController(
      length: 3,
      child: Scaffold(
        appBar: AppBar(
          title: const Text("Préférences"),
          leading: IconButton(
            icon: const Icon(Icons.arrow_back_ios),
            tooltip: 'close',
            onPressed: () => navigateBackFromPage(context),
          ),
          bottom: TabBar(
            tabs: [
              Tab(
                icon: Icon(FontAwesomeIcons.footballBall),
                text: "Sports",
                iconMargin: EdgeInsets.all(5),
              ),
              Tab(
                icon: Icon(FontAwesomeIcons.globe),
                text: "Pays",
                iconMargin: EdgeInsets.all(5),
              ),
              Tab(
                icon: Icon(FontAwesomeIcons.info),
                text: "Autres",
                iconMargin: EdgeInsets.all(5),
              ),
            ],
          ),
        ),
        body: TabBarView(
          children: [
            PrefList(
              tags: ["sport"],
              childrensType: [PrefType.button],
            ),
            PrefList(
              tags: ["country"],
              childrensType: [PrefType.button],
            ),
            PrefList(
              tags: [
                "recreation",
                "tourism",
                "handicap",
              ],
              childrensType: [
                PrefType.button,
                PrefType.button,
                PrefType.gauge,
              ],
            ),
          ],
        ),
      ),
    );
  }
}
