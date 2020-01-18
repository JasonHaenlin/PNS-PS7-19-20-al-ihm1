import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/category/category_bloc.dart';
import 'package:polympic/blocs/category/category_state.dart';
import 'package:polympic/models/category_model.dart';
import 'package:polympic/screens/app-page/preference-page/components/pref_card_button.dart';
import 'package:polympic/screens/app-page/preference-page/components/pref_card_gauge.dart';

enum PrefType { button, gauge }

class PrefContainer extends StatelessWidget {
  const PrefContainer({
    Key key,
    @required this.childType,
    @required this.tag,
  }) : super(key: key);

  final PrefType childType;
  final String tag;

  Widget _buildCorrectCard(data) {
    switch (childType) {
      case PrefType.button:
        return PrefCardButton(data: data);
      case PrefType.gauge:
        return PrefCardGauge(data: data);
      default:
        return Container();
    }
  }

  @override
  Widget build(BuildContext context) {
    final _categoryBloc = BlocProvider.of<CategoryBloc>(context).categoryBloc;

    _categoryBloc.dispatch(CategoryEvent.fetch, {
      'tag': [tag]
    });

    return StreamBuilder<List<CategoryModel>>(
      stream: _categoryBloc.currentValue$,
      builder: (context, snapshot) => snapshot.hasData
          ? ListView.builder(
              shrinkWrap: true,
              physics: ScrollPhysics(),
              itemCount: snapshot.data.length,
              itemBuilder: (context, index) =>
                  _buildCorrectCard(snapshot.data[index]),
            )
          : Center(child: CircularProgressIndicator()),
    );
  }
}
