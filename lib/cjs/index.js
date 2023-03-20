"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConpayButton = void 0;
const react_1 = __importStar(require("react"));
const Button_1 = __importDefault(require("./Button"));
const ConpayButton = ({ productAddress: address, properties: _properties }) => {
    const [popupWindow, setPopupWindow] = (0, react_1.useState)(null);
    const [properties, setProperties] = (0, react_1.useState)(JSON.stringify({ createdWith: 'Conpay' }));
    (0, react_1.useEffect)(() => {
        console.log(address, _properties);
        if (_properties) {
            setProperties(JSON.stringify(Object.assign(Object.assign({}, _properties), { createdWith: 'Conpay' })));
        }
    }, []);
    const togglePopupVisibility = () => {
        if (popupWindow && !popupWindow.closed) {
            popupWindow.close();
            setPopupWindow(null);
        }
        else {
            const width = 450;
            const height = 680;
            const left = window.screen.width / 2 - width / 2;
            const top = window.screen.height / 2 - height / 2;
            const features = `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes,status=yes`;
            const newPopupWindow = window.open(`https://conpay-business.vercel.app/popup/${address}/${properties}/login`, 'ConpayPopup', features);
            setPopupWindow(newPopupWindow || null);
        }
    };
    return react_1.default.createElement(Button_1.default, { title: 'Pay with Conpay', onClick: togglePopupVisibility, logo: true });
};
exports.ConpayButton = ConpayButton;
exports.default = ConpayButton;
