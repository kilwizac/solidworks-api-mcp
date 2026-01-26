---
type: method
interface: IDrawingDoc
member: InsertCenterMark3
returns: CenterMark
parameters:
  -
    name: Style
    type: System.Int32
    description: Style as defined in swCenterMarkStyle_e
  -
    name: Propagate
    type: System.Boolean
    description: True if the center mark should propagate throughout the pattern, false if not
  -
    name: Slot
    type: System.Boolean
    description: True if this is slot-style center mark, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related: []
keywords:
  - center
  - marks
  - see
  - icentermark
  - insertcentermark3
  - idrawingdoc
  - drawing
  - doc
  - insert
  - mark3
  - style
  - int32
  - propagate
  - boolean
  - slot
  - mark
---

# IDrawingDoc.InsertCenterMark3

Inserts a center mark in a drawing document.

## Signature

```csharp
CenterMark InsertCenterMark3( 
   System.Int32
Style
,
   System.Boolean
Propagate
,
   System.Boolean
Slot
)
```
## Parameters

- `Style` (System.Int32): Style as defined in swCenterMarkStyle_e
- `Propagate` (System.Boolean): True if the center mark should propagate throughout the pattern, false if not
- `Slot` (System.Boolean): True if this is slot-style center mark, false if not

## Return Value

Center mark

## Remarks

Call
IView::AutoInsertCenterMarks
to automatically insert center marks in multiple drawing views.