---
type: method
interface: IVariableFilletFeatureData2
member: GetDistance
returns: System.Double
parameters:
  -
    name: PFilletItem
    type: System.Object
    description: Vertex at which to get the radius
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IVariableFilletFeatureData2.SetDistance
keywords:
  - getdistance
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - distance
  - item
  - object
  - double
---

# IVariableFilletFeatureData2.GetDistance

Gets the Distance 2 radius for this asymmetric fillet.

## Signature

```csharp
System.Double GetDistance( 
   System.Object
PFilletItem
)
```
## Parameters

- `PFilletItem` (System.Object): Vertex at which to get the radius

## Return Value

Distance 2 radius at the vertex for the asymmetric fillet

## Remarks

Call
IVariableFilletFeatureData2::GetRadius2
to get the Distance 1 radius at the vertex for this asymmetric fillet.

## Examples

- IVariableFilletFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IVariableFilletFeatureData2)

## See Also

- `IVariableFilletFeatureData2.SetDistance`