import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/category/category_bloc.dart';
import 'package:polympic/blocs/category/category_state.dart';
import 'package:polympic/models/category_model.dart';
import 'package:polympic/screens/app-page/preference-page/components/sport_list.dart';

class PreferenceSport extends StatelessWidget {
  const PreferenceSport({Key key}) : super(key: key);

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
                  ? SportsList(data: snapshot.data)
                  : Center(child: CircularProgressIndicator()),
    );
  }
}
