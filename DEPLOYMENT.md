# SolidWorks API MCP Server - Deployment Guide

## Overview

This guide explains how to deploy the SolidWorks API MCP Server to different platforms and environments.

## Deployment Options

### 1. Local Development (Standard MCP)

**Best for:** Development, testing, local use

**Requirements:**
- Python 3.8+
- No external dependencies

**Setup:**
```bash
git clone https://github.com/ZCAD-Products/sw-api-mcp.git
cd sw-api-mcp
python server/solidworks_mcp_server.py
```

**Entrypoint:**
- Script: `server/solidworks_mcp_server.py`
- Method: `main()` (automatic via `if __name__ == "__main__"`)

**Environment Variables:**
- `SW_API_DATA_ROOT` (optional) - Path to solidworks-api directory

---

### 2. Claude Desktop Integration

**Best for:** Using with Claude Desktop application

**Requirements:**
- Python 3.8+
- Claude Desktop installed
- No external dependencies

**Setup:**

1. Clone the repository:
```bash
git clone https://github.com/ZCAD-Products/sw-api-mcp.git
```

2. Locate your Claude Desktop config file:
   - **macOS/Linux**: `~/.config/Claude/claude_desktop_config.json`
   - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

3. Add the server configuration:

**macOS/Linux:**
```json
{
  "mcpServers": {
    "solidworks-api": {
      "command": "python",
      "args": ["/path/to/sw-api-mcp/server/solidworks_mcp_server.py"]
    }
  }
}
```

**Windows:**
```json
{
  "mcpServers": {
    "solidworks-api": {
      "command": "python",
      "args": ["C:\\path\\to\\sw-api-mcp\\server\\solidworks_mcp_server.py"]
    }
  }
}
```

4. Restart Claude Desktop

5. The SolidWorks API tools should now be available in Claude

**Configuration with custom data path:**
```json
{
  "mcpServers": {
    "solidworks-api": {
      "command": "python",
      "args": ["/path/to/sw-api-mcp/server/solidworks_mcp_server.py"],
      "env": {
        "SW_API_DATA_ROOT": "/custom/path/to/solidworks-api"
      }
    }
  }
}
```

---

### 3. FastMCP Cloud Deployment

**Best for:** Cloud hosting, remote access, managed deployments

**Requirements:**
- Python 3.8+
- FastMCP Cloud account
- Dependencies: `fastmcp>=2.12.3`

**Setup:**

1. Clone the repository:
```bash
git clone https://github.com/ZCAD-Products/sw-api-mcp.git
cd sw-api-mcp
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Deploy to FastMCP Cloud:
   - Repository: `https://github.com/ZCAD-Products/sw-api-mcp.git`
   - Entrypoint: `server/solidworks_mcp_server_fastmcp.py:main`
   - Python Version: 3.12 (recommended)

4. Configure environment variables in FastMCP Cloud:
   - `SW_API_DATA_ROOT` (optional) - Path to solidworks-api directory

**Build Configuration:**
- The build system will automatically detect `requirements.txt`
- FastMCP dependencies will be installed during build
- The `main()` function returns a FastMCP server instance

**Available Tools on FastMCP Cloud:**
1. `search_solidworks_api` - Search API documentation
2. `get_interface_details` - Get interface information
3. `get_method_details` - Get method/property details
4. `search_programming_guides` - Search guides and examples

---

## Troubleshooting

### Standard MCP Server Issues

**Problem: "Data root not found"**
- Ensure `solidworks-api` directory exists in the repository
- Check `SW_API_DATA_ROOT` environment variable if set
- Verify file permissions on the data directory

**Problem: "Server not responding"**
- Check that stdin/stdout are properly connected
- Ensure Python process isn't being terminated
- Check system logs for errors

---

### Claude Desktop Issues

**Problem: "Server failed to start"**
- Verify Python path is correct in config
- Check that the script file exists and is executable
- Try running the script directly to test: `python /path/to/solidworks_mcp_server.py`
- Restart Claude Desktop after config changes

**Problem: "Tools not appearing in Claude"**
- Restart Claude Desktop
- Check Claude's application logs
- Verify the config JSON is valid (use a JSON validator)

---

### FastMCP Cloud Build Issues

