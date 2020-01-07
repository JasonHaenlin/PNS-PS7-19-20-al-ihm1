import 'package:flutter/material.dart';

navigateToPage(BuildContext context, Widget widget) {
  Navigator.push(
    context,
    MaterialPageRoute(builder: (context) => widget),
  );
}

navigateBackFromPage(BuildContext context) {
  Navigator.pop(context);
}
