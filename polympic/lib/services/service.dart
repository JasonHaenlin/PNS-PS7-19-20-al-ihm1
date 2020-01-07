class Service {
  Future<int> getData() async {
    await Future.delayed(const Duration(seconds: 1));
    return 2;
  }
}

Service service = Service();
