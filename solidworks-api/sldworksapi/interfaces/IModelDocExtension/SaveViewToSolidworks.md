---
type: method
interface: IModelDocExtension
member: SaveViewToSolidworks
returns: System.Boolean
parameters:
  -
    name: ViewName
    type: System.String
    description: Custom view name
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - file-io
  - ui
related: []
keywords:
  - named
  - view
  - saveviewtosolidworks
  - imodeldocextension
  - model
  - doc
  - extension
  - save
  - solidworks
  - name
  - string
  - boolean
---

# IModelDocExtension.SaveViewToSolidworks

Saves the specified named view of this model to SOLIDWORKS.

## Signature

```csharp
System.Boolean SaveViewToSolidworks( 
   System.String
ViewName
)
```
## Parameters

- `ViewName` (System.String): Custom view name

## Return Value

True if named view successfully saved, false if not

## Remarks

For more information, read
SOLIDWORKS Design user-interface help > Detailing and Drawings > Drawings > Standard Drawing Views > Adding Named Views
.