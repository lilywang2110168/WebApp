webpackJsonp([0],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* Copyright G. Hemingway, 2017 - All rights reserved */


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Business = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Business = exports.Business = function (_Component) {
    _inherits(Business, _Component);

    function Business(props) {
        _classCallCheck(this, Business);

        var _this = _possibleConstructorReturn(this, (Business.__proto__ || Object.getPrototypeOf(Business)).call(this, props));

        _this.productID = _this.productID.bind(_this);
        _this.brandName = _this.brandName.bind(_this);

        _this.state = {
            products: [],
            analysis: ""
        };
        return _this;
    }

    _createClass(Business, [{
        key: 'productID',
        value: function productID(ev) {
            var _this2 = this;

            ev.preventDefault();

            var productID = document.getElementById('productID').value;

            $.ajax({
                url: "/v1/product/" + productID,
                method: "get",
                success: function success(data) {
                    _this2.setState({ products: [data]
                    });
                }
            });
        }
    }, {
        key: 'brandName',
        value: function brandName(ev) {
            var _this3 = this;

            ev.preventDefault();
            var brand = document.getElementById('brand').value;

            $.ajax({
                url: "/v1/brand/" + brand,
                method: "get",
                success: function success(data) {
                    _this3.setState({
                        products: data
                    });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            //display the products
            var products = this.state.products.map(function (product, index) {
                var productLink = "/product/" + product.id;
                return _react2.default.createElement(
                    'div',
                    { className: 'row', key: index },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-3' },
                        ' '
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-8' },
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: productLink, key: index },
                            _react2.default.createElement(
                                'p',
                                null,
                                product.name
                            ),
                            _react2.default.createElement('img', { src: product.image }),
                            _react2.default.createElement(
                                'p',
                                null,
                                product.description
                            )
                        ),
                        _react2.default.createElement('br', null)
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement('div', { className: 'col-xs-4' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-6' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            'Welcome Amazon Sellers'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement('div', { className: 'col-xs-2' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-8' },
                        _react2.default.createElement(
                            'div',
                            { className: 'center-block' },
                            _react2.default.createElement('p', { id: 'errorMsg', className: 'bg-danger' })
                        ),
                        _react2.default.createElement(
                            'form',
                            { className: 'form-horizontal' },
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'col-sm-2 control-label', htmlFor: 'username' },
                                    'Product ID:'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-10' },
                                    _react2.default.createElement('input', { className: 'form-control', id: 'productID', type: 'text', placeholder: '1234324QW3' })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-offset-2 col-sm-10' },
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'btn btn-default', onClick: this.productID },
                                        'Search'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'form',
                            { className: 'form-horizontal' },
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'col-sm-2 control-label', htmlFor: 'username' },
                                    'Brand Name:'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-10' },
                                    _react2.default.createElement('input', { className: 'form-control', id: 'brand', type: 'text', placeholder: 'Apple' })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-offset-2 col-sm-10' },
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'btn btn-default', onClick: this.brandName },
                                        'Search'
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement('div', { className: 'col-xs-2' })
                ),
                products
            );
        }
    }]);

    return Business;
}(_react.Component);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36)))

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* Copyright G. Hemingway, 2017 - All rights reserved */


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Customer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Customer = exports.Customer = function (_Component) {
    _inherits(Customer, _Component);

    function Customer(props) {
        _classCallCheck(this, Customer);

        var _this = _possibleConstructorReturn(this, (Customer.__proto__ || Object.getPrototypeOf(Customer)).call(this, props));

        _this.category = _this.category.bind(_this);
        _this.feature = _this.feature.bind(_this);
        _this.state = {
            features: [],
            ranking: []
        };
        return _this;
    }

    _createClass(Customer, [{
        key: 'category',
        value: function category(ev) {
            var _this2 = this;

            ev.preventDefault();

            var category = document.getElementById('category').value;
            $.ajax({
                url: "/v1/category/" + category,
                method: "get",
                success: function success(data) {
                    _this2.setState({ features: data
                    });
                }
            });
        }
    }, {
        key: 'feature',
        value: function feature(ev) {
            var _this3 = this;

            ev.preventDefault();
            var features = [];
            var featuresID = [];
            var url = "/v1/feature/";

            for (var i = 0; i < this.state.features.length; i++) {
                if ($('#' + i).is(":checked")) {
                    url = url + i + '&';
                    features.push(this.state.features[i]);
                }
            }
            console.log(features);
            console.log(featuresID);
            console.log(url);

            $.ajax({
                url: url,
                method: "get",
                success: function success(data) {
                    console.log(data);
                    _this3.setState({ ranking: data
                    });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var features = void 0;
            if (this.state.features.length > 0) {
                features = this.state.features.map(function (feature, index) {
                    return _react2.default.createElement(
                        'label',
                        { key: index, className: 'checkbox-inline' },
                        _react2.default.createElement('input', { id: index, type: 'checkbox', value: '' }),
                        feature
                    );
                });

                //create the form that submits the features
                features = _react2.default.createElement(
                    'form',
                    { className: 'form-horizontal' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-3' },
                            ' '
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-8' },
                            features,
                            _react2.default.createElement(
                                'div',
                                { className: 'col-sm-offset-2 col-sm-10' },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'btn btn-default', onClick: this.feature },
                                    'Submit'
                                )
                            )
                        )
                    )
                );
            }

            var products = void 0;

            if (this.state.ranking.length > 0) {
                products = this.state.ranking.map(function (product, index) {
                    var productLink = "https://www.amazon.com/dp/" + product.id;
                    return _react2.default.createElement(
                        'div',
                        { className: 'row', key: index },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-3' },
                            ' '
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-8' },
                            _react2.default.createElement(
                                'a',
                                { href: productLink },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    product.name
                                ),
                                _react2.default.createElement('img', { src: product.image }),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    product.description
                                )
                            ),
                            ' ',
                            _react2.default.createElement('br', null)
                        )
                    );
                });
            }

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-4' },
                        ' '
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-6' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            'Welcome Amazon Buyers'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-2' },
                        ' '
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-8' },
                        _react2.default.createElement(
                            'form',
                            { className: 'form-horizontal' },
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'col-sm-2 control-label', htmlFor: 'username' },
                                    'Product Category:'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-10' },
                                    _react2.default.createElement('input', { className: 'form-control', id: 'category', type: 'text', placeholder: 'Laptops' })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-offset-2 col-sm-10' },
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'btn btn-default', onClick: this.category },
                                        'Search'
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-2' },
                        ' '
                    )
                ),
                features,
                products
            );
        }
    }]);

    return Customer;
}(_react.Component);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36)))

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright G. Hemingway, 2017 - All rights reserved */


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Header = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.GravHash = GravHash;

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

var _md = __webpack_require__(151);

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

function GravHash(email, size) {
    var hash = email.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    hash = hash.toLowerCase();
    hash = (0, _md2.default)(hash);
    return 'https://www.gravatar.com/avatar/' + hash + '?size=' + size;
}

var Header = exports.Header = function (_Component) {
    _inherits(Header, _Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }

    _createClass(Header, [{
        key: 'onClick',
        value: function onClick() {
            var _props$user$getUser = this.props.user.getUser(),
                username = _props$user$getUser.username;

            _reactRouter.browserHistory.push('/profile/' + username);
        }
    }, {
        key: 'render',
        value: function render() {
            var user = this.props.user.getUser();
            var right = user.username !== '' ? _react2.default.createElement('div', { className: 'header' }) : _react2.default.createElement('div', { className: 'col-xs-4 right-nav' });

            return _react2.default.createElement(
                'nav',
                { className: 'navbar navbar-default navbar-static-top' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-xs-8' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Amazon Project'
                    )
                ),
                right
            );
        }
    }]);

    return Header;
}(_react.Component);

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright G. Hemingway, 2017 - All rights reserved */


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Landing = undefined;

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*************************************************************************/

var Landing = exports.Landing = function Landing() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement('div', { className: 'col-xs-5' }),
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-6' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Welcome'
                    ),
                    _react2.default.createElement('br', null),
                    ' ',
                    _react2.default.createElement('br', null)
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement('div', { className: 'col-xs-4' }),
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-6' },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/seller' },
                        '   ',
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-default landingButton' },
                            'Seller'
                        ),
                        ' '
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement('div', { className: 'col-xs-4' }),
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-6' },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/buyer' },
                        '  ',
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-default landingButton' },
                            'Buyer'
                        )
                    )
                )
            )
        )
    );
};

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* Copyright G. Hemingway, 2017 - All rights reserved */


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Product = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*************************************************************************/

