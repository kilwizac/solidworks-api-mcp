---
type: method
interface: IFeatureManager
member: FilletXpertMakeCorner
returns: Feature
parameters:
  -
    name: CornerType
    type: System.Int32
    description: See Remarks
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.FeatureFillet
  - IFeatureManager.FilletXpertChange
  - IFeatureManager.FilletXpertRemove
  - IFeatureManager.IFeatureFillet
keywords:
  - fillets
  - corner
  - feature
  - filletxpert
  - filletxpertmakecorner
  - ifeaturemanager
  - manager
  - fillet
  - xpert
  - make
  - type
  - int32
---

# IFeatureManager.FilletXpertMakeCorner

Creates or changes a fillet corner feature.

## Signature

```csharp
Feature FilletXpertMakeCorner( 
   System.Int32
CornerType
)
```
## Parameters

- `CornerType` (System.Int32): See Remarks

## Return Value

Feature

## Remarks

For the fillet corner, everything is dependent on the convexity of the three filleted edges adjacent.
If all three edges have the same convexity, then no corner substitution is possible. Otherwise, there will be two edges of one convexity, and one of the other. It does not matter if the two same edges are both convex or both concave, as long as the edges are the same.
The valid values for the CornerType argument are:
1 = if the two edges with the same convexity have the same radius, make a triangular corner patch.
2 = if the two edges with the same convexity have the same radius, make a quadrilateral corner patch.
3 = if the two edges with the same convexity have different radii, make a triangular corner patch.
4 = if the two edges with the same convexity have different radii, make two triangular corner patches (which together look like a split quadrilateral patch).
5 = if the two edges with the same convexity have different radii, make a quadrilateral corner patch.
NOTE
: Types 1 and 3 relate to one another, as do types 2 and 5. This means that if the corner type is not consistent with the convexity/radius requirements, then the appropriate type will be mapped and substituted. Thus, specifying type 1 on a corner with two edges of the same convexity, but different radii, results in a type 3, automatically.

## See Also

- `IFeatureManager.FeatureFillet`
- `IFeatureManager.FilletXpertChange`
- `IFeatureManager.FilletXpertRemove`
- `IFeatureManager.IFeatureFillet`