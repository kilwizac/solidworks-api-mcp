---
type: method
interface: IModelDoc2
member: InsertRip
returns: void
parameters:
  -
    name: Gap
    type: System.Double
    description: Size of the rip gap
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IRipFeatureData
keywords:
  - rips
  - see
  - iripfeaturedata
  - sheet
  - metal
  - also
  - isheetmetalfeaturedata
  - insertrip
  - imodeldoc2
  - model
  - doc2
  - insert
  - rip
  - gap
  - double
  - void
  - access
  - edges
  - feature
  - vba
  - vb
  - net
---

# IModelDoc2.InsertRip

Creates a rip feature.

## Signature

```csharp
void InsertRip( 
   System.Double
Gap
)
```
## Parameters

- `Gap` (System.Double): Size of the rip gap

## Return Value

Unknown.

## Remarks

The direction of the rip is determined by the Mark value used to select the edges along which to rip.
Direction
Selection Mark
IRipFeatureData::GetDirection
Current
16
0
Other
32
1
Both
64
2

## Examples

- Access Edges on Rip Feature (VBA) (Access_and_Release_Access_to_Edges_Example_VB.htm)
- Access Edges on Rip Feature (VB.NET) (Access_and_Release_Access_to_Edges_Example_VBNET.htm)
- Access Edges on Rip Feature (C#) (Access_and_Release_Access_to_Edges_Example_CSharp.htm)

## See Also

- `IRipFeatureData`