"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@mui/material/styles");

var _colors = _interopRequireDefault(require("assets/theme/base/colors"));

var _breakpoints = _interopRequireDefault(require("assets/theme/base/breakpoints"));

var _typography = _interopRequireDefault(require("assets/theme/base/typography"));

var _boxShadows = _interopRequireDefault(require("assets/theme/base/boxShadows"));

var _borders = _interopRequireDefault(require("assets/theme/base/borders"));

var _globals = _interopRequireDefault(require("assets/theme/base/globals"));

var _boxShadow = _interopRequireDefault(require("assets/theme/functions/boxShadow"));

var _hexToRgb = _interopRequireDefault(require("assets/theme/functions/hexToRgb"));

var _linearGradient = _interopRequireDefault(require("assets/theme/functions/linearGradient"));

var _pxToRem = _interopRequireDefault(require("assets/theme/functions/pxToRem"));

var _rgba = _interopRequireDefault(require("assets/theme/functions/rgba"));

var _sidenav = _interopRequireDefault(require("assets/theme/components/sidenav"));

var _list = _interopRequireDefault(require("assets/theme/components/list"));

var _listItem = _interopRequireDefault(require("assets/theme/components/list/listItem"));

var _listItemText = _interopRequireDefault(require("assets/theme/components/list/listItemText"));

var _card = _interopRequireDefault(require("assets/theme/components/card"));

var _cardMedia = _interopRequireDefault(require("assets/theme/components/card/cardMedia"));

var _cardContent = _interopRequireDefault(require("assets/theme/components/card/cardContent"));

var _iconButton = _interopRequireDefault(require("assets/theme/components/iconButton"));

var _input = _interopRequireDefault(require("assets/theme/components/form/input"));

var _inputLabel = _interopRequireDefault(require("assets/theme/components/form/inputLabel"));

var _inputOutlined = _interopRequireDefault(require("assets/theme/components/form/inputOutlined"));

var _textField = _interopRequireDefault(require("assets/theme/components/form/textField"));

var _menu = _interopRequireDefault(require("assets/theme/components/menu"));

var _menuItem = _interopRequireDefault(require("assets/theme/components/menu/menuItem"));

var _switchButton = _interopRequireDefault(require("assets/theme/components/form/switchButton"));

var _divider = _interopRequireDefault(require("assets/theme/components/divider"));

var _tableContainer = _interopRequireDefault(require("assets/theme/components/table/tableContainer"));

var _tableHead = _interopRequireDefault(require("assets/theme/components/table/tableHead"));

var _tableCell = _interopRequireDefault(require("assets/theme/components/table/tableCell"));

var _linearProgress = _interopRequireDefault(require("assets/theme/components/linearProgress"));

var _breadcrumbs = _interopRequireDefault(require("assets/theme/components/breadcrumbs"));

var _slider = _interopRequireDefault(require("assets/theme/components/slider"));

var _avatar = _interopRequireDefault(require("assets/theme/components/avatar"));

var _tooltip = _interopRequireDefault(require("assets/theme/components/tooltip"));

var _appBar = _interopRequireDefault(require("assets/theme/components/appBar"));

var _tabs = _interopRequireDefault(require("assets/theme/components/tabs"));

var _tab = _interopRequireDefault(require("assets/theme/components/tabs/tab"));

var _stepper = _interopRequireDefault(require("assets/theme/components/stepper"));

var _step = _interopRequireDefault(require("assets/theme/components/stepper/step"));

var _stepConnector = _interopRequireDefault(require("assets/theme/components/stepper/stepConnector"));

var _stepLabel = _interopRequireDefault(require("assets/theme/components/stepper/stepLabel"));

var _stepIcon = _interopRequireDefault(require("assets/theme/components/stepper/stepIcon"));

var _select = _interopRequireDefault(require("assets/theme/components/form/select"));

var _formControlLabel = _interopRequireDefault(require("assets/theme/components/form/formControlLabel"));

var _formLabel = _interopRequireDefault(require("assets/theme/components/form/formLabel"));

var _checkbox = _interopRequireDefault(require("assets/theme/components/form/checkbox"));

var _radio = _interopRequireDefault(require("assets/theme/components/form/radio"));

var _autocomplete = _interopRequireDefault(require("assets/theme/components/form/autocomplete"));

var _container = _interopRequireDefault(require("assets/theme/components/container"));

var _popover = _interopRequireDefault(require("assets/theme/components/popover"));

var _buttonBase = _interopRequireDefault(require("assets/theme/components/buttonBase"));

var _icon = _interopRequireDefault(require("assets/theme/components/icon"));

var _svgIcon = _interopRequireDefault(require("assets/theme/components/svgIcon"));

var _link = _interopRequireDefault(require("assets/theme/components/link"));

var _dialog = _interopRequireDefault(require("assets/theme/components/dialog"));

var _dialogTitle = _interopRequireDefault(require("assets/theme/components/dialog/dialogTitle"));

var _dialogContent = _interopRequireDefault(require("assets/theme/components/dialog/dialogContent"));

