---
type: method
interface: IModeler
member: CreateLoftBody
returns: Body2
parameters:
  -
    name: PModDoc
    type: ModelDoc2
    description: Model document in which to create the lofted body
  -
    name: IsBlendClosed
    type: System.Boolean
    description: True for a closed, false for an open loft; if true and you selected less that three profiles; any selected guide curves must be closed curves
  -
    name: KeepTangency
    type: System.Boolean
    description: If the section curves are tangent, then you have the option to specify whether the resulting faces are also tangent; specify true to maintain the tangency as seen in the section curves, false to not NOTE: When generating tangent surfaces, SOLIDWORKS maintains planar and cylindrical surface shapes if the section curves exhibit these characteristics.
  -
    name: ForceNonRational
    type: System.Boolean
    description: True to force the resulting surface to be non-rational, false to not
  -
    name: IsSolidBody
    type: System.Boolean
    description: True to return a solid body, false to return a surface body
  -
    name: TessTolFactor
    type: System.Double
    description: Factor to control the number of intermediate sections used for loft with centerline; default value is 1.0; the greater the variable, the more intermediate sections created
  -
    name: StartMatchingType
    type: System.Int16
    description: Tangency type at the start profile (see Remarks )
  -
    name: EndMatchingType
    type: System.Int16
    description: Tangency type as the end profile (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFeatureManager.InsertCutBlend
  - IFeatureManager.InsertProtrusionBlend
  - IModelDoc2.InsertLoftRefSurface2
  - IModeler.CreateLoftSurface
  - IModeler.ICreateLoftSurface
keywords:
  - createloftbody
  - imodeler
  - modeler
  - create
  - loft
  - body
  - mod
  - doc
  - model
  - doc2
  - blend
  - closed
  - boolean
  - keep
  - tangency
  - force
  - non
  - rational
  - solid
  - tess
  - tol
  - factor
  - double
  - start
  - matching
  - type
  - int16
  - end
  - body2
---

# IModeler.CreateLoftBody

Obsolete. Superseded by IModeler::CreateLoftBody2.

## Signature

```csharp
Body2 CreateLoftBody( 
   ModelDoc2
PModDoc
,
   System.Boolean
IsBlendClosed
,
   System.Boolean
KeepTangency
,
   System.Boolean
ForceNonRational
,
   System.Boolean
IsSolidBody
,
   System.Double
TessTolFactor
,
   System.Int16
StartMatchingType
,
   System.Int16
EndMatchingType
)
```
## Parameters

- `PModDoc` (ModelDoc2): Model document in which to create the lofted body
- `IsBlendClosed` (System.Boolean): True for a closed, false for an open loft; if true and you selected less that three profiles; any selected guide curves must be closed curves
- `KeepTangency` (System.Boolean): If the section curves are tangent, then you have the option to specify whether the resulting faces are also tangent; specify true to maintain the tangency as seen in the section curves, false to not NOTE: When generating tangent surfaces, SOLIDWORKS maintains planar and cylindrical surface shapes if the section curves exhibit these characteristics.
- `ForceNonRational` (System.Boolean): True to force the resulting surface to be non-rational, false to not
- `IsSolidBody` (System.Boolean): True to return a solid body, false to return a surface body
- `TessTolFactor` (System.Double): Factor to control the number of intermediate sections used for loft with centerline; default value is 1.0; the greater the variable, the more intermediate sections created
- `StartMatchingType` (System.Int16): Tangency type at the start profile (see Remarks )
- `EndMatchingType` (System.Int16): Tangency type as the end profile (see Remarks )

## Return Value

Newly created loft

## Remarks

Selection of guide curves and centerline is optional. However, you must select the profiles in an order consistent with the desired direction of the loft. Because a solid is being created, the section profiles must be closed.
It is best to use guide curves, especially when you select profiles in the FeatureManager design tree.
You can use any number of profiles, However, if you select only one profile, then any selected guide curves must be closed curves.
Use
IModelDocExtension::SelectByID2
to select the profiles and guide curves. Set the mark for:
profile selections to 1
any guide curve selection to 2
centerline selection to 4
start tangency vector selection to 8
start tangency faces selection to 16 (not available)
end tangency vector selection to 32
end tangency faces selection to 64 (not available)
Linear edge, sketch line, axis, plane and planar faces are qualified for tangency vector sections.
The tangency types can be:
0 = none
1 = tangent to the normal of the profile
2 = tangent to the selected vector
3 = tangent to all adjacent faces sharing an edge with the start profile

## See Also

- `IFeatureManager.InsertCutBlend`
- `IFeatureManager.InsertProtrusionBlend`
- `IModelDoc2.InsertLoftRefSurface2`
- `IModeler.CreateLoftSurface`
- `IModeler.ICreateLoftSurface`