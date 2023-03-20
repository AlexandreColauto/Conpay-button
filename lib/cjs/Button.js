"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button = ({ title, onClick, logo }) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { style: styles.buttonContainer, onClick: onClick },
            react_1.default.createElement("div", { style: {
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "70%",
                } },
                react_1.default.createElement(LogoWhite, { width: 50, height: 50 }),
                react_1.default.createElement("p", { style: styles.buttonText }, title)))));
};
exports.default = Button;
const styles = {
    buttonContainer: {
        height: "56px",
        borderRadius: "30px",
        marginTop: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #23232329",
        cursor: "pointer",
        background: "linear-gradient(135deg, #fe5958 0%, #fe9f7f 100%)",
        width: "100%",
    },
    buttonText: {
        color: "#ffffff",
        fontFamily: "Poppins, sans-serif",
        fontSize: "17px",
    }
};
const LogoWhite = ({ width, height }) => {
    return react_1.default.createElement("svg", { id: "Layer_1", style: { width, height }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 500 500` },
        react_1.default.createElement("path", { fill: "#ffffff", fillOpacity: "1", style: { color: "white" }, className: "cls-1", d: "m379.82,241.5v-39.67c0-16.56-8.84-31.88-23.2-40.16l-83.43-48.17c-14.35-8.29-32.04-8.29-46.38,0l-83.43,48.17c-14.35,8.28-23.2,23.6-23.2,40.16v96.34c0,16.56,8.84,31.89,23.2,40.16l83.43,48.17c14.34,8.29,32.03,8.29,46.38,0l83.43-48.17c14.35-8.28,23.2-23.6,23.2-40.16v-16.31l-32.9-19v16.31c0,16.57-8.84,31.89-23.2,40.17l-53.2,30.71c-12.7,7.33-28.34,7.33-41.04,0l-53.19-30.71c-14.35-8.29-23.2-23.6-23.2-40.17v-58.34c0-16.57,8.84-31.89,23.2-40.17l53.19-30.71c12.7-7.33,28.34-7.33,41.04,0l53.2,30.71c14.35,8.29,23.2,23.6,23.2,40.17v1.67l32.9,19Z" }));
};
