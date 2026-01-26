---
type: method
interface: ISketchManager
member: CreateRegionHatch
returns: SketchHatch
parameters:
  -
    name: X
    type: System.Double
    description: X coordinate anywhere within the closed sketch profile
  -
    name: Y
    type: System.Double
    description: Y coordinate anywhere within the closed sketch profile
  -
    name: Z
    type: System.Double
    description: Z coordinate anywhere within the closed sketch profile
  -
    name: Angle
    type: System.Double
    description: Angle of the hatch if the hatch is not solid
  -
    name: Scale
    type: System.Double
    description: Scale factor for the hatch if the hatch is not solid
  -
    name: Color
    type: System.Int32
    description: COLORREF value describing the color used for the hatch
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
  - ISketchManager.CreateBoundaryHatch
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
  - createregionhatch
  - isketchmanager
  - manager
  - create
  - region
  - double
  - angle
  - scale
  - color
  - int32
  - hatchname
  - string
  - layername
---

# ISketchManager.CreateRegionHatch

Creates an area hatch/fill region hatch using a closed sketch profile.

## Signature

```csharp
SketchHatch CreateRegionHatch( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
,
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

- `X` (System.Double): X coordinate anywhere within the closed sketch profile
- `Y` (System.Double): Y coordinate anywhere within the closed sketch profile
- `Z` (System.Double): Z coordinate anywhere within the closed sketch profile
- `Angle` (System.Double): Angle of the hatch if the hatch is not solid
- `Scale` (System.Double): Scale factor for the hatch if the hatch is not solid
- `Color` (System.Int32): COLORREF value describing the color used for the hatch
- `Hatchname` (System.String): Type or name of the hatch from the Sldwks.ptn file
- `Layername` (System.String): Layer name for the hatch if a drawing document

## Return Value

Sketch hatch

## Remarks

This method creates a single area hatch/fill region hatch. All three point coordinates are important. This point is compared to all sketch contours to determine one unique external sketch region that contains the point.

## See Also

- `IModelDoc2.InsertHatchedFace`
- `ISketchManager.CreateBoundaryHatch`