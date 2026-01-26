# Output Structure and Templates

## File Organization

```
solidworks-api/
|-- _index.json
|-- _search_index.json
|-- interfaces/
|   |-- ISldWorks/
|   |   |-- _interface.md
|   |   |-- ActivateDoc3.md
|   |   `-- ...
|   |-- IModelDoc2/
|   |   |-- _interface.md
|   |   |-- GetTitle.md
|   |   `-- ...
|   `-- ...
|-- enums/
|   |-- swDocumentTypes_e.md
|   `-- ...
|-- patterns/
|   |-- traversing-features.md
|   `-- ...
`-- errors/
    |-- hresult-codes.md
    `-- ...
```

If multiple docsets are ingested in one run, prefer this layout to avoid collisions:

```
solidworks-api/
`-- sldworksapi/
    |-- _index.json
    |-- _search_index.json
    |-- interfaces/
    |-- enums/
    |-- patterns/
    `-- errors/
```

## Method or Property Document Template

```markdown
---
type: method
interface: IModelDoc2
member: GetTitle
returns: string
parameters: []
docset: sldworksapi
readonly: true
deprecated: false
since_version: "2015"
categories:
  - core
  - documents
related:
  - IModelDoc2.GetPathName
  - IModelDoc2.GetType
  - ISldWorks.ActiveDoc
keywords:
  - title
  - document name
  - file name
  - caption
---

# IModelDoc2.GetTitle

Returns the title of the document as displayed in the SOLIDWORKS title bar.

## Signature

```csharp
string GetTitle()
```

## Parameters

None.

## Return Value

| Type | Description |
|------|-------------|
| `string` | Document title. For unsaved documents, returns the default name (for example, "Part1"). For saved documents, returns the filename without extension. |

## Remarks

- Returns the display name, not the full file path. Use `GetPathName` for the full path.
- For assemblies, this is the root assembly name.
- Virtual components return their virtual name.

## Common Patterns

```csharp
IModelDoc2 doc = (IModelDoc2)swApp.ActiveDoc;
if (doc != null)
{
    string title = doc.GetTitle();
    Debug.Print($"Active document: {title}");
}
```

## Error Conditions

| Condition | Result |
|-----------|--------|
| No document open | Returns `null` |
| Document is closing | May return empty string |

## See Also

- `IModelDoc2.GetPathName` - Full file path
- `IModelDoc2.GetType` - Document type (part/assembly/drawing)
- `ISldWorks.GetDocuments` - All open documents
```

Notes:
- For properties, keep the same layout but set `type: property` and include `readonly` as true or false.
- For events, set `type: event` and include a signature block that matches the event declaration.
- If there are parameters, replace `parameters: []` with a list of parameter objects and describe each in the Parameters section.

## Interface Overview Template

```markdown
---
type: interface
interface: IModelDoc2
inherits: null
description: Base interface for all SOLIDWORKS document types
member_count: 847
docset: sldworksapi
categories:
  - core
  - documents
common_members:
  - GetTitle
  - GetPathName
  - Save3
  - Extension
  - SelectionManager
  - FeatureManager
---

# IModelDoc2

Base interface for all SOLIDWORKS document types (parts, assemblies, drawings).

## Overview

`IModelDoc2` provides common functionality shared by all document types. Access through `ISldWorks.ActiveDoc` or by casting document-specific interfaces.

## Getting an Instance

```csharp
IModelDoc2 doc = (IModelDoc2)swApp.ActiveDoc;
IPartDoc part = (IPartDoc)swApp.ActiveDoc;
IModelDoc2 docFromPart = (IModelDoc2)part;

object[] docs = (object[])swApp.GetDocuments();
foreach (IModelDoc2 d in docs) { }
```

## Key Member Groups

### Document Properties
- `GetTitle()` - Display name
- `GetPathName()` - Full file path
- `GetType()` - Document type enum

### Selection
- `SelectionManager` - Access selections
- `ClearSelection2()` - Clear all selections

### Features
- `FeatureManager` - Access feature tree
- `FirstFeature()` - Traverse features

### Save and Export
- `Save3()` - Save with options
- `SaveAs4()` - Save as different format

## Type Casting

| Document Type | Primary Interface | Cast Pattern |
|--------------|-------------------|--------------|
| Part | `IPartDoc` | `(IPartDoc)swApp.ActiveDoc` |
| Assembly | `IAssemblyDoc` | `(IAssemblyDoc)swApp.ActiveDoc` |
| Drawing | `IDrawingDoc` | `(IDrawingDoc)swApp.ActiveDoc` |
```

## Enum Template

```markdown
---
type: enum
name: swDocumentTypes_e
description: Document type identifiers
member_count: 7
docset: swconst
categories:
  - documents
  - constants
used_by:
  - ISldWorks.NewDocument
  - ISldWorks.OpenDoc7
  - IModelDoc2.GetType
---

# swDocumentTypes_e

Identifies SOLIDWORKS document types.

## Values

| Member | Value | Description | File Extension |
|--------|-------|-------------|----------------|
| `swDocNONE` | 0 | Unknown or invalid | - |
| `swDocPART` | 1 | Part document | .sldprt |
| `swDocASSEMBLY` | 2 | Assembly document | .sldasm |
| `swDocDRAWING` | 3 | Drawing document | .slddrw |
| `swDocSDM` | 4 | SolidWorks Document Manager | - |
| `swDocLAYOUT` | 5 | Layout (rare) | - |
| `swDocIMPORTED_PART` | 6 | Imported part | various |
| `swDocIMPORTED_ASSEMBLY` | 7 | Imported assembly | various |

## Common Usage

```csharp
int docType = doc.GetType();
switch ((swDocumentTypes_e)docType)
{
    case swDocumentTypes_e.swDocPART:
        IPartDoc part = (IPartDoc)doc;
        break;
    case swDocumentTypes_e.swDocASSEMBLY:
        IAssemblyDoc assy = (IAssemblyDoc)doc;
        break;
    case swDocumentTypes_e.swDocDRAWING:
        IDrawingDoc draw = (IDrawingDoc)doc;
        break;
}
```

## Notes

- `swDocNONE` is returned when no document is open or for invalid references.
- Imported documents are converted to native format on open.
```

## Patterns and Errors

- `patterns/` holds reusable usage patterns that cut across interfaces.
- `errors/` holds error catalogs and troubleshooting pages referenced by member docs.
- Use `type: pattern` or `type: error` frontmatter with `keywords` and `categories` so they can be searched.
