---
type: method
interface: IFeatureManager
member: InsertFillSurface2
returns: Feature
parameters:
  -
    name: Resolutions
    type: System.Int32
    description: Controls the resolution or quality of the surface (see Remarks )
  -
    name: Options
    type: System.Int32
    description: Options as defined in swFeatureFillSurfaceOptions_e
  -
    name: VPatchBoundaries
    type: System.Object
    description: Array of edges or sketches for the patch boundaries
  -
    name: VCurvatureControlType
    type: System.Object
    description: Array of curve control methods as defined in swContactType_e
  -
    name: VFaces
    type: System.Object
    description: Array of faces to use for direction
  -
    name: VConstraintCurves
    type: System.Object
    description: Array of constraint curves ( edges or sketches )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFillSurfaceFeatureData
keywords:
  - fillsurfacefeaturedata
  - see
  - ifillsurfacefeaturedata
  - feature
  - also
  - ifeature
  - fill
  - surface
  - insertfillsurface2
  - ifeaturemanager
  - manager
  - insert
  - surface2
  - resolutions
  - int32
  - options
  - patch
  - boundaries
  - object
  - curvature
  - control
  - type
  - faces
  - constraint
  - curves
  - vb
  - net
  - vba
  - gaps
  - body
---

# IFeatureManager.InsertFillSurface2

Inserts a fill-surface feature in the model.

## Signature

```csharp
Feature InsertFillSurface2( 
   System.Int32
Resolutions
,
   System.Int32
Options
,
   System.Object
VPatchBoundaries
,
   System.Object
VCurvatureControlType
,
   System.Object
VFaces
,
   System.Object
VConstraintCurves
)
```
## Parameters

- `Resolutions` (System.Int32): Controls the resolution or quality of the surface (see Remarks )
- `Options` (System.Int32): Options as defined in swFeatureFillSurfaceOptions_e
- `VPatchBoundaries` (System.Object): Array of edges or sketches for the patch boundaries
- `VCurvatureControlType` (System.Object): Array of curve control methods as defined in swContactType_e
- `VFaces` (System.Object): Array of faces to use for direction
- `VConstraintCurves` (System.Object): Array of constraint curves ( edges or sketches )

## Return Value

Pointer to the IFeature object

## Remarks

You must use
IModelDocExtension::SelectByID2
and the following Mark values to select edges that bound the surface to be filled:
Boundary curves = 1
Boundary with contact curvature control = 257
Boundary with tangent curvature control = 513
Constraint curves or internal curves = 4
The resolution argument can be set to 1, 2, or 3. The higher the value, the better the resolution.
Use the
IBody2::Diagnose
and the
IDiagnoseResult
APIs to get the gaps to fill.

## Examples

- Insert Fill-surface Feature (C#) (Insert_Fill-surface_Feature_Example_CSharp.htm)
- Insert Fill-surface Feature (VB.NET) (Insert_Fill-surface_Feature_Example_VBNET.htm)
- Insert Fill-surface Feature (VBA) (Insert_Fill-surface_Feature_Example_VB.htm)
- Get and Fill Gaps in Body (C#) (Get_and_Fill_Gaps_in_Body_Example_CSharp.htm)
- Get and Fill Gaps in Body (VB.NET) (Get_and_Fill_Gaps_in_Body_Example_VBNET.htm)
- Get and Fill Gaps in Body (VBA) (Get_and_Fill_Gaps_in_Body_Example_VB.htm)

## See Also

- `IFillSurfaceFeatureData`