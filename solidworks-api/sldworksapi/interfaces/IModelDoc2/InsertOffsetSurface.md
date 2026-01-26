---
type: method
interface: IModelDoc2
member: InsertOffsetSurface
returns: void
parameters:
  -
    name: Thickness
    type: System.Double
    description: Offset of surface from reference
  -
    name: Reverse
    type: System.Boolean
    description: True to reverse the direction of the offset, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IBody2.CreateOffsetSurface
  - IBody2.ICreateOffsetSurface
  - IBody2.MakeOffset
  - IModeler.CreateOffsetSurface
  - IModeler.ICreateOffsetSurface
  - ISurface.GetOffsetSurfParams2
  - ISurface.IGetOffsetSurfParams2
  - ISurface.IsOffset
  - ISurfaceOffsetFeatureData
keywords:
  - surface
  - see
  - also
  - isurface
  - offset
  - feature
  - ifeature
  - insertoffsetsurface
  - imodeldoc2
  - model
  - doc2
  - insert
  - thickness
  - double
  - reverse
  - boolean
  - void
---

# IModelDoc2.InsertOffsetSurface

Inserts an offset surface.

## Signature

```csharp
void InsertOffsetSurface( 
   System.Double
Thickness
,
   System.Boolean
Reverse
)
```
## Parameters

- `Thickness` (System.Double): Offset of surface from reference
- `Reverse` (System.Boolean): True to reverse the direction of the offset, false to not

## Return Value

Unknown.

## Remarks

Make the selections using
IModelDocExtension::SelectByID2
before calling this method.
S
ee the SOLIDWORKS Help for more information about what entities are valid for selection.

## See Also

- `IBody2.CreateOffsetSurface`
- `IBody2.ICreateOffsetSurface`
- `IBody2.MakeOffset`
- `IModeler.CreateOffsetSurface`
- `IModeler.ICreateOffsetSurface`
- `ISurface.GetOffsetSurfParams2`
- `ISurface.IGetOffsetSurfParams2`
- `ISurface.IsOffset`
- `ISurfaceOffsetFeatureData`