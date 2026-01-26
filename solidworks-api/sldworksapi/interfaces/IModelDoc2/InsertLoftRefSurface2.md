---
type: method
interface: IModelDoc2
member: InsertLoftRefSurface2
returns: void
parameters:
  -
    name: Closed
    type: System.Boolean
    description: True for closed loft, false for open loft; if True, then you must have at least three profiles selected, and if you are using guide curves, the guide curves must be closed
  -
    name: KeepTangency
    type: System.Boolean
    description: If the section curves are tangent, then you have the option to specify whether the resulting surfaces are also be tangent; specify True to maintain the tangency as seen in the section curves, false otherwise; when generating tangent surfaces, SOLIDWORKS maintains planar and cylindrical surface shapes if the section curves exhibit these characteristics
  -
    name: ForceNonRational
    type: System.Boolean
    description: True to force the resulting surface to be non-rational, false to not
  -
    name: TessToleranceFactor
    type: System.Double
    description: Factor to control the number of intermediate sections used for loft with centerline; default value is 1.0; the greater the variable, the more intermediate sections created
  -
    name: StartMatchingType
    type: System.Int16
    description: Tangency type at the start profile (see Remarks )
  -
    name: EndMatchingType
    type: System.Int16
    description: Tangency type at the end profile (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IFeatureManager.InsertCutBlend
  - IFeatureManager.InsertProtrusionBlend
  - ILoftFeatureData
  - IModeler.CreateLoftSurface
keywords:
  - lofts
  - see
  - also
  - iloftfeaturedata
  - surfaces
  - surface
  - isurface
  - loft
  - insertloftrefsurface2
  - imodeldoc2
  - model
  - doc2
  - insert
  - ref
  - surface2
  - closed
  - boolean
  - keep
  - tangency
  - force
  - non
  - rational
  - tess
  - tolerance
  - factor
  - double
  - start
  - matching
  - type
  - int16
  - end
  - void
---

# IModelDoc2.InsertLoftRefSurface2

Creates a loft surface from the selected profiles, centerline, and guide curves.

## Signature

```csharp
void InsertLoftRefSurface2( 
   System.Boolean
Closed
,
   System.Boolean
KeepTangency
,
   System.Boolean
ForceNonRational
,
   System.Double
TessToleranceFactor
,
   System.Int16
StartMatchingType
,
   System.Int16
EndMatchingType
)
```
## Parameters

- `Closed` (System.Boolean): True for closed loft, false for open loft; if True, then you must have at least three profiles selected, and if you are using guide curves, the guide curves must be closed
- `KeepTangency` (System.Boolean): If the section curves are tangent, then you have the option to specify whether the resulting surfaces are also be tangent; specify True to maintain the tangency as seen in the section curves, false otherwise; when generating tangent surfaces, SOLIDWORKS maintains planar and cylindrical surface shapes if the section curves exhibit these characteristics
- `ForceNonRational` (System.Boolean): True to force the resulting surface to be non-rational, false to not
- `TessToleranceFactor` (System.Double): Factor to control the number of intermediate sections used for loft with centerline; default value is 1.0; the greater the variable, the more intermediate sections created
- `StartMatchingType` (System.Int16): Tangency type at the start profile (see Remarks )
- `EndMatchingType` (System.Int16): Tangency type at the end profile (see Remarks )

## Return Value

Unknown.

## Remarks

Selection of guide curves and centerline is optional; however, selection of the profiles must be in an order consistent with the desired direction of the loft. Because you are creating a surface, the section profiles can be open.
Use of guide curves is strongly recommended, especially when selection of profiles is done in the FeatureManager design tree.
You can use any number of profiles; however, if you have selected only one profile, then any selected guide curves must be closed curves.
Use
IModelDocExtension::SelectByID2
to select the profiles and guide curves. The mark for:
profile selections should be 1
any guide curve selection, if provided, should be 2
centerline selection, if provided, should be 4
start tangency vector selection, if provided, should be an 8
start tangency faces selection, if provided, should be a 16 (not available currently
end tangency vector selection, if provided, should be a 32
end tangency faces selection, if provided, should be a 64 (not available currently)
Linear edge, sketch line, axis, plane and planar faces are qualified for tangency vector sections.
The tangency types can be one of the following:
0
=
none
1
=
tangent to the normal of the profile
2
=
tangent to a selected vector
3
=
tangency to all the adjacent faces sharing an edge with the start profile
4
=
tangent to some of the selected faces sharing an edge with the start profile (not available at this moment).

## See Also

- `IFeatureManager.InsertCutBlend`
- `IFeatureManager.InsertProtrusionBlend`
- `ILoftFeatureData`
- `IModeler.CreateLoftSurface`