---
type: method
interface: IDrawingDoc
member: EditCenterMarkProperties
returns: void
parameters:
  -
    name: Angle
    type: System.Double
    description: New angle of the center mark
  -
    name: Size
    type: System.Double
    description: New size of the center mark
  -
    name: Lines
    type: System.Boolean
    description: True displays the center mark lines, false displays the plus sign (+) at the circle center
  -
    name: DocSettings
    type: System.Boolean
    description: True uses the default settings for this document, false does not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - ICenterMark
keywords:
  - center
  - marks
  - see
  - icentermark
  - editcentermarkproperties
  - idrawingdoc
  - drawing
  - doc
  - edit
  - mark
  - properties
  - angle
  - double
  - size
  - lines
  - boolean
  - settings
  - void
---

# IDrawingDoc.EditCenterMarkProperties

Edits center mark properties.

## Signature

```csharp
void EditCenterMarkProperties( 
   System.Double
Angle
,
   System.Double
Size
,
   System.Boolean
Lines
,
   System.Boolean
DocSettings
)
```
## Parameters

- `Angle` (System.Double): New angle of the center mark
- `Size` (System.Double): New size of the center mark
- `Lines` (System.Boolean): True displays the center mark lines, false displays the plus sign (+) at the circle center
- `DocSettings` (System.Boolean): True uses the default settings for this document, false does not

## Return Value

Unknown.

## See Also

- `ICenterMark`