var _dialogContentText = _interopRequireDefault(require("assets/theme/components/dialog/dialogContentText"));

var _dialogActions = _interopRequireDefault(require("assets/theme/components/dialog/dialogActions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _styles.createTheme)({
  breakpoints: _objectSpread({}, _breakpoints["default"]),
  palette: _objectSpread({}, _colors["default"], {
    mode: "light",
    background: {
      "default": _colors["default"].background["default"],
      paper: _colors["default"].white.main
    },
    text: {
      primary: _colors["default"].text.main,
      secondary: _colors["default"].text.focus
    }
  }),
  typography: _objectSpread({}, _typography["default"]),
  boxShadows: _objectSpread({}, _boxShadows["default"]),
  borders: _objectSpread({}, _borders["default"]),
  functions: {
    boxShadow: _boxShadow["default"],
    hexToRgb: _hexToRgb["default"],
    linearGradient: _linearGradient["default"],
    pxToRem: _pxToRem["default"],
    rgba: _rgba["default"]
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: _objectSpread({}, _globals["default"], {}, _container["default"])
    },
    MuiDrawer: _objectSpread({}, _sidenav["default"]),
    MuiList: _objectSpread({}, _list["default"]),
    MuiListItem: _objectSpread({}, _listItem["default"]),
    MuiListItemText: _objectSpread({}, _listItemText["default"]),
    MuiCard: _objectSpread({}, _card["default"]),
    MuiCardMedia: _objectSpread({}, _cardMedia["default"]),
    MuiCardContent: _objectSpread({}, _cardContent["default"]),
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          "&.MuiButton-contained": {
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none"
            }
          },
          "&.MuiButton-outlined": {
            "&:hover": {
              backgroundColor: "transparent"
            }
          },
          "&.MuiButton-text": {
            "&:hover": {
              backgroundColor: "transparent"
            }
          }
        }
      },
      defaultProps: {
        disableRipple: false
      }
    },
    MuiIconButton: _objectSpread({}, _iconButton["default"]),
    MuiInput: _objectSpread({}, _input["default"]),
    MuiInputLabel: _objectSpread({}, _inputLabel["default"]),
    MuiOutlinedInput: _objectSpread({}, _inputOutlined["default"]),
    MuiTextField: _objectSpread({}, _textField["default"]),
    MuiMenu: _objectSpread({}, _menu["default"]),
    MuiMenuItem: _objectSpread({}, _menuItem["default"]),
    MuiSwitch: _objectSpread({}, _switchButton["default"]),
    MuiDivider: _objectSpread({}, _divider["default"]),
    MuiTableContainer: _objectSpread({}, _tableContainer["default"]),
    MuiTableHead: _objectSpread({}, _tableHead["default"]),
    MuiTableCell: _objectSpread({}, _tableCell["default"]),
    MuiLinearProgress: _objectSpread({}, _linearProgress["default"]),
    MuiBreadcrumbs: _objectSpread({}, _breadcrumbs["default"]),
    MuiSlider: _objectSpread({}, _slider["default"]),
    MuiAvatar: _objectSpread({}, _avatar["default"]),
    MuiTooltip: _objectSpread({}, _tooltip["default"]),
    MuiAppBar: _objectSpread({}, _appBar["default"]),
    MuiTabs: _objectSpread({}, _tabs["default"]),
    MuiTab: _objectSpread({}, _tab["default"]),
    MuiStepper: _objectSpread({}, _stepper["default"]),
    MuiStep: _objectSpread({}, _step["default"]),
    MuiStepConnector: _objectSpread({}, _stepConnector["default"]),
    MuiStepLabel: _objectSpread({}, _stepLabel["default"]),
    MuiStepIcon: _objectSpread({}, _stepIcon["default"]),
    MuiSelect: _objectSpread({}, _select["default"]),
    MuiFormControlLabel: _objectSpread({}, _formControlLabel["default"]),
    MuiFormLabel: _objectSpread({}, _formLabel["default"]),
    MuiCheckbox: _objectSpread({}, _checkbox["default"]),
    MuiRadio: _objectSpread({}, _radio["default"]),
    MuiAutocomplete: _objectSpread({}, _autocomplete["default"]),
    MuiPopover: _objectSpread({}, _popover["default"]),
    MuiButtonBase: _objectSpread({}, _buttonBase["default"]),
    MuiIcon: _objectSpread({}, _icon["default"]),
    MuiSvgIcon: _objectSpread({}, _svgIcon["default"]),
    MuiLink: _objectSpread({}, _link["default"]),
    MuiDialog: _objectSpread({}, _dialog["default"]),
    MuiDialogTitle: _objectSpread({}, _dialogTitle["default"]),
    MuiDialogContent: _objectSpread({}, _dialogContent["default"]),
    MuiDialogContentText: _objectSpread({}, _dialogContentText["default"]),
    MuiDialogActions: _objectSpread({}, _dialogActions["default"])
  }
});

exports["default"] = _default;