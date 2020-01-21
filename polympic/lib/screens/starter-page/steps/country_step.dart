import 'package:flutter/material.dart';
import 'package:polympic/core/router.dart';
import 'package:polympic/screens/app-page/preference-page/components/pref_container.dart';
import 'package:polympic/screens/app-page/preference-page/components/pref_list.dart';
import 'package:polympic/screens/starter-page/steps/tourism_step.dart';
import 'package:polympic/theme/colors.dart';

class CountryStep extends StatelessWidget {
  const CountryStep({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Pour quelles pays êtes vous ?"),
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
              navigateToPage(context, TourismStep()),
            },
          ),
        ),
      ),
      body: PrefList(
        tags: ["country"],
        childrenType: [PrefType.button],
      ),
    );
  }
}
