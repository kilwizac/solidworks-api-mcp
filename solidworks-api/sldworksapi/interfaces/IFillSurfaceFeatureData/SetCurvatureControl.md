---
type: method
interface: IFillSurfaceFeatureData
member: SetCurvatureControl
returns: System.Boolean
parameters:
  -
    name: EntityIn
    type: System.Object
    description: Edge or sketch boundary returned by IFillSurfaceFeatureData::GetPatchBoundary or IFillSurfaceFeatureData::IGetPatchBoundary
  -
    name: ControlType
    type: System.Int32
    description: Contact type as defined in swContactType_e
  -
    name: BAll
    type: System.Boolean
    description: True to set contact type for all boundary entities, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFillSurfaceFeatureData.GetAlternateFace
  - IFillSurfaceFeatureData.GetCurvatureControl
  - IFillSurfaceFeatureData.GetPatchBoundary
  - IFillSurfaceFeatureData.GetPatchBoundaryCount
  - IFillSurfaceFeatureData.ISetPatchBoundary
  - IFillSurfaceFeatureData.SetPatchBoundary
  - IFillSurfaceFeatureData.ToggleAlternateFace
keywords:
  - setcurvaturecontrol
  - ifillsurfacefeaturedata
  - fill
  - surface
  - feature
  - data
  - curvature
  - control
  - entity
  - object
  - type
  - int32
  - all
  - boolean
---

# IFillSurfaceFeatureData.SetCurvatureControl

Sets the contact type for this fill-surface feature.

## Signature

```csharp
System.Boolean SetCurvatureControl( 
   System.Object
EntityIn
,
   System.Int32
ControlType
,
   System.Boolean
BAll
)
```
## Parameters

- `EntityIn` (System.Object): Edge or sketch boundary returned by IFillSurfaceFeatureData::GetPatchBoundary or IFillSurfaceFeatureData::IGetPatchBoundary
- `ControlType` (System.Int32): Contact type as defined in swContactType_e
- `BAll` (System.Boolean): True to set contact type for all boundary entities, false to not

## Return Value

True if contact type is set, false if not

## Remarks

Sketch boundaries must be set to swContact.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IFillSurfaceFeatureData.GetAlternateFace`
- `IFillSurfaceFeatureData.GetCurvatureControl`
- `IFillSurfaceFeatureData.GetPatchBoundary`
- `IFillSurfaceFeatureData.GetPatchBoundaryCount`
- `IFillSurfaceFeatureData.ISetPatchBoundary`
- `IFillSurfaceFeatureData.SetPatchBoundary`
- `IFillSurfaceFeatureData.ToggleAlternateFace`