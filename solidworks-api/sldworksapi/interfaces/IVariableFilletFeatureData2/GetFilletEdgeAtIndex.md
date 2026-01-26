---
type: method
interface: IVariableFilletFeatureData2
member: GetFilletEdgeAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Zero-based index of the fillet edge
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IVariableFilletFeatureData2.FilletEdgeCount
  - IVariableFilletFeatureData2.GetConicRhoOrRadius
  - IVariableFilletFeatureData2.GetConicRhoOrRadius2
  - IVariableFilletFeatureData2.IGetFilletEdgeAtIndex
  - IVariableFilletFeatureData2.SetConicRhoOrRadius
keywords:
  - getfilletedgeatindex
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - edge
  - index
  - int32
  - object
---

# IVariableFilletFeatureData2.GetFilletEdgeAtIndex

Gets the fillet edge at the specified index.

## Signature

```csharp
System.Object GetFilletEdgeAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Zero-based index of the fillet edge

## Return Value

Fillet edge

## Remarks

See
Accessing Selections that Define Features
for additional details.

## Examples

- IVariableFilletFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IVariableFilletFeatureData2)

## See Also

- `IVariableFilletFeatureData2.FilletEdgeCount`
- `IVariableFilletFeatureData2.GetConicRhoOrRadius`
- `IVariableFilletFeatureData2.GetConicRhoOrRadius2`
- `IVariableFilletFeatureData2.IGetFilletEdgeAtIndex`
- `IVariableFilletFeatureData2.SetConicRhoOrRadius`