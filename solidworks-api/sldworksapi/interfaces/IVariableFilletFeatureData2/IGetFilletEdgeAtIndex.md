---
type: method
interface: IVariableFilletFeatureData2
member: IGetFilletEdgeAtIndex
returns: Edge
parameters:
  -
    name: Index
    type: System.Int32
    description: Index at which fillet edge is required
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IVariableFilletFeatureData2.FilletEdgeCount
  - IVariableFilletFeatureData2.GetFilletEdgeAtIndex
  - IVariableFilletFeatureData2.IGetConicRhoOrRadius
  - IVariableFilletFeatureData2.ISetConicRhoOrRadius
keywords:
  - igetfilletedgeatindex
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - edge
  - index
  - int32
---

# IVariableFilletFeatureData2.IGetFilletEdgeAtIndex

Gets the fillet edge at the specified index.

## Signature

```csharp
Edge IGetFilletEdgeAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index at which fillet edge is required

## Return Value

Fillet edge

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `IVariableFilletFeatureData2.FilletEdgeCount`
- `IVariableFilletFeatureData2.GetFilletEdgeAtIndex`
- `IVariableFilletFeatureData2.IGetConicRhoOrRadius`
- `IVariableFilletFeatureData2.ISetConicRhoOrRadius`