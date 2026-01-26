# SolidWorks API MCP Server

A Model Context Protocol (MCP) server that provides intelligent access to SolidWorks API documentation. This server enables AI assistants (like Claude) to search, retrieve, and reference SolidWorks API information contextually.

## Features

- **Full API Documentation Search** - Access to comprehensive SolidWorks API interfaces, methods, and properties
- **Smart Semantic Search** - Intelligent searching based on keywords, categories, and relevance scoring
- **Programming Guides** - Includes best practices, patterns, and code examples
- **Structured JSON Data** - Well-organized API reference data in JSON format for reliable queries
- **MCP Protocol Support** - Full implementation of the Model Context Protocol (2024-11-05)

## Installation

### Prerequisites

- Python 3.8+
- SolidWorks API data files (included in this repository)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/kilwizac/sw-api-mcp.git
cd sw-api-mcp
```

2. No additional dependencies required - the server uses only Python standard library.

## Usage

### Running the Server

The server reads from standard input (stdin) and writes responses to standard output (stdout) following the MCP protocol.

```bash
python server/solidworks_mcp_server.py
```

### Configuration

You can override the data directory using the `SW_API_DATA_ROOT` environment variable:

```bash
export SW_API_DATA_ROOT=/path/to/solidworks-api
python server/solidworks_mcp_server.py
```

If not set, the server defaults to `../solidworks-api` relative to the server script.

### Using with Claude Desktop

Add to your `claude_desktop_config.json`:

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

## Project Structure

```
sw-api-mcp/
├── server/
│   └── solidworks_mcp_server.py    # Main MCP server implementation
├── solidworks-api/
│   ├── _index.json                 # Documentation index
│   ├── _search_index.json          # Search index for queries
│   └── json/
│       ├── sldworksapi/            # API interface definitions
│       └── progguide/              # Programming guides and examples
├── README.md                        # This file
└── .gitignore                       # Git ignore rules
```

## Available Tools

The server exposes the following tools to MCP clients:

### `search_api`
Search the SolidWorks API documentation by keywords.

**Parameters:**
- `query` (string): Search terms (e.g., "create feature", "get properties")
- `limit` (integer, optional): Maximum results to return (default: 10)

**Returns:**
Array of matching documentation entries with titles, summaries, and relevance scores.

### `get_interface_info`
Get detailed information about a specific API interface.

**Parameters:**
- `interface_name` (string): Name of the interface (e.g., "IDocument", "IFeature")

**Returns:**
Detailed interface documentation including methods, properties, and examples.

## Data Sources

The API documentation data is structured as follows:

### JSON Database Structure

- **Interfaces**: Complete definitions of SolidWorks API interfaces
  - Location: `solidworks-api/json/sldworksapi/interfaces/`
  - Each interface has its own directory with method and property files

- **Programming Guides**: Best practices and code examples
  - Location: `solidworks-api/json/progguide/`
  - Includes patterns, examples, and tutorials

- **Indexes**: Fast lookup structures
  - `_index.json`: Main documentation index
  - `_search_index.json`: Optimized search index for quick queries

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
4. **MCPServer**: Handles MCP protocol messages and coordinates responses

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

### Search returns no results
- Try simpler search terms
- Check that the `_search_index.json` file is not corrupted
- Ensure the data directory path is correct

### Memory issues with large searches
- Limit results using the `limit` parameter
- Use more specific search terms
- Consider running on a machine with more available memory

## Version

- Server Version: 0.1.0
- MCP Protocol Version: 2024-11-05