---
type: method
interface: IVariableFilletFeatureData2
member: GetRadius2
returns: System.Double
parameters:
  -
    name: PFilletItem
    type: Vertex
    description: Vertex at which to get the radius
  -
    name: IsAssigned
    type: System.Boolean
    description: True if the radius is assigned to a control point, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IVariableFilletFeatureData2.DefaultRadius
  - IVariableFilletFeatureData2.GetConicRhoOrRadius2
  - IVariableFilletFeatureData2.ISetRadius
  - IVariableFilletFeatureData2.SetRadius
keywords:
  - getradius2
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - radius2
  - item
  - vertex
  - assigned
  - boolean
  - double
---

# IVariableFilletFeatureData2.GetRadius2

Gets the value of the Distance 1 radius at the specified vertex.

## Signature

```csharp
System.Double GetRadius2( 
   Vertex
PFilletItem
,
   out System.Boolean
IsAssigned
)
```
## Parameters

- `PFilletItem` (Vertex): Vertex at which to get the radius
- `IsAssigned` (System.Boolean): True if the radius is assigned to a control point, false if not

## Return Value

Fillet radius at the vertex specified by PFilletItem for the symmetric fillet; Distance 1 radius at the vertex for the asymmetric fillet (see Remarks )

## Remarks

Call
IVariableFilletFeatureData2::GetDistance
to get the Distance 2 radius at the vertex for the asymmetric fillet.

## Examples

- IVariableFilletFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IVariableFilletFeatureData2)

## See Also

- `IVariableFilletFeatureData2.DefaultRadius`
- `IVariableFilletFeatureData2.GetConicRhoOrRadius2`
- `IVariableFilletFeatureData2.ISetRadius`
- `IVariableFilletFeatureData2.SetRadius`