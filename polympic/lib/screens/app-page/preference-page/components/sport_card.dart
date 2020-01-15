import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/category/category_bloc.dart';
import 'package:polympic/blocs/category/category_state.dart';
import 'package:polympic/models/category_model.dart';
import 'package:polympic/theme/colors.dart';

class SportCard extends StatefulWidget {
  const SportCard({
    Key key,
    @required this.data,
  }) : super(key: key);

  final CategoryModel data;

  @override
  _SportCardState createState() => _SportCardState();
}

class _SportCardState extends State<SportCard> {
  @override
  Widget build(BuildContext context) {
    final _categoryBloc = BlocProvider.of<CategoryBloc>(context).categoryBloc;

    void _toogleSport() {
      setState(() {
        this.widget.data.added = !this.widget.data.added;
        _categoryBloc.dispatch(CategoryEvent.update, {
          'category': this.widget.data,
          'checked': this.widget.data.added ? 'true' : 'false',
        });
      });
    }

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
                    child: Image.network(
                      this.widget.data.img,
                      fit: BoxFit.cover,
                      width: 50,
                      height: 50,
                    ),
                  ),
                ),
                SizedBox(width: 15),
                Text(
                  this.widget.data.name,
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
                  color: this.widget.data.added
                      ? kColorAccent
                      : kColorIconSelected,
                  onPressed: _toogleSport,
                  child: Text(this.widget.data.added ? 'Retirer' : 'Ajouter'),
                ),
              ),
            ),
          ],
        ));
  }
}
