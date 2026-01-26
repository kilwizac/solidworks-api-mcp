---
type: method
interface: ISilhouetteEdge
member: Select
returns: System.Boolean
parameters:
  -
    name: Append
    type: System.Boolean
    description: True appends this selection to the selection list, false replaces the selection list with this selection
  -
    name: Data
    type: SelectData
    description: SelectData object
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - drawings
  - geometry
  - selections
related: []
keywords:
  - select
  - isilhouetteedge
  - silhouette
  - edge
  - append
  - boolean
  - data
---

# ISilhouetteEdge.Select

Obsolete. Superseded by ISilhouetteEdge::Select2.

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

- `Append` (System.Boolean): True appends this selection to the selection list, false replaces the selection list with this selection
- `Data` (SelectData): SelectData object

## Return Value

True if the selection is successful, false if not