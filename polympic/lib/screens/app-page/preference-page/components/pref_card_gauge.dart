import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/category/category_bloc.dart';
import 'package:polympic/blocs/category/category_state.dart';
import 'package:polympic/models/category_model.dart';

class PrefCardGauge extends StatelessWidget {
  const PrefCardGauge({
    Key key,
    @required this.data,
  }) : super(key: key);

  final CategoryModel data;

  @override
  Widget build(BuildContext context) {
    return Card(
      clipBehavior: Clip.antiAliasWithSaveLayer,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(45.0),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: <Widget>[
          Image.network(
            data.img,
            fit: BoxFit.cover,
            width: 100,
            height: 80,
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(8, 8, 0, 0),
            child: Wrap(
              direction: Axis.vertical,
              spacing: 5.0,
              runSpacing: 4.0,
              children: <Widget>[
                Text(
                  data.name,
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 16,
                  ),
                ),
                PrefSlider(data: this.data, value: this.data.state),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class PrefSlider extends StatefulWidget {
  const PrefSlider({
    Key key,
    @required CategoryModel data,
    @required double value,
  })  : _data = data,
        _startingValue = value,
        super(key: key);

  final CategoryModel _data;
  final double _startingValue;

  @override
  _PrefSliderState createState() => _PrefSliderState();
}

class _PrefSliderState extends State<PrefSlider> {
  static dynamic colors = <double, Color>{
    1.0: Colors.green,
    2.0: Colors.orange,
    3.0: Colors.red,
  };

  static dynamic indications = <double, String>{
    1.0: "Aucune difficulté",
    2.0: "Difficile",
    3.0: "Très réduite",
  };

  double _sliderValue = 2;

  @override
  void initState() {
    super.initState();
    _sliderValue = this.widget._startingValue;
  }

  @override
  Widget build(BuildContext context) {
    final _categoryBloc = BlocProvider.of<CategoryBloc>(context).categoryBloc;

    return Container(
      child: Stack(
        alignment: Alignment.topRight,
        children: <Widget>[
          Text(
            indications[_sliderValue],
            style: TextStyle(color: colors[_sliderValue]),
          ),
          Slider(
            activeColor: colors[_sliderValue],
            min: 1.0,
            max: 3.0,
            divisions: 2,
            value: _sliderValue,
            onChanged: (newValue) {
              setState(() => _sliderValue = newValue);
              _categoryBloc.dispatch(CategoryEvent.update,
                  {'category': this.widget._data, 'value': _sliderValue});
            },
          ),
        ],
      ),
    );
  }
}
