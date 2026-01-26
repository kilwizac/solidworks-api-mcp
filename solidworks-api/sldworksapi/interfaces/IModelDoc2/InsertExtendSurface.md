---
type: method
interface: IModelDoc2
member: InsertExtendSurface
returns: void
parameters:
  -
    name: ExtendLinear
    type: System.Boolean
    description: True to extend surface linearly, false to extend along the same surface
  -
    name: EndCondition
    type: System.Int32
    description: 0 - Extend surface by given distance 1 - Extend surface up to a selected point 2 - Extend surface up to a selected surface
  -
    name: Distance
    type: System.Double
    description: Distance to extend surface along
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISurfaceExtendFeatureData
keywords:
  - extend
  - surface
  - see
  - also
  - isurface
  - insertextendsurface
  - imodeldoc2
  - model
  - doc2
  - insert
  - linear
  - boolean
  - end
  - condition
  - int32
  - distance
  - double
  - void
---

# IModelDoc2.InsertExtendSurface

Extends a surface along the selected faces or edges.

## Signature

```csharp
void InsertExtendSurface( 
   System.Boolean
ExtendLinear
,
   System.Int32
EndCondition
,
   System.Double
Distance
)
```
## Parameters

- `ExtendLinear` (System.Boolean): True to extend surface linearly, false to extend along the same surface
- `EndCondition` (System.Int32): 0 - Extend surface by given distance 1 - Extend surface up to a selected point 2 - Extend surface up to a selected surface
- `Distance` (System.Double): Distance to extend surface along

## Return Value

Unknown.

## Remarks

The selection list can contain faces or edges from the surface. These selected entities will be extended away from the surface according to the input arguments.
The selected point or surface to which to extend should be in the selection list. If EndCondition is to a selected surface, then currently only faces from solids are supported through the API.

## See Also

- `ISurfaceExtendFeatureData`