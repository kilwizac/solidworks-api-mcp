---
type: method
interface: ISketchManager
member: CreateBoundaryHatch
returns: System.Object
parameters:
  -
    name: Angle
    type: System.Double
    description: Angle of the hatch if hatch is not solid
  -
    name: Scale
    type: System.Double
    description: Scale factor for the hatch if hatch is not solid
  -
    name: Color
    type: System.Int32
    description: COLORREF value describing the color used for this hatch
  -
    name: Hatchname
    type: System.String
    description: Type or name of the hatch from the Sldwks.ptn file
  -
    name: Layername
    type: System.String
    description: Layer name for the hatch if a drawing document
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - IModelDoc2.InsertHatchedFace
  - ISketchManager.CreateRegionHatch
keywords:
  - area
  - hatch
  - see
  - isketchhatch
  - crosshatch
  - also
  - ifacehatch
  - sketches
  - sketch
  - tools
  - fill
  - isketch
  - createboundaryhatch
  - isketchmanager
  - manager
  - create
  - boundary
  - angle
  - double
  - scale
  - color
  - int32
  - hatchname
  - string
  - layername
  - object
---

# ISketchManager.CreateBoundaryHatch

Creates area hatch/fill boundary hatches using closed sketch profiles.

## Signature

```csharp
System.Object CreateBoundaryHatch( 
   System.Double
Angle
,
   System.Double
Scale
,
   System.Int32
Color
,
   System.String
Hatchname
,
   System.String
Layername
)
```
## Parameters

- `Angle` (System.Double): Angle of the hatch if hatch is not solid
- `Scale` (System.Double): Scale factor for the hatch if hatch is not solid
- `Color` (System.Int32): COLORREF value describing the color used for this hatch
- `Hatchname` (System.String): Type or name of the hatch from the Sldwks.ptn file
- `Layername` (System.String): Layer name for the hatch if a drawing document

## Return Value

Array of sketch hatches

## Remarks

Before calling this method, select the closed sketch profile for the area hatch/fill boundary hatch.

## See Also

- `IModelDoc2.InsertHatchedFace`
- `ISketchManager.CreateRegionHatch`