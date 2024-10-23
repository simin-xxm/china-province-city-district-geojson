const fs = require('fs');
const path = require('path');

const dataDir = path.resolve(__dirname, './src/data'); // 设置数据目录路径

fs.readdir(dataDir, (err, files) => {
  if (err) {
    console.error('读取目录失败:', err);
    return;
  }

  files.forEach(file => {
    if (file.endsWith('_full.json')) {
      const oldPath = path.join(dataDir, file); // 旧路径
      const newFileName = file.replace('_full', ''); // 新文件名
      const newPath = path.join(dataDir, newFileName); // 新路径

      // 重命名文件
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(`重命名失败: ${oldPath} -> ${newPath}`, err);
        } else {
          console.log(`重命名成功: ${oldPath} -> ${newPath}`);
        }
      });
    }
  });
});
