---
type: method
interface: IModelDoc2
member: IInsertProjectedSketch2
returns: Feature
parameters:
  -
    name: Reverse
    type: System.Int32
    description: 1 to reverse the projected direction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - IModelDoc2.InsertProjectedSketch
keywords:
  - project
  - sketch
  - items
  - onto
  - surface
  - see
  - also
  - isurface
  - iinsertprojectedsketch2
  - imodeldoc2
  - model
  - doc2
  - insert
  - projected
  - sketch2
  - reverse
  - int32
  - feature
---

# IModelDoc2.IInsertProjectedSketch2

Projects the selected sketch items from the current sketch onto a selected surface.

## Signature

```csharp
Feature IInsertProjectedSketch2( 
   System.Int32
Reverse
)
```
## Parameters

- `Reverse` (System.Int32): 1 to reverse the projected direction

## Return Value

Newly created feature or NULL if the operation fails

## Remarks

You can reverse the direction in which the curve is projected. This is necessary only when the selected face wraps around the plane of the curve. For example, if the sketch being projected is surrounded by a cylindrical face, then two possible projections exist. The Reverse argument switches the direction based on the normal vector of the sketch. The default direction is along the sketch normal.

## See Also

- `IModelDoc2.InsertProjectedSketch`