---
type: method
interface: IFeatureManager
member: PreTrimSurface
returns: System.Boolean
parameters:
  -
    name: BMutualTrimIn
    type: System.Boolean
    description: True to use the selected intersecting surfaces as the trimming surfaces (mutual), false to use the selected surface, plane, or sketch as the trim tool (standard)
  -
    name: BSplitSystemIn
    type: System.Boolean
    description: True to let the SOLIDWORKS Design application determine which surfaces to trim, false to trim all possible surfaces
  -
    name: BSplitLinearIn
    type: System.Boolean
    description: False to naturally extend any trims along the intersecting surfaces, true to extend any trims linearly along the intersecting surfaces
  -
    name: BRemovePickedIn
    type: System.Boolean
    description: True to remove the selected surfaces, false to keep the selected surfaces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceTrimFeatureData
keywords:
  - trim
  - surfaces
  - surface
  - see
  - also
  - isurface
  - pretrimsurface
  - ifeaturemanager
  - feature
  - manager
  - pre
  - mutual
  - boolean
  - split
  - linear
  - remove
  - picked
  - create
  - trimmed
  - vb
  - net
  - vba
  - solid
  - body
---

# IFeatureManager.PreTrimSurface

Sets the trimming options before trimming a surface.

## Signature

```csharp
System.Boolean PreTrimSurface( 
   System.Boolean
BMutualTrimIn
,
   System.Boolean
BSplitSystemIn
,
   System.Boolean
BSplitLinearIn
,
   System.Boolean
BRemovePickedIn
)
```
## Parameters

- `BMutualTrimIn` (System.Boolean): True to use the selected intersecting surfaces as the trimming surfaces (mutual), false to use the selected surface, plane, or sketch as the trim tool (standard)
- `BSplitSystemIn` (System.Boolean): True to let the SOLIDWORKS Design application determine which surfaces to trim, false to trim all possible surfaces
- `BSplitLinearIn` (System.Boolean): False to naturally extend any trims along the intersecting surfaces, true to extend any trims linearly along the intersecting surfaces
- `BRemovePickedIn` (System.Boolean): True to remove the selected surfaces, false to keep the selected surfaces

## Return Value

True if successful, false if not

## Remarks

After calling this method:
Select the trimming surfaces or trim tool.
Optionally, call
IFeatureManager::SolidForTrim
.
Call
IFeatureManager::PostTrimSurface
.

## Examples

- Create Trimmed Surface Feature (C#) (Create_Trimmed_Surface_Feature_Example_CSharp.htm)
- Create Trimmed Surface Feature (VB.NET) (Create_Trimmed_Surface_Feature_Example_VBNET.htm)
- Create Trimmed Surface Feature (VBA) (Create_Trimmed_Surface_Feature_Example_VB.htm)
- Create Solid Body Surface Trim Feature (C#) (Create_Solid_Body_Surface_Trim_Feature_Example_CSharp.htm)
- Create Solid Body Surface Trim Feature (VB.NET) (Create_Solid_Body_Surface_Trim_Feature_Example_VBNET.htm)
- Create Solid Body Surface Trim Feature (VBA) (Create_Solid_Body_Surface_Trim_Feature_Example_VB.htm)

## See Also

- `ISurfaceTrimFeatureData`