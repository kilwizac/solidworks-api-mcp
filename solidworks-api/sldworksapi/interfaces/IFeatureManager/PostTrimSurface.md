---
type: method
interface: IFeatureManager
member: PostTrimSurface
returns: Feature
parameters:
  -
    name: BSewSurfaceIn
    type: System.Boolean
    description: True to sew the resulting trimmed surfaces, false to not
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
  - posttrimsurface
  - ifeaturemanager
  - feature
  - manager
  - post
  - sew
  - boolean
  - create
  - trimmed
  - vb
  - net
  - vba
  - solid
  - body
---

# IFeatureManager.PostTrimSurface

Sets whether to sew the resulting trimmed surfaces.

## Signature

```csharp
Feature PostTrimSurface( 
   System.Boolean
BSewSurfaceIn
)
```
## Parameters

- `BSewSurfaceIn` (System.Boolean): True to sew the resulting trimmed surfaces, false to not

## Return Value

Feature

## Remarks

Before calling this method:
Call
IFeatureManager::PreTrimSurface
.
Select the trimming surfaces or trim tool.
Optionally, call
IFeatureManager::SolidForTrim
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