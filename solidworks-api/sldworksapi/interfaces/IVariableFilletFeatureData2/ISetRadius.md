---
type: method
interface: IVariableFilletFeatureData2
member: ISetRadius
returns: void
parameters:
  -
    name: PFilletItem
    type: Vertex
    description: Vertex whose radius to set
  -
    name: Radius
    type: System.Double
    description: Radius
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IVariableFilletFeatureData2.DefaultRadius
  - IVariableFilletFeatureData2.GetRadius2
  - IVariableFilletFeatureData2.ISetConicRhoOrRadius
  - IVariableFilletFeatureData2.SetRadius
keywords:
  - isetradius
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - radius
  - item
  - vertex
  - double
  - void
---

# IVariableFilletFeatureData2.ISetRadius

Sets the radius value for specified fillet item.

## Signature

```csharp
void ISetRadius( 
   Vertex
PFilletItem
,
   System.Double
Radius
)
```
## Parameters

- `PFilletItem` (Vertex): Vertex whose radius to set
- `Radius` (System.Double): Radius

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `IVariableFilletFeatureData2.DefaultRadius`
- `IVariableFilletFeatureData2.GetRadius2`
- `IVariableFilletFeatureData2.ISetConicRhoOrRadius`
- `IVariableFilletFeatureData2.SetRadius`