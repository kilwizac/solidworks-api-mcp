---
type: method
interface: IVariableFilletFeatureData2
member: SetRadius
returns: void
parameters:
  -
    name: PFilletItem
    type: System.Object
    description: Vertex at which to set the radius
  -
    name: Radius
    type: System.Double
    description: Radius of the symmetric fillet at the vertex specified by PFilletItem; Distance 1 radius of the asymmetric fillet at the vertex
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IVariableFilletFeatureData2.DefaultRadius
  - IVariableFilletFeatureData2.GetRadius2
  - IVariableFilletFeatureData2.SetConicRhoOrRadius
keywords:
  - setradius
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - radius
  - item
  - object
  - double
  - void
---

# IVariableFilletFeatureData2.SetRadius

Sets the value of the Distance 1 radius at the specified vertex.

## Signature

```csharp
void SetRadius( 
   System.Object
PFilletItem
,
   System.Double
Radius
)
```
## Parameters

- `PFilletItem` (System.Object): Vertex at which to set the radius
- `Radius` (System.Double): Radius of the symmetric fillet at the vertex specified by PFilletItem; Distance 1 radius of the asymmetric fillet at the vertex

## Return Value

Unknown.

## Remarks

Call
IVariableFilletFeatureData2::SetDistance
to set the Distance 2 radius at the vertex for the asymmetric fillet.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IVariableFilletFeatureData2.DefaultRadius`
- `IVariableFilletFeatureData2.GetRadius2`
- `IVariableFilletFeatureData2.SetConicRhoOrRadius`