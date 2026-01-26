---
type: method
interface: IVariableFilletFeatureData2
member: GetConicRhoOrRadius2
returns: System.Double
parameters:
  -
    name: PFilletItem
    type: Vertex
    description: Vertex for which to get a value (see Remarks )
  -
    name: IsAssigned
    type: System.Boolean
    description: True if the conic value is assigned to each control point, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IVariableFilletFeatureData2.GetRadius2
  - IVariableFilletFeatureData2.IGetConicRhoOrRadius
  - IVariableFilletFeatureData2.SetConicRhoOrRadius
keywords:
  - fillets
  - conic
  - getconicrhoorradius2
  - ivariablefilletfeaturedata2
  - variable
  - fillet
  - feature
  - data2
  - rho
  - radius2
  - item
  - vertex
  - assigned
  - boolean
  - double
---

# IVariableFilletFeatureData2.GetConicRhoOrRadius2

Gets the conic rho or radius at the specified vertex.

## Signature

```csharp
System.Double GetConicRhoOrRadius2( 
   Vertex
PFilletItem
,
   out System.Boolean
IsAssigned
)
```
## Parameters

- `PFilletItem` (Vertex): Vertex for which to get a value (see Remarks )
- `IsAssigned` (System.Boolean): True if the conic value is assigned to each control point, false if not

## Return Value

Conic rho or radius

## Remarks

Before calling this method, call
IVariableFilletFeatureData2::GetFilletEdgeAtIndex
to specify PFilletItem.
If
IVariableFilletFeatureData2::ConicTypeForCrossSectionProfile
is set to
swFeatureFilletProfileType_e
.:
swFeatureFilletConicRadius (symmetric fillet only), then this method returns a radius.
swFeatureFilletConicRho (symmetric or asymmetric fillet), then this method returns a conic rho value in the range [0.05, 0.95].
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IVariableFilletFeatureData2.GetRadius2`
- `IVariableFilletFeatureData2.IGetConicRhoOrRadius`
- `IVariableFilletFeatureData2.SetConicRhoOrRadius`