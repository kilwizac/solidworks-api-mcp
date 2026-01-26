---
type: method
interface: ISilhouetteEdge
member: Select2
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
deprecated: false
since_version: unknown
categories:
  - drawings
  - geometry
  - selections
related: []
keywords:
  - select2
  - isilhouetteedge
  - silhouette
  - edge
  - append
  - boolean
  - data
  - select
  - attached
  - note
  - vb
  - net
  - vba
---

# ISilhouetteEdge.Select2

Selects the silhouette edge in the active drawing view.

## Signature

```csharp
System.Boolean Select2( 
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

## Examples

- Select Silhouette Edge Attached to Note (C#) (Select_Silhouette_Edge_Attached_to_Note_Example_CSharp.htm)
- Select Silhouette Edge Attached to Note (VB.NET) (Select_Silhouette_Edge_Attached_to_Note_Example_VBNET.htm)
- Select Silhouette Edge Attached to Note (VBA) (Select_Silhouette_Edge_Attached_to_Note_Example_VB.htm)