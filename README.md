# SolidWorks API MCP Server

A Model Context Protocol (MCP) server that provides intelligent access to SolidWorks API documentation. This server enables AI assistants (like Claude) to search, retrieve, and reference SolidWorks API information contextually.

## Features

- **Full API Documentation Search** - Access to comprehensive SolidWorks API interfaces, methods, and properties
- **Smart Semantic Search** - Intelligent searching based on keywords, categories, and relevance scoring
- **Programming Guides** - Includes best practices, patterns, and code examples
- **Structured JSON Data** - Well-organized API reference data in JSON format for reliable queries
- **MCP Protocol Support** - Full implementation of the Model Context Protocol (2024-11-05)
- **Multiple Deployment Options** - Local, Claude Desktop, or FastMCP Cloud

## Quick Start

### Prerequisites

- Python 3.8+
- SolidWorks API data files (included in this repository)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/kilwizac/sw-api-mcp.git
cd sw-api-mcp
```

2. Install dependencies (FastMCP Cloud version):
```bash
pip install -r requirements.txt
```

Note: The standard MCP version (`solidworks_mcp_server.py`) requires no external dependencies.

## Deployment Options

### Option 1: Local Deployment (Standard MCP Protocol)

Use the standard `solidworks_mcp_server.py` for local deployment with no external dependencies.

**Running the server:**
```bash
python server/solidworks_mcp_server.py
```

The server reads from stdin and writes responses to stdout following the MCP protocol.

**Configuration:**
You can override the data directory using the `SW_API_DATA_ROOT` environment variable:
```bash
export SW_API_DATA_ROOT=/path/to/solidworks-api
python server/solidworks_mcp_server.py
```

### Option 2: Claude Desktop Integration

Add to your `claude_desktop_config.json`:

**On macOS/Linux** (typically `~/.config/Claude/claude_desktop_config.json`):
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

**On Windows** (typically `%APPDATA%\Claude\claude_desktop_config.json`):
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

After updating the config, restart Claude Desktop to activate the server.

### Option 3: FastMCP Cloud Deployment

Use `solidworks_mcp_server_fastmcp.py` for deployment to FastMCP Cloud platform.

**Entrypoint:** `server/solidworks_mcp_server_fastmcp.py:main`

**Features:**
- Automatic HTTP server wrapping
- FastMCP framework integration
- Cloud-native deployment

**Install dependencies:**
```bash
pip install -r requirements.txt
```

**Local testing:**
```bash
python server/solidworks_mcp_server_fastmcp.py
```

## Project Structure

```
sw-api-mcp/
├── server/
│   ├── solidworks_mcp_server.py           # Standard MCP server (recommended for local/Claude)
│   └── solidworks_mcp_server_fastmcp.py   # FastMCP Cloud compatible version
├── solidworks-api/
│   ├── _index.json                        # Documentation index
│   ├── _search_index.json                 # Search index for queries
│   └── json/
│       ├── sldworksapi/                   # API interface definitions
│       └── progguide/                     # Programming guides and examples
├── README.md                              # This file
├── requirements.txt                       # Python dependencies
└── .gitignore                             # Git configuration
```

## Available Tools

Both server versions expose the following tools to MCP clients:

### `search_solidworks_api`
Search the SolidWorks API documentation by keywords.

**Parameters:**
- `query` (string): Search terms (e.g., "create feature", "get properties")
- `limit` (integer, optional): Maximum results to return (default: 10)

**Returns:**
Array of matching documentation entries with titles, summaries, and relevance scores.

### `get_interface_details` (FastMCP version only)
Get detailed information about a specific API interface.

**Parameters:**
- `interface_name` (string): Name of the interface (e.g., "IDocument", "IFeature")

**Returns:**
Detailed interface documentation including methods, properties, and examples.

### `get_method_details` (FastMCP version only)
Get information about a specific method or property.

**Parameters:**
- `interface_name` (string): Name of the interface
- `method_name` (string): Name of the method or property

**Returns:**
Detailed method/property documentation including parameters and examples.

### `search_programming_guides` (FastMCP version only)
Search programming guides and code examples.

**Parameters:**
- `query` (string): Search terms (e.g., "macro best practices", "event handler")
- `limit` (integer, optional): Maximum results to return (default: 5)

**Returns:**
List of matching programming guides with summaries and links.

## API Search Examples

### Search for documentation
```
Query: "create a feature"
Returns: Interfaces and methods related to feature creation
```

### Search for properties
```
Query: "get document properties"
Returns: Property accessors and getters for document objects
```

### Search for patterns
```
Query: "event handler"
Returns: Event handling patterns and examples
```

## Architecture

The server implements the MCP protocol with the following core components:

1. **DataStore**: Loads and caches API documentation JSON files
2. **Indexing System**: Creates searchable indexes of API documentation
3. **Search Engine**: Tokenizes queries and scores results based on relevance
4. **MCPServer**: Handles MCP protocol messages and coordinates responses (standard version)
5. **FastMCP Integration**: Provides framework integration for cloud deployment (FastMCP version)

## Server Specifications

- **Name**: solidworks-mcp
- **Version**: 0.1.0
- **MCP Protocol Version**: 2024-11-05
- **Language**: Python 3.8+

### Standard Version (`solidworks_mcp_server.py`)
- **Dependencies**: None (standard library only)
- **Best for**: Local deployment, Claude Desktop
- **I/O**: stdin/stdout (JSON-based MCP protocol)

### FastMCP Version (`solidworks_mcp_server_fastmcp.py`)
- **Dependencies**: fastmcp>=2.12.3
- **Best for**: FastMCP Cloud deployment
- **I/O**: HTTP server wrapper
- **Entrypoint**: `main()` function returns FastMCP instance

## Data Format

The API documentation is stored in JSON format with the following structure:

- `_index.json` - Master index of all documentation
- `_search_index.json` - Pre-computed search index for fast queries
- `json/_index.json` - JSON-specific documentation index
- `json/sldworksapi/interfaces/` - Individual interface definitions
- `json/progguide/` - Programming guides and patterns

## Environment Variables

- `SW_API_DATA_ROOT` - Optional path to the API data directory. If not set, defaults to `./solidworks-api` relative to the server script.

Example:
```bash
export SW_API_DATA_ROOT=/custom/path/to/solidworks-api
python server/solidworks_mcp_server.py
```

## Contributing

To extend or modify the documentation data:

1. The `solidworks-api/` folder contains all the indexed data
2. Additional API interfaces should be added following the existing structure
3. Update the index files when adding new documentation

## License

This project is provided as-is for use with SolidWorks API documentation.

## Support

For issues or questions about the MCP server, please open an issue on GitHub.

For SolidWorks API documentation, refer to the official SolidWorks API Help resources.

## Troubleshooting

### Server fails to start
- Ensure Python 3.8+ is installed
- Check that the `solidworks-api` directory exists and contains `_index.json`
- Verify file permissions for the data directory
- For FastMCP version: ensure fastmcp is installed (`pip install -r requirements.txt`)

### Search returns no results
- Try simpler search terms
- Check that the `_search_index.json` file is not corrupted
- Ensure the data directory path is correct

### FastMCP Cloud build fails
- Verify the entrypoint is set to `server/solidworks_mcp_server_fastmcp.py:main`
- Ensure `fastmcp` is in requirements.txt
- Check that the `main()` function returns a FastMCP instance

### Memory issues with large searches
- Limit results using the `limit` parameter
- Use more specific search terms
- Consider running on a machine with more available memory

## Version

- Server Version: 0.1.0
- MCP Protocol Version: 2024-11-05