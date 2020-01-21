import 'package:flutter/material.dart';
import 'package:polympic/core/router.dart';
import 'package:polympic/screens/app-page/preference-page/components/pref_container.dart';
import 'package:polympic/screens/app-page/preference-page/components/pref_list.dart';
import 'package:polympic/screens/starter-page/steps/country_step.dart';
import 'package:polympic/theme/colors.dart';

class SportStep extends StatelessWidget {
  const SportStep({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // final _starterBloc = BlocProvider.of<StarterBloc>(context).starterBloc;

    return Scaffold(
      appBar: AppBar(
        title: const Text("Quelles sont vos sports préférés ?"),
        automaticallyImplyLeading: false,
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
              // _starterBloc.dispatch(StarterEvent.init),
              navigateToPage(context, CountryStep()),
            },
          ),
        ),
      ),
      body: PrefList(
        tags: ["sport"],
        childrenType: [PrefType.button],
      ),
    );
  }
}