var Product = exports.Product = function (_Component) {
    _inherits(Product, _Component);

    function Product(props) {
        _classCallCheck(this, Product);

        var _this = _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).call(this, props));

        _this.state = {
            data: ""
        };

        return _this;
    }

    _createClass(Product, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            $.ajax({
                url: '/v1/analytics/' + this.props.params.id,
                method: "get",
                success: function success(data) {
                    console.log(data);
                    _this2.setState({ data: data });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var analytics = void 0;
            if (this.state.data) {

                var products = this.state.data.features.map(function (product, index) {
                    return _react2.default.createElement(
                        'tr',
                        { key: index },
                        _react2.default.createElement(
                            'th',
                            null,
                            product
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            '4'
                        )
                    );
                });

                analytics = _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement('div', { className: 'col-xs-4' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-6' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            this.state.data.name
                        ),
                        _react2.default.createElement('img', { src: this.state.data.image }),
                        _react2.default.createElement(
                            'h3',
                            null,
                            'Description'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            this.state.data.description
                        ),
                        _react2.default.createElement(
                            'h3',
                            null,
                            'Features'
                        ),
                        _react2.default.createElement(
                            'table',
                            { id: 'gameTable', className: 'col-xs-12 table' },
                            _react2.default.createElement(
                                'thead',
                                null,
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        'Feature'
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        'Score'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'tbody',
                                null,
                                products
                            ),
                            ' '
                        ),
                        _react2.default.createElement(
                            'h3',
                            null,
                            'Demographics'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            this.state.data.graph
                        )
                    )
                );
            }
            return _react2.default.createElement(
                'div',
                null,
                analytics
            );
        }
    }]);

    return Product;
}(_react.Component);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36)))

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(255)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./app.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./app.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright G. Hemingway, 2017 - All rights reserved */


// Necessary modules

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(47);

var _reactRouter = __webpack_require__(21);

var _header = __webpack_require__(121);

var _landing = __webpack_require__(122);

var _customer = __webpack_require__(120);

var _business = __webpack_require__(119);

var _product = __webpack_require__(123);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Bring bootstrap into the picture
__webpack_require__(124);

/*************************************************************************/

var MyApp = function (_Component) {
    _inherits(MyApp, _Component);

    function MyApp(props) {
        _classCallCheck(this, MyApp);

        return _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this, props));
    }

    _createClass(MyApp, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_header.Header, { user: this.props.route.user }),
                this.props.children
            );
        }
    }]);

    return MyApp;
}(_react.Component);

var User = function () {
    function User() {
        _classCallCheck(this, User);

        // See if user is in localStorage
        var data = localStorage.getItem('user');
        this.data = data ? JSON.parse(data) : {
            username: "",
            primary_email: ""
        };
    }

    _createClass(User, [{
        key: 'logIn',
        value: function logIn(data) {
            // Store locally
            this.data = data;
            // Store into localStorage
            localStorage.setItem('user', JSON.stringify(data));
            // Go to user profile
            _reactRouter.browserHistory.push('/profile/' + data.username);
        }
    }, {
        key: 'logOut',
        value: function logOut() {
            // Remove user info
            this.data = {
                username: "",
                primary_email: ""
            };
            // Wipe localStorage
            localStorage.removeItem('user');
            // Go to login page
            _reactRouter.browserHistory.push('/login');
        }
    }, {
        key: 'getUser',
        value: function getUser() {
            return this.data;
        }
    }]);

    return User;
}();

var user = new User();

(0, _reactDom.render)(_react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(
        _reactRouter.Route,
        { path: '/', component: MyApp, user: user },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: _landing.Landing }),
        _react2.default.createElement(_reactRouter.Route, { path: '/buyer', component: _customer.Customer, user: user }),
        _react2.default.createElement(_reactRouter.Route, { path: '/seller', component: _business.Business, user: user }),
        _react2.default.createElement(_reactRouter.Route, { path: '/product/:id', component: _product.Product })
    )
), document.getElementById('mainDiv'));

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(128)();
// imports


// module
exports.push([module.i, ".navbar-static-top {\n    margin-left: -14px;\n    margin-right: -24px;\n}\n\n.right-nav {\n    text-align: right;\n    padding-top: 10px;\n    padding-right: 20px;\n}\n\n.right-nav a {\n    display: block;\n}\n\ntable#gameTable tbody tr:hover {\n    background: #6495ed;\n    cursor: pointer;\n}\n\n.card-base {\n    position: relative;\n}\n\n.card-row img {\n    width: 25%;\n    padding: 0;\n    margin: 0 -2px 0 -2px;\n}\n\n.card-float img {\n    width: 25%;\n    position: absolute;\n    top: 37.5%;\n    left: 37.5%;\n}\n\n#errorMsg {\n    text-align: center;\n}\n\n.header {\n    float: right;\n}\n\n.header img {\n    border-radius: 5px;\n    margin: 10px;\n}\n\n.landingButton{\n    font-size:50px;\n    width:50%\n}", ""]);

// exports


/***/ }),

/***/ 128:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 150:
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(126),
      utf8 = __webpack_require__(74).utf8,
      isBuffer = __webpack_require__(150),
      bin = __webpack_require__(74).bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),

/***/ 255:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 74:
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ })

},[125]);
//# sourceMappingURL=main.map