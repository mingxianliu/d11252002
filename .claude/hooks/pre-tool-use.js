// 工具使用前的權限檢查 hook
// 此 hook 在每次使用工具前執行，用於檢查權限和記錄使用情況

module.exports = async function preToolUse(context) {
  const { toolName, arguments: args } = context;
  
  // 記錄工具使用情況
  console.log(`[${new Date().toISOString()}] 使用工具: ${toolName}`);
  
  // 檢查危險命令
  const dangerousCommands = ['rm -rf', 'sudo', 'chmod 777'];
  if (toolName === 'RunTerminalCmd') {
    const command = args.command || '';
    for (const dangerousCmd of dangerousCommands) {
      if (command.includes(dangerousCmd)) {
        throw new Error(`危險命令被阻擋: ${command}`);
      }
    }
  }
  
  // 檢查檔案操作權限
  if (toolName === 'EditFile' || toolName === 'DeleteFile') {
    const filePath = args.target_file || args.file_path;
    if (filePath && filePath.includes('node_modules')) {
      throw new Error('不允許修改 node_modules 目錄');
    }
  }
  
  return context; // 允許繼續執行
}; 