**Problem: "Factory function 'main' must return a FastMCP server instance"**
- Ensure you're using `server/solidworks_mcp_server_fastmcp.py`
- Verify the entrypoint is set to `server/solidworks_mcp_server_fastmcp.py:main`
- Check that `fastmcp` is in `requirements.txt`
- The `main()` function must return the FastMCP instance

**Problem: "Data root not found during build"**
- Ensure `solidworks-api` directory is included in the repository
- Check that `_index.json` exists in `solidworks-api/`
- Verify the directory structure matches expected layout

**Problem: "Build timeout or resource exhaustion"**
- The `solidworks-api` directory is large (178 MB+)
- Ensure upload bandwidth is sufficient
- Monitor build logs for specific errors
- Consider increasing build timeout limits

**Problem: "Module not found: fastmcp"**
- Verify `fastmcp` is in `requirements.txt`
- Ensure requirements.txt is at the repository root
- Check that the version specified is available: `fastmcp>=2.12.3`

---

## Performance Considerations

### Data Size
- **solidworks-api**: ~178 MB
- Contains complete SolidWorks API documentation
- Pre-indexed for fast search performance

### Memory Usage
- Indexes are loaded on first use and cached
- Typical memory footprint: 200-500 MB depending on usage
- FastMCP Cloud allocates resources automatically

### Search Performance
- First search may take slightly longer (index loading)
- Subsequent searches are very fast (< 100ms typical)
- Search index is optimized for common queries

---

## Security Considerations

### Data Protection
- All data is read-only (no modifications possible)
- SolidWorks API documentation is public information
- No authentication/authorization needed for local deployment

### Network Security (FastMCP Cloud)
- HTTPS/TLS encryption by default
- API keys managed by FastMCP Cloud platform
- Rate limiting available through FastMCP Cloud controls

---

## Environment Variables

### SW_API_DATA_ROOT
Optional path to the SolidWorks API data directory.

**Default:** `../solidworks-api` (relative to server script)

**Example:**
```bash
export SW_API_DATA_ROOT=/opt/solidworks-api
python server/solidworks_mcp_server.py
```

### FASTMCP_CLOUD_URL
Automatically set by FastMCP Cloud platform (cloud deployment only).

### FASTMCP_CLOUD_GIT_COMMIT_SHA
Automatically set by FastMCP Cloud platform (cloud deployment only).

---

## File Structure

```
sw-api-mcp/
├── server/
│   ├── solidworks_mcp_server.py           # Standard MCP (recommended)
│   └── solidworks_mcp_server_fastmcp.py   # FastMCP Cloud version
├── solidworks-api/
│   ├── _index.json
│   ├── _search_index.json
│   └── json/
│       ├── sldworksapi/
│       └── progguide/
├── README.md
├── DEPLOYMENT.md                          # This file
├── requirements.txt
└── .gitignore
```

---

## Choosing a Deployment Method

### Use Standard MCP if:
- Deploying to Claude Desktop
- Running locally for development
- No need for remote access
- Prefer minimal dependencies

### Use Claude Desktop if:
- Using Claude AI assistant
- Need seamless integration with Claude's interface
- Want simple configuration

### Use FastMCP Cloud if:
- Need remote access from anywhere
- Want managed cloud infrastructure
- Need to share MCP server across multiple users
- Prefer FastMCP's deployment platform

---

## Migration Between Deployment Methods

### From Local to Claude Desktop
1. Update Claude Desktop config with correct path to script
2. Restart Claude Desktop
3. No code changes needed

### From Local to FastMCP Cloud
1. Ensure `requirements.txt` contains `fastmcp>=2.12.3`
2. Push to GitHub repository
3. Create new FastMCP Cloud deployment
4. Set entrypoint to `server/solidworks_mcp_server_fastmcp.py:main`

### From Claude Desktop to FastMCP Cloud
1. Same as "Local to FastMCP Cloud"
2. Update clients to point to FastMCP Cloud instance instead

---

## Support

For deployment issues:
1. Check this guide's troubleshooting section
2. Review server logs for detailed error messages
3. Open an issue on GitHub with logs and configuration details

For FastMCP Cloud specific issues:
- Consult FastMCP Cloud documentation
- Check build logs in FastMCP Cloud dashboard
- Contact FastMCP Cloud support

For SolidWorks API questions:
- Refer to official SolidWorks API documentation
- Check the search results from the MCP server