---
type: method
interface: ISketchPath
member: Select
returns: System.Boolean
parameters:
  -
    name: Append
    type: System.Boolean
    description: True appends the entity to the selection list, false replaces the selection list with this entity
  -
    name: Data
    type: SelectData
    description: SelectData object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - sketches
related: []
keywords:
  - select
  - isketchpath
  - sketch
  - path
  - append
  - boolean
  - data
---

# ISketchPath.Select

Selects a sketch path.

## Signature

```csharp
System.Boolean Select( 
   System.Boolean
Append
,
   SelectData
Data
)
```
## Parameters

- `Append` (System.Boolean): True appends the entity to the selection list, false replaces the selection list with this entity
- `Data` (SelectData): SelectData object

## Return Value

True if the selection is successful, false if not

## Examples

- ISketchPath (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchPath)