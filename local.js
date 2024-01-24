const cn = {
  steps: {
    one: "选择项目",
    two: "确认文件",
    three: "配置并导出",
  },
  next: "下一步",
  compFile: "ofa.js组件文件",
  pageFile: "ofa.js页面文件",
  jsFile: "Javascript文件",
  cssFile: "CSS文件",
  htmlFile: "普通HTML文件",
  p1: {
    title: "ofa.js项目混淆器",
    btn: "选择本地的 ofa.js 项目",
    desc: "不用担心上传到服务器，因为这个应用没有服务端，是直接在浏览器上完成所有操作！！",
    unPortTitle:
      "你的浏览器暂时不支持该应用，请使用最新的 Chrome 浏览器来访问这个应用；",
    unPortDesc:
      "因为这个工具是通过 File Access API 访问你本地文件夹进行混淆的，你当前的浏览器不支持这个API。",
  },
  p2: {
    title: "确认要压缩混淆的文件",
    desc: "项目扫描中。。。",
  },
  p3: {
    title: "接下来将对下面文件进行压缩混淆",
    desc: "请选择要文件的处理方式",
    btn1: "源文件旁生成min文件",
    btn2: "直接覆盖",
    ok: "转换完成",
    errdesc: "以下文件转换失败，请检查文件是否出错。",
    coverTips: "此操作不可撤销，请备份好你的源文件，是否覆盖源文件？",
  },
};

const en = {
  steps: {
    one: "Select Project",
    two: "Confirm Files",
    three: "Configure and Export",
  },
  next: "Next",
  compFile: "ofa.js Component File",
  pageFile: "ofa.js Page File",
  jsFile: "Javascript File",
  cssFile: "CSS File",
  htmlFile: "Plain HTML File",
  p1: {
    title: "ofa.js Project Obfuscator",
    btn: "Select local ofa.js project",
    desc: "No need to worry about uploading to a server, as this application has no server-side and performs all operations directly in the browser!!",
    unPortTitle:
      "Your browser temporarily does not support this application. Please use the latest Chrome browser to access this application;",
    unPortDesc:
      "Because this tool accesses your local folders through the File Access API for obfuscation, your current browser does not support this API.",
  },
  p2: {
    title: "Confirm files to compress and obfuscate",
    desc: "Scanning project...",
  },
  p3: {
    title: "Next, compress and obfuscate the following files",
    desc: "Please select the processing method for the files",
    btn1: "Generate min files next to source files",
    btn2: "Overwrite directly",
    ok: "Conversion completed",
    errdesc:
      "The following files failed to convert. Please check if there are any errors in the files.",
    coverTips:
      "This operation is irreversible. Please back up your source files. Do you want to overwrite the source files?",
  },
};

export const local = $.stanz({
  value: localStorage.getItem("__local"),
});

if (!local.value) {
  local.value = "en";
}

local.watch(() => {
  Object.assign(locals, local.value === "cn" ? cn : en);
  localStorage.setItem("__local", local.value);
});

export const locals = $.stanz(local.value === "cn" ? cn : en);

export default function t(key) {
  return locals.get(key);
}
