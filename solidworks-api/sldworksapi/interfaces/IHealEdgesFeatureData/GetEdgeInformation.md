---
type: method
interface: IHealEdgesFeatureData
member: GetEdgeInformation
returns: void
parameters:
  -
    name: EdgeCountBefore
    type: System.Int32
    description: Number of edges before healing
  -
    name: EdgeCountAfter
    type: System.Int32
    description: Number of edges after healing
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - getedgeinformation
  - ihealedgesfeaturedata
  - heal
  - edges
  - feature
  - data
  - edge
  - information
  - count
  - before
  - int32
  - after
  - void
  - modify
  - vba
  - vb
  - net
---

# IHealEdgesFeatureData.GetEdgeInformation

Gets the number of edges before healing and the number of edges after healing.

## Signature

```csharp
void GetEdgeInformation( 
   out System.Int32
EdgeCountBefore
,
   out System.Int32
EdgeCountAfter
)
```
## Parameters

- `EdgeCountBefore` (System.Int32): Number of edges before healing
- `EdgeCountAfter` (System.Int32): Number of edges after healing

## Return Value

Unknown.

## Examples

- Modify Heal Edges Feature (VBA) (Modify_Heal_Edges_Feature_Example_VB.htm)
- Get Heal Edges Feature Data (C#) (Get_Heal_Edges_Feature_Data_Example_CSharp.htm)
- Get Heal Edges Feature Data (VB.NET) (Get_Heal_Edges_Feature_Data_Example_VBNET.htm)
- Get Heal Edges Feature Data (VBA) (Get_Heal_Edges_Feature_Data_Example_VB.htm)