import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/category/category_bloc.dart';
import 'package:polympic/blocs/category/category_state.dart';
import 'package:polympic/models/category_model.dart';
import 'package:polympic/theme/colors.dart';

class SportCard extends StatelessWidget {
  const SportCard({
    Key key,
    @required this.data,
  }) : super(key: key);

  final CategoryModel data;

  @override
  Widget build(BuildContext context) {
    final _categoryBloc = BlocProvider.of<CategoryBloc>(context).categoryBloc;

    _categoryBloc.dispatch(CategoryEvent.fetch);

    return Container(
        decoration: BoxDecoration(
          border: Border(
            bottom: BorderSide(
              width: 0.3,
              color: Colors.grey,
            ),
          ),
        ),
        height: 80,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Row(
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.all(10.0),
                  child: Material(
                    borderRadius: BorderRadius.all(Radius.circular(8.0)),
                    clipBehavior: Clip.antiAlias,
                    elevation: 2.0,
                    child: Image.asset(
                      this.data.image,
                      fit: BoxFit.cover,
                      width: 50,
                      height: 50,
                    ),
                  ),
                ),
                SizedBox(width: 15),
                Text(
                  this.data.label,
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 16,
                  ),
                ),
              ],
            ),
            Padding(
              padding: const EdgeInsets.only(right: 25),
              child: Container(
                child: RaisedButton(
                  color: this.data.added ? kColorAccent : kColorIconSelected,
                  onPressed: () => {
                    _categoryBloc.dispatch(CategoryEvent.update, {
                      'category': this.data,
                      'checked': this.data.added ? 'false' : 'true',
                    }),
                  },
                  child: Text(this.data.added ? 'Ajouter' : 'Retirer'),
                ),
              ),
            ),
          ],
        ));
  }
}
