import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/category/category_bloc.dart';
import 'package:polympic/blocs/category/category_state.dart';
import 'package:polympic/models/category_model.dart';
import 'package:polympic/theme/colors.dart';

class PrefCardButton extends StatefulWidget {
  const PrefCardButton({
    Key key,
    @required this.data,
  }) : super(key: key);

  final CategoryModel data;

  @override
  _PrefCardButtonState createState() => _PrefCardButtonState();
}

class _PrefCardButtonState extends State<PrefCardButton> {
  @override
  Widget build(BuildContext context) {
    final _categoryBloc = BlocProvider.of<CategoryBloc>(context).categoryBloc;

    return InkWell(
      splashColor: kColorAccent,
      onTap: () => {
        setState(
          () => this.widget.data.state = !this.widget.data.state,
        ),
        _categoryBloc.dispatch(CategoryEvent.update,
            {'category': this.widget.data, 'value': this.widget.data.state}),
      },
      child: Card(
        clipBehavior: Clip.antiAliasWithSaveLayer,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(45.0),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Image.network(
                  this.widget.data.img,
                  fit: BoxFit.cover,
                  width: 100,
                  height: 80,
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                    this.widget.data.name,
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 16,
                    ),
                  ),
                ),
                SizedBox(width: 20),
              ],
            ),
            Row(
              children: <Widget>[
                Icon(
                  this.widget.data.state
                      ? Icons.check_circle
                      : FontAwesomeIcons.circle,
                  color: this.widget.data.state ? kColorAccent : kColorTextIcon,
                  size: 40.0,
                ),
                SizedBox(width: 20),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
