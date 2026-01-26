---
type: method
interface: ISimpleFilletFeatureData2
member: GetEdgeCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISimpleFilletFeatureData2.Edges
  - ISimpleFilletFeatureData2.ISetEdges
keywords:
  - getedgecount
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - edge
  - count
  - int32
  - data
  - vba
  - vb
  - net
---

# ISimpleFilletFeatureData2.GetEdgeCount

Gets the number of edges on which to create a simple radius fillet.

## Signature

```csharp
System.Int32 GetEdgeCount()
```
## Parameters

None.

## Return Value

Number of edges

## Remarks

Call this method before calling
ISimpleFilletFeatureData2::IGetEdges
to get the size of the array for that method.

## Examples

- Get Simple Fillet Feature Data (VBA) (Get_Simple_Fillet_Feature_Data_Example_VB.htm)
- Get Simple Fillet Feature Data (VB.NET) (Get_Simple_Fillet_Feature_Data_Example_VBNET.htm)
- Get Simple Fillet Feature Data (C#) (Get_Simple_Fillet_Feature_Data_Example_CSharp.htm)

## See Also

- `ISimpleFilletFeatureData2.Edges`
- `ISimpleFilletFeatureData2.ISetEdges`