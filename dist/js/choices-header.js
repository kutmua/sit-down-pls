/* selects */
const elements = document.querySelectorAll('.select-custom');
elements.forEach(elem => {
  const choices = new Choices(elem, {
    searchEnabled: false,
    position: 'bottom',
    placeholder: true,
    itemSelectText: '',
    silent: true,
    shouldSort: false
  });
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjaG9pY2VzLWhlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzZWxlY3RzICovXHJcbmNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdC1jdXN0b20nKTtcclxuZWxlbWVudHMuZm9yRWFjaChlbGVtID0+IHtcclxuICBjb25zdCBjaG9pY2VzID0gbmV3IENob2ljZXMoZWxlbSwge1xyXG4gICAgc2VhcmNoRW5hYmxlZDogZmFsc2UsXHJcbiAgICBwb3NpdGlvbjogJ2JvdHRvbScsXHJcbiAgICBwbGFjZWhvbGRlcjogdHJ1ZSxcclxuICAgIGl0ZW1TZWxlY3RUZXh0OiAnJyxcclxuICAgIHNpbGVudDogdHJ1ZSxcclxuICAgIHNob3VsZFNvcnQ6IGZhbHNlXHJcbiAgfSk7XHJcbn0pIl0sImZpbGUiOiJjaG9pY2VzLWhlYWRlci5qcyJ9
