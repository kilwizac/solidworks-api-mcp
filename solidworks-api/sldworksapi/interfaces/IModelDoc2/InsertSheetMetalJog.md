---
type: method
interface: IModelDoc2
member: InsertSheetMetalJog
returns: void
parameters:
  -
    name: Angle
    type: System.Double
    description: Jog angle
  -
    name: Radius
    type: System.Double
    description: Jog radius
  -
    name: OffsetDist
    type: System.Double
    description: Offset distance
  -
    name: FlipDir
    type: System.Boolean
    description: True flips the jog direction, false does not
  -
    name: FixProjLen
    type: System.Boolean
    description: True fixes the projected length, false does not
  -
    name: DimPos
    type: System.Int16
    description: Dimension position
  -
    name: BendPos
    type: System.Int16
    description: Bend position
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IJogFeatureData
keywords:
  - jog
  - see
  - ijogfeaturedata
  - feature
  - also
  - ifeature
  - sheet
  - metal
  - isheetmetalfeaturedata
  - jogs
  - insertsheetmetaljog
  - imodeldoc2
  - model
  - doc2
  - insert
  - angle
  - double
  - radius
  - offset
  - dist
  - flip
  - dir
  - boolean
  - fix
  - proj
  - len
  - dim
  - pos
  - int16
  - bend
  - void
---

# IModelDoc2.InsertSheetMetalJog

Inserts a sheet metal jog in the current model document.

## Signature

```csharp
void InsertSheetMetalJog( 
   System.Double
Angle
,
   System.Double
Radius
,
   System.Double
OffsetDist
,
   System.Boolean
FlipDir
,
   System.Boolean
FixProjLen
,
   System.Int16
DimPos
,
   System.Int16
BendPos
)
```
## Parameters

- `Angle` (System.Double): Jog angle
- `Radius` (System.Double): Jog radius
- `OffsetDist` (System.Double): Offset distance
- `FlipDir` (System.Boolean): True flips the jog direction, false does not
- `FixProjLen` (System.Boolean): True fixes the projected length, false does not
- `DimPos` (System.Int16): Dimension position
- `BendPos` (System.Int16): Bend position

## Return Value

Unknown.

## See Also

- `IJogFeatureData`