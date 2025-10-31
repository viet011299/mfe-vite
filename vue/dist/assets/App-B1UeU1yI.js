import { importShared } from './__federation_fn_import-Dohbn7pL.js';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$1 = {
  name: "Counter",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    },
    reset() {
      this.count = 0;
    },
  },
};

const {toDisplayString:_toDisplayString,createElementVNode:_createElementVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');


const _hoisted_1$1 = { class: "counter" };
const _hoisted_2 = { class: "display" };
const _hoisted_3 = { class: "buttons" };

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock$1(), _createElementBlock$1("div", _hoisted_1$1, [
    _createElementVNode$1("div", _hoisted_2, _toDisplayString($data.count), 1),
    _createElementVNode$1("div", _hoisted_3, [
      _createElementVNode$1("button", {
        onClick: _cache[0] || (_cache[0] = (...args) => ($options.decrement && $options.decrement(...args))),
        class: "btn btn-red"
      }, "− Giảm"),
      _createElementVNode$1("button", {
        onClick: _cache[1] || (_cache[1] = (...args) => ($options.increment && $options.increment(...args))),
        class: "btn btn-green"
      }, "+ Tăng")
    ]),
    _createElementVNode$1("button", {
      onClick: _cache[2] || (_cache[2] = (...args) => ($options.reset && $options.reset(...args))),
      class: "btn btn-blue"
    }, "🔄 Reset")
  ]))
}
const Counter = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-eb98d557"]]);

const _sfc_main = {
  name: "App",
  components: {
    Counter,
  },
};

const {createElementVNode:_createElementVNode,resolveComponent:_resolveComponent,createVNode:_createVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');


const _hoisted_1 = { class: "app" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Counter = _resolveComponent("Counter");

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[0] || (_cache[0] = _createElementVNode("h1", null, "Remote Vue App (Standalone)", -1)),
    _createVNode(_component_Counter)
  ]))
}
const App = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-f5306d0e"]]);

export { App as A